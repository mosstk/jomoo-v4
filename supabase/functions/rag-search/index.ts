import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const openaiApiKey = Deno.env.get('OPENAI_API_KEY')!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface SearchRequest {
  query: string;
  limit?: number;
  category?: string;
  product_type?: string;
}

interface KnowledgeBase {
  id: string;
  title: string;
  content: string;
  category: string;
  product_type: string | null;
  metadata: any;
  similarity?: number;
}

// Function to create embedding using OpenAI
async function createEmbedding(text: string): Promise<number[]> {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
      encoding_format: 'float',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('OpenAI API error:', error);
    throw new Error(`OpenAI API error: ${response.status}`);
  }

  const result = await response.json();
  return result.data[0].embedding;
}

// Function to search knowledge base using vector similarity
async function searchKnowledgeBase(
  embedding: number[],
  limit: number = 5,
  category?: string,
  product_type?: string
): Promise<KnowledgeBase[]> {
  let query = supabase
    .from('knowledge_base')
    .select('id, title, content, category, product_type, metadata')
    .rpc('match_documents', {
      query_embedding: embedding,
      match_threshold: 0.1,
      match_count: limit,
    });

  // Add filters if provided
  if (category) {
    query = query.eq('category', category);
  }
  
  if (product_type) {
    query = query.eq('product_type', product_type);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Supabase search error:', error);
    throw new Error(`Search failed: ${error.message}`);
  }

  return data || [];
}

// Function to generate AI response using search results
async function generateResponse(query: string, searchResults: KnowledgeBase[]): Promise<string> {
  const context = searchResults
    .map(result => `${result.title}: ${result.content}`)
    .join('\n\n');

  const prompt = `คุณเป็นผู้ช่วยที่เชี่ยวชาญเรื่องสุขภัณฑ์ JOMOO 

ข้อมูลจากฐานความรู้:
${context}

คำถามจากลูกค้า: ${query}

กรุณาตอบคำถามตามข้อมูลที่ให้มาเท่านั้น หากไม่มีข้อมูลที่เกี่ยวข้อง ให้แนะนำให้ติดต่อทีมงานเพื่อสอบถามรายละเอียดเพิ่มเติม

ตอบเป็นภาษาไทยและให้ข้อมูลที่เป็นประโยชน์:`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'คุณเป็นผู้ช่วยที่เชี่ยวชาญเรื่องสุขภัณฑ์ JOMOO ตอบคำถามตามข้อมูลที่ให้มาเท่านั้น' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 500,
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('OpenAI chat completion error:', error);
    throw new Error(`AI response generation failed: ${response.status}`);
  }

  const result = await response.json();
  return result.choices[0].message.content;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, limit = 5, category, product_type }: SearchRequest = await req.json();

    if (!query) {
      throw new Error('Query is required');
    }

    console.log('Searching for:', query);

    // Create embedding for the query
    const embedding = await createEmbedding(query);

    // Search knowledge base
    const searchResults = await searchKnowledgeBase(embedding, limit, category, product_type);

    // Generate AI response
    const aiResponse = await generateResponse(query, searchResults);

    return new Response(
      JSON.stringify({
        success: true,
        response: aiResponse,
        results: searchResults,
        query: query,
        results_count: searchResults.length
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in rag-search function:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        fallback_response: 'ขออทัยที่ไม่สามารถค้นหาข้อมูลได้ในขณะนี้ กรุณาติดต่อทีมงานเพื่อสอบถามรายละเอียดเพิ่มเติม'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});