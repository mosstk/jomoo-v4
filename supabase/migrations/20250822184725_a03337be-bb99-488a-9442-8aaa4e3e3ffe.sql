-- Create function for vector similarity search
CREATE OR REPLACE FUNCTION public.match_documents(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.1,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  title text,
  content text,
  category text,
  product_type text,
  metadata jsonb,
  similarity float
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    knowledge_base.id,
    knowledge_base.title,
    knowledge_base.content,
    knowledge_base.category,
    knowledge_base.product_type,
    knowledge_base.metadata,
    1 - (knowledge_base.embedding <=> query_embedding) AS similarity
  FROM knowledge_base
  WHERE knowledge_base.embedding IS NOT NULL
    AND 1 - (knowledge_base.embedding <=> query_embedding) > match_threshold
  ORDER BY knowledge_base.embedding <=> query_embedding
  LIMIT match_count;
$$;