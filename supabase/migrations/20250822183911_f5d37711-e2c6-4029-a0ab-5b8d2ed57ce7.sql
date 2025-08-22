-- Create extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Create knowledge_base table for RAG data
CREATE TABLE public.knowledge_base (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  product_type text,
  product_id text,
  metadata jsonb DEFAULT '{}',
  embedding vector(1536), -- OpenAI embedding dimension
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.knowledge_base ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since this is product information)
CREATE POLICY "Public can read knowledge base"
ON public.knowledge_base
FOR SELECT
USING (true);

-- Create policy for admin insert/update (we'll need authentication later)
CREATE POLICY "Service role can manage knowledge base"
ON public.knowledge_base
FOR ALL
USING (true)
WITH CHECK (true);

-- Create index for similarity search
CREATE INDEX ON public.knowledge_base USING ivfflat (embedding vector_cosine_ops);

-- Create index for category filtering
CREATE INDEX idx_knowledge_base_category ON public.knowledge_base(category);
CREATE INDEX idx_knowledge_base_product_type ON public.knowledge_base(product_type);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_knowledge_base_updated_at
  BEFORE UPDATE ON public.knowledge_base
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial knowledge base data from the website
INSERT INTO public.knowledge_base (title, content, category, product_type, metadata) VALUES 
-- General company information
('เกี่ยวกับ JOMOO', 'JOMOO เป็นแบรนด์สุขภัณฑ์คุณภาพสูงจากจีน ที่มีประสบการณ์ในการผลิตและจำหน่ายสุขภัณฑ์มากกว่า 30 ปี เรามีสินค้าหลากหลายประเภท ตั้งแต่โถส้วม อ่างล้างหน้า ก๊อกน้ำ ห้องอาบน้ำ และอุปกรณ์เสริมต่างๆ', 'company_info', NULL, '{"type": "about_company"}'),

-- Smart Toilet information
('Smart Toilet คืออะไร', 'Smart Toilet หรือโถส้วมอัจฉริยะ เป็นโถส้วมที่มีเทคโนโลยีขั้นสูง เช่น ระบบฉีดล้าง ระบบอบแห้ง ระบบควบคุมอุณหภูมิ และฟีเจอร์อัจฉริยะอื่นๆ ที่ช่วยเพิ่มความสะดวกสบายและสุขอนามัย', 'product_info', 'smart_toilet', '{"features": ["bidet_function", "heated_seat", "auto_flush", "deodorizer"]}'),

-- One Piece Toilet information  
('One Piece Toilet คืออะไร', 'One Piece Toilet เป็นโถส้วมที่ผลิตมาเป็นชิ้นเดียว ทำให้มีดีไซน์ที่เรียบร้อย ง่ายต่อการทำความสะอาด และมีความแข็งแรงทนทาน เหมาะสำหรับบ้านที่ต้องการความเรียบง่ายและสวยงาม', 'product_info', 'one_piece_toilet', '{"benefits": ["easy_cleaning", "modern_design", "durability"]}'),

-- Basin information
('อ่างล้างหน้า Basin', 'อ่างล้างหน้าของ JOMOO มีหลากหลายดีไซน์ ตั้งแต่แบบแขวนผนัง แบบตั้งพื้น และแบบฝังเคาน์เตอร์ ผลิตจากเซรามิกคุณภาพสูง ทนทานต่อการใช้งาน และง่ายต่อการดูแลรักษา', 'product_info', 'basin', '{"types": ["wall_mounted", "floor_standing", "countertop"]}'),

-- Bathtub information
('อ่างอาบน้ำ Bathtub', 'อ่างอาบน้ำของ JOMOO ออกแบบมาเพื่อการผ่อนคลายและความสะดวกสบาย มีทั้งแบบฝังพื้น แบบวางอิสระ และแบบมุม เหมาะสำหรับการแช่ตัวผ่อนคลายหลังวันที่เหนื่อย', 'product_info', 'bathtub', '{"types": ["built_in", "freestanding", "corner"]}'),

-- Shower Enclosure information
('ห้องอาบน้ำ Shower Enclosure', 'ห้องอาบน้ำของ JOMOO มีทั้งแบบบานเลื่อน บานเปิด และบานพับ ใช้กระจกนิรภัยคุณภาพสูง พร้อมระบบกันรั่วซึมที่มีประสิทธิภาพ เหมาะสำหรับพื้นที่ห้องน้ำทุกขนาด', 'product_info', 'shower_enclosure', '{"types": ["sliding_door", "hinged_door", "pivot_door"]}'),

-- Faucet information
('ก๊อกน้ำ Faucet', 'ก๊อกน้ำของ JOMOO ผลิตจากวัสดุคุณภาพสูง ทนทานต่อการใช้งาน มีดีไซน์ทันสมัย และระบบประหยัดน้ำ เหมาะสำหรับใช้ในห้องครัวและห้องน้ำ', 'product_info', 'faucet', '{"features": ["water_saving", "modern_design", "durable_material"]}'),

-- Rain Shower information
('ฝักบัวสายฝน Rain Shower', 'ฝักบัวสายฝนของ JOMOO ให้ประสบการณ์การอาบน้ำที่เหมือนสายฝนธรรมชาติ มีหลายขนาดและรูปแบบให้เลือก พร้อมระบบควบคุมแรงดันน้ำที่สามารถปรับได้', 'product_info', 'rain_shower', '{"sizes": ["8_inch", "10_inch", "12_inch"], "features": ["pressure_control", "natural_rain_feel"]}'),

-- Bidet Spray information
('สายฉีดชำระ Bidet Spray', 'สายฉีดชำระของ JOMOO ช่วยเพิ่มความสะอาดและสุขอนามัย มีระบบควบคุมแรงดันน้ำ สายฉีดที่ยืดหยุ่น และหัวฉีดที่ออกแบบมาเพื่อการใช้งานที่สะดวกสบาย', 'product_info', 'bidet_spray', '{"features": ["pressure_control", "flexible_hose", "ergonomic_design"]}'),

-- Urinal information
('โถปัสสาวะชาย Urinal', 'โถปัสสาวะชายของ JOMOO ออกแบบมาเพื่อความสะดวกในการใช้งานและการดูแลรักษา มีระบบประหยัดน้ำ และการออกแบบที่เหมาะสมกับสถานที่สาธารณะและบ้านพักอาศัย', 'product_info', 'urinal', '{"features": ["water_saving", "easy_maintenance", "hygienic_design"]}'),

-- Accessories information
('อุปกรณ์เสริม Accessories', 'อุปกรณ์เสริมของ JOMOO ประกอบด้วย ที่แขวนผ้า ที่วางสบู่ ที่ใส่กระดาษชำระ และอุปกรณ์อื่นๆ ที่ช่วยเสริมความสวยงามและความสะดวกสบายในห้องน้ำ', 'product_info', 'accessories', '{"types": ["towel_rack", "soap_dispenser", "toilet_paper_holder", "hooks"]}'),

-- Contact information
('การติดต่อและสอบถาม', 'สำหรับการสอบถามข้อมูลเพิ่มเติม ราคา การติดตั้ง หรือการบริการหลังการขาย สามารถติดต่อทีมงานของเราได้ทางหน้าเว็บไซต์ในส่วน Contact หรือผ่านช่องทางอื่นๆ ที่ระบุไว้ในเว็บไซต์', 'contact_info', NULL, '{"sections": ["contact_page", "inquiry_form"]}'),

-- Warranty information
('การรับประกันสินค้า', 'สินค้าของ JOMOO มีการรับประกันคุณภาพ โดยสามารถลงทะเบียนรับประกันผ่านเว็บไซต์ของเรา เพื่อความคุ้มครองและการบริการหลังการขายที่ดีที่สุด', 'warranty_info', NULL, '{"registration": "online_warranty_registration"}');