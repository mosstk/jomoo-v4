-- Update page_links array to change /bath to /bathtub
UPDATE knowledge_base 
SET metadata = jsonb_set(
  metadata,
  '{page_links}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN value::text = '"/bath"' THEN '"/bathtub"'::jsonb
        ELSE value
      END
    )
    FROM jsonb_array_elements(metadata->'page_links')
  )
)
WHERE metadata->'page_links' ? '/bath';