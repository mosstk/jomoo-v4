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

// Function to generate embeddings for all knowledge base entries
async function generateAllEmbeddings() {
  console.log('Starting to generate embeddings for all knowledge base entries...');

  // Get all entries without embeddings
  const { data: entries, error } = await supabase
    .from('knowledge_base')
    .select('id, title, content')
    .is('embedding', null);

  if (error) {
    throw new Error(`Failed to fetch entries: ${error.message}`);
  }

  if (!entries || entries.length === 0) {
    console.log('No entries found without embeddings');
    return { processed: 0, message: 'All entries already have embeddings' };
  }

  console.log(`Found ${entries.length} entries without embeddings`);

  let processed = 0;
  let failed = 0;

  for (const entry of entries) {
    try {
      console.log(`Processing entry: ${entry.title}`);
      
      // Combine title and content for embedding
      const textToEmbed = `${entry.title}\n${entry.content}`;
      
      // Generate embedding
      const embedding = await createEmbedding(textToEmbed);
      
      // Update the entry with the embedding
      const { error: updateError } = await supabase
        .from('knowledge_base')
        .update({ embedding })
        .eq('id', entry.id);

      if (updateError) {
        console.error(`Failed to update entry ${entry.id}:`, updateError);
        failed++;
      } else {
        console.log(`Successfully updated entry: ${entry.title}`);
        processed++;
      }

      // Add a small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100));

    } catch (error) {
      console.error(`Failed to process entry ${entry.id}:`, error);
      failed++;
    }
  }

  return {
    processed,
    failed,
    total: entries.length,
    message: `Successfully processed ${processed} entries, ${failed} failed`
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action } = await req.json().catch(() => ({ action: 'generate_all' }));

    let result;

    if (action === 'generate_all' || !action) {
      result = await generateAllEmbeddings();
    } else {
      throw new Error('Invalid action. Use "generate_all"');
    }

    return new Response(
      JSON.stringify({
        success: true,
        ...result
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in generate-embeddings function:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});