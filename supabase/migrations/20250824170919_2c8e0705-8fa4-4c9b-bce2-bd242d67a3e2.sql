-- Update existing records to add page_link to metadata for Smart Toilet
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/smart-toilet"'
)
WHERE product_type = 'smart_toilet' OR title LIKE '%Smart Toilet%';

-- Update existing records to add page_link to metadata for Rain Shower
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/rain-shower"'
)
WHERE product_type = 'rain_shower' OR title LIKE '%Rain Shower%' OR title LIKE '%ฝักบัว%';

-- Update existing records to add page_link to metadata for Basin
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/basin"'
)
WHERE product_type = 'basin' OR title LIKE '%Basin%' OR title LIKE '%อ่างล้างหน้า%';

-- Update existing records to add page_link to metadata for Bathtub
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/bath"'
)
WHERE product_type = 'bathtub' OR title LIKE '%Bathtub%' OR title LIKE '%อ่างอาบน้ำ%';

-- Update existing records to add page_link to metadata for Shower Enclosure
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/shower-enclosure"'
)
WHERE product_type = 'shower_enclosure' OR title LIKE '%Shower Enclosure%' OR title LIKE '%ห้องอาบน้ำ%';

-- Update existing records to add page_link to metadata for Faucet
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/faucet"'
)
WHERE product_type = 'faucet' OR title LIKE '%Faucet%' OR title LIKE '%ก๊อกน้ำ%';

-- Update existing records to add page_link to metadata for Bidet Spray
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/bidet-spray"'
)
WHERE product_type = 'bidet_spray' OR title LIKE '%Bidet%' OR title LIKE '%สายฉีด%';

-- Update existing records to add page_link to metadata for Accessories
UPDATE knowledge_base 
SET metadata = jsonb_set(
  COALESCE(metadata, '{}'::jsonb), 
  '{page_link}', 
  '"/accessories"'
)
WHERE product_type = 'accessories' OR title LIKE '%Accessories%' OR title LIKE '%อุปกรณ์%';