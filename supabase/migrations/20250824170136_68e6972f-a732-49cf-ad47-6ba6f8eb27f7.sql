-- เพิ่มข้อมูลสินค้าใน knowledge_base
INSERT INTO knowledge_base (title, content, category, product_type, metadata) VALUES
-- Basin Products
('อ่างล้างหน้า Basin ของ JOMOO', 'อ่างล้างหน้าของ JOMOO ผลิตจากเซรามิกคุณภาพสูง มีหลายรูปแบบและขนาด เช่น อ่างฝังใน อ่างวางบน และอ่างแบบแขวน ทนทานต่อการใช้งาน ง่ายต่อการทำความสะอาด และมีดีไซน์ที่เข้ากับห้องน้ำทุกสไตล์', 'product_info', 'basin', '{"page_link": "/basin", "features": ["ceramic_material", "multiple_styles", "easy_clean", "durable"]}'),

-- Bathtub Products
('อ่างอาบน้ำ Bathtub', 'อ่างอาบน้ำ JOMOO ออกแบบเพื่อการผ่อนคลายสูงสุด มีหลายรูปแบบ เช่น อ่างฝังพื้น อ่างเข้ามุม และอ่างแบบยืนอิสระ ทำจากวัสดุคุณภาพสูงที่ทนทาน มีระบบไฮโดรเทอราปี และการออกแบบตามหลักสรีรศาสตร์', 'product_info', 'bathtub', '{"page_link": "/bath", "features": ["relaxation", "multiple_styles", "hydrotherapy", "ergonomic_design"]}'),

-- Shower Enclosure
('ห้องอาบน้ำ Shower Enclosure', 'ห้องอาบน้ำของ JOMOO มีกระจกนิรภัยคุณภาพสูง โครงสร้างแข็งแรง มีหลายรูปแบบ เช่น แบบมุม แบบเหลี่ยม และแบบโค้ง พร้อมระบบกันซึมที่มีประสิทธิภาพ ง่ายต่อการติดตั้งและบำรุงรักษา', 'product_info', 'shower_enclosure', '{"page_link": "/shower-enclosure", "features": ["safety_glass", "strong_structure", "waterproof", "easy_install"]}'),

-- Accessories
('อุปกรณ์เสริม Accessories', 'อุปกรณ์เสริมห้องน้ำของ JOMOO ครบครัน เช่น ที่แขวนผ้า ที่วางสบู่ ราวจับ และอุปกรณ์ต่างๆ ผลิตจากวัสดุคุณภาพ ทนทานต่อความชื้น และมีดีไซน์ที่เข้ากับสุขภัณฑ์ JOMOO', 'product_info', 'accessories', '{"page_link": "/accessories", "features": ["complete_set", "quality_material", "moisture_resistant", "matching_design"]}'),

-- Bidet Spray
('สายฉีดชำระ Bidet Spray', 'สายฉีดชำระของ JOMOO มีแรงดันน้ำที่ปรับได้ หัวฉีดคุณภาพสูง ทนทานต่อการใช้งาน ง่ายต่อการติดตั้ง และช่วยเพิ่มความสะอาดและสุขอนามัย', 'product_info', 'bidet_spray', '{"page_link": "/bidet-spray", "features": ["adjustable_pressure", "quality_nozzle", "durable", "hygienic"]}'),

-- Company Info เพิ่มเติม
('ประเภทสินค้า TOA JOMOO', 'TOA JOMOO มีสินค้าสุขภัณฑ์หลากหลายประเภท ได้แก่ Smart Toilet (โถส้วมอัจฉริยะ) One Piece Toilet (โถส้วมชิ้นเดียว) Basin (อ่างล้างหน้า) Bathtub (อ่างอาบน้ำ) Shower Enclosure (ห้องอาบน้ำ) Faucet (ก๊อกน้ำ) Rain Shower (ฝักบัวสายฝน) Bidet Spray (สายฉีดชำระ) Urinal (โถปัสสาวะชาย) และ Accessories (อุปกรณ์เสริม)', 'company_info', NULL, '{"page_links": ["/smart-toilet", "/one-piece-toilet", "/basin", "/bath", "/shower-enclosure", "/faucet", "/rain-shower", "/bidet-spray", "/urinal", "/accessories"]}'),

-- Service Info
('บริการของ TOA JOMOO', 'TOA JOMOO ให้บริการครบวงจร ตั้งแต่คำปรึกษาเลือกสินค้า การติดตั้ง การซ่อมบำรุง และการรับประกันสินค้า ทีมงานมืออาชีพพร้อมให้คำแนะนำและดูแลลูกค้าอย่างใกล้ชิด', 'service_info', NULL, '{"page_link": "/service", "services": ["consultation", "installation", "maintenance", "warranty"]}'),

-- Inspiration
('แรงบันดาลใจ Inspiration', 'TOA JOMOO นำเสนอไอเดียการออกแบบห้องน้ำและห้องครัวสไตล์ต่างๆ เพื่อเป็นแรงบันดาลใจในการตแต่งบ้าน พร้อมคำแนะนำการเลือกสินค้าที่เหมาะสม', 'inspiration_info', NULL, '{"page_link": "/inspiration", "styles": ["modern", "classic", "minimalist", "luxury"]}');