-- Update /bath links to /bathtub in existing knowledge base
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/bathtub"'
)
WHERE metadata->>'page_link' = '/bath';