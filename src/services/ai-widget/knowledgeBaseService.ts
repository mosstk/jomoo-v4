import { products } from '@/data/products';
import { smartToiletProducts } from '@/data/smart-toilet-products';
import { onePieceToiletProducts } from '@/data/one-piece-toilet-products';
import { basinProducts } from '@/data/basin-products';
import { bidetSprayProducts } from '@/data/bidet-spray-products';
import { faucetProducts } from '@/data/faucet-products';

export class KnowledgeBaseService {
  // ข้อมูลที่เว็บไซท์มี - จำกัดเฉพาะนี้เท่านั้น
  private static readonly websiteKnowledge = {
    // หมวดหมู่สินค้าที่มี
    categories: [
      'smart toilet', 'one piece toilet', 'basin', 'bathtub', 
      'shower enclosure', 'faucet', 'rain shower', 'bidet spray', 
      'urinal', 'accessories'
    ],
    
    // หน้าต่างๆ ในเว็บไซท์
    pages: [
      'product', 'inspiration', 'service', 'about us', 'contact',
      'smart-toilet', 'one-piece-toilet', 'basin', 'bathtub',
      'shower-enclosure', 'faucet', 'rain-shower', 'bidet-spray',
      'uniral', 'accessories'
    ],

    // ข้อมูลบริษัท
    company: {
      name: 'TOA JOMOO',
      description: 'แบรนด์สุขภัณฑ์คุณภาพสูงจากญี่ปุ่น',
      services: ['ติดตั้ง', 'รับประกัน', 'บริการหลังการขาย', 'โชว์รูม']
    },

    // คำศัพท์ที่เกี่ยวข้องกับสุขภัณฑ์
    relatedTerms: [
      'ห้องน้ำ', 'ห้องส้วม', 'สุขภัณฑ์', 'ก๊อกน้ำ', 'อ่างล้างหน้า',
      'อ่างอาบน้ำ', 'ฝักบัว', 'โถสุขภัณฑ์', 'ระบบประปา', 'ห้องแต่งตัว',
      'ติดตั้ง', 'ซ่อมแซม', 'รับประกัน', 'ราคา', 'โปรโมชั่น', 'ส่วนลด',
      'สเปค', 'ขนาด', 'วัสดุ', 'สี', 'รุ่น', 'แบรนด์', 'คุณภาพ',
      'ประหยัดน้ำ', 'ประหยัดไฟ', 'เทคโนโลยี', 'อัจฉริยะ', 'สมาร์ท',
      'TOA', 'JOMOO', 'ญี่ปุ่น', 'โชว์รูม', 'นัดหมาย', 'ปรึกษา',
      'ดูแลรักษา', 'ทำความสะอาด', 'วิธีใช้', 'คู่มือ', 'ห้องอาบน้ำ',
      'shower', 'enclosure', 'basin', 'toilet', 'faucet', 'bidet', 'spray',
      'rain', 'urinal', 'accessories', 'smart', 'piece', 'one'
    ],

    // หัวข้อที่ตอบได้
    allowedTopics: [
      'ข้อมูลสินค้า', 'ราคาสินค้า', 'สเปคสินค้า', 'การติดตั้ง', 
      'การรับประกัน', 'บริการหลังการขาย', 'โชว์รูม', 'การนัดหมาย',
      'การเปรียบเทียบสินค้า', 'คำแนะนำการเลือกซื้อ', 'การดูแลรักษา',
      'วิธีการใช้งาน', 'ข้อมูลบริษัท TOA JOMOO'
    ]
  };

  // ตรวจสอบว่าคำถามเกี่ยวข้องกับเว็บไซท์หรือไม่
  static isQuestionRelevant(message: string): { isRelevant: boolean; reason?: string } {
    const lowerMessage = message.toLowerCase().trim();
    
    // ตรวจสอบความยาวข้อความ
    if (lowerMessage.length < 2) {
      return {
        isRelevant: false,
        reason: 'ข้อความสั้นเกินไป'
      };
    }

    // ตรวจสอบข้อความที่ไม่มีความหมาย (พิมพ์ผิดหลายตัว, ตัวอักษรสุ่ม)
    const nonsensePatterns = [
      /^[ก-ฮ]{1,2}[ก-ฮ]{1,2}[ก-ฮ]{1,2}[ก-ฮ]{1,2}/, // ตัวอักษรไทยสุ่ม
      /[ก-ฮ]+[a-z]+[ก-ฮ]+[a-z]+/, // ผสมไทย-อังกฤษแบบสุ่ม
      /\d{5,}/, // ตัวเลขยาวๆ
      /[!@#$%^&*()]{3,}/, // สัญลักษณ์ติดกันเยอะ
      /(.)\1{4,}/, // ตัวอักษรซ้ำติดกันเยอะ
    ];

    const isNonsense = nonsensePatterns.some(pattern => pattern.test(lowerMessage));
    if (isNonsense) {
      return {
        isRelevant: false,
        reason: 'ข้อความไม่ชัดเจนหรือพิมพ์ผิด'
      };
    }

    // ตรวจสอบคำที่มีความหมายในภาษาไทย (อย่างน้อย 1 คำ)
    const thaiWords = [
      'สวัสดี', 'ราคา', 'ข้อมูล', 'สินค้า', 'บริการ', 'ติดต่อ', 'โชว์รูม', 
      'ชม', 'ดู', 'เลือก', 'ซื้อ', 'แนะนำ', 'ห้องน้ำ', 'สุขภัณฑ์', 'ก๊อก',
      'อ่าง', 'ฝักบัว', 'โถ', 'ติดตั้ง', 'ซ่อม', 'รับประกัน', 'สเปค',
      'ขนาด', 'วัสดุ', 'สี', 'รุ่น', 'แบรนด์', 'คุณภาพ', 'ประหยัด',
      'สมาร์ท', 'อัจฉริยะ', 'เทคโนโลยี', 'ทันสมัย', 'ดูแล', 'ทำความสะอาด',
      'วิธี', 'คู่มือ', 'ปรึกษา', 'นัดหมาย', 'อะไร', 'ไหน', 'ยังไง',
      'เท่าไหร่', 'ที่ไหน', 'เมื่อไหร่', 'ทำไม', 'อย่างไร', 'มี', 'แบบ',
      'ฟีเจอร์', 'คุณสมบัติ', 'ผลิตภัณฑ์', 'ช่วย', 'enclosure', 'เป็น',
      'ใช้', 'จาก', 'ของ', 'ให้', 'ได้', 'เพื่อ', 'กับ', 'และ', 'หรือ'
    ];

    const hasValidThaiWord = thaiWords.some(word => lowerMessage.includes(word));
    
    // ตรวจสอบคำภาษาอังกฤษที่เกี่ยวข้อง
    const englishWords = [
      'toa', 'jomoo', 'toilet', 'smart', 'basin', 'faucet', 'shower', 
      'bidet', 'spray', 'bathroom', 'price', 'install', 'warranty',
      'hello', 'hi', 'how', 'what', 'where', 'when', 'why'
    ];

    const hasValidEnglishWord = englishWords.some(word => lowerMessage.includes(word));
    
    // หากไม่มีคำที่มีความหมายเลย
    if (!hasValidThaiWord && !hasValidEnglishWord) {
      return {
        isRelevant: false,
        reason: 'ไม่พบคำที่มีความหมายในข้อความ'
      };
    }
    // ตรวจสอบคำศัพท์ที่เกี่ยวข้องกับสุขภัณฑ์
    const hasRelevantTerms = this.websiteKnowledge.relatedTerms.some(term => 
      lowerMessage.includes(term.toLowerCase())
    );

    // ตรวจสอบหมวดหมู่สินค้า
    const hasProductCategory = this.websiteKnowledge.categories.some(category =>
      lowerMessage.includes(category.replace(/\s+/g, ''))
    );

    // ตรวจสอบชื่อบริษัท/แบรนด์
    const hasBrandName = lowerMessage.includes('toa') || 
                        lowerMessage.includes('jomoo') ||
                        lowerMessage.includes('โตอา');

    // คำถามทั่วไปที่อาจเกี่ยวข้อง (เมื่อมีคำที่มีความหมายแล้ว)
    const generalQuestions = [
      'สวัสดี', 'ราคา', 'ข้อมูล', 'สินค้า', 'บริการ', 'ติดต่อ',
      'โชว์รูม', 'ชม', 'ดู', 'เลือก', 'ซื้อ', 'แนะนำ', 'hello', 'hi'
    ];
    
    const hasGeneralTerms = generalQuestions.some(term =>
      lowerMessage.includes(term)
    );

    // คำถามที่ไม่เกี่ยวข้องชัดเจน
    const irrelevantTopics = [
      'อาหาร', 'เสื้อผ้า', 'รถยนต์', 'โทรศัพท์', 'คอมพิวเตอร์',
      'เกม', 'หนัง', 'เพลง', 'กีฬา', 'การเมือง', 'หุ้น', 'คริปโต',
      'ท่องเที่ยว', 'โรงแรม', 'ร้านอาหาร', 'โรงภาพยนตร์',
      'สัตว์เลี้ยง', 'พืชผัก', 'ยารักษาโรค', 'โรงพยาบาล',
      'โรงเรียน', 'มหาวิทยาลัย', 'งาน', 'สมัครงาน'
    ];

    const hasIrrelevantTopics = irrelevantTopics.some(topic =>
      lowerMessage.includes(topic)
    );

    if (hasIrrelevantTopics) {
      return {
        isRelevant: false,
        reason: 'คำถามไม่เกี่ยวข้องกับสุขภัณฑ์หรือบริการของ TOA JOMOO'
      };
    }

    if (hasRelevantTerms || hasProductCategory || hasBrandName || hasGeneralTerms) {
      return { isRelevant: true };
    }

    return {
      isRelevant: false,
      reason: 'คำถามไม่เกี่ยวข้องกับสินค้าและบริการที่มีในเว็บไซท์'
    };
  }

  // ข้อมูลสินค้าทั้งหมดที่มี
  static getAllProducts() {
    return {
      smartToilet: smartToiletProducts,
      onePieceToilet: onePieceToiletProducts,
      basin: basinProducts,
      bidetSpray: bidetSprayProducts,
      faucet: faucetProducts,
      general: products
    };
  }

  // ข้อมูลที่ AI สามารถอ้างอิงได้
  static getAvailableKnowledge() {
    return {
      products: this.getAllProducts(),
      categories: this.websiteKnowledge.categories,
      company: this.websiteKnowledge.company,
      services: this.websiteKnowledge.company.services,
      pages: this.websiteKnowledge.pages
    };
  }

  // สร้างข้อความปฏิเสธสำหรับคำถามที่ไม่เกี่ยวข้อง
  static getIrrelevantQuestionResponse(reason?: string): string {
    // ข้อความสำหรับกรณีพิเศษ
    if (reason === 'ข้อความไม่ชัดเจนหรือพิมพ์ผิด' || reason === 'ไม่พบคำที่มีความหมายในข้อความ') {
      return `ขออภัยครับ ข้อความที่ท่านส่งมาไม่ชัดเจน 

💬 กรุณาพิมพ์คำถามใหม่ให้ชัดเจน เช่น:
• "ราคา Smart Toilet เท่าไหร่?"
• "Bidet Spray ติดตั้งยากไหม?"
• "อยากดูข้อมูลอ่างล้างหน้า"

📝 ผมพร้อมช่วยเหลือเรื่องสุขภัณฑ์ TOA JOMOO ครับ`;
    }

    const responses = [
      `ขออภัยครับ คำถามนี้ไม่เกี่ยวข้องกับสินค้าและบริการของ TOA JOMOO

🏢 ผมสามารถช่วยเหลือในเรื่อง:
• ข้อมูลสินค้าสุขภัณฑ์ (Smart Toilet, Basin, Faucet, ฯลฯ)
• ราคาและสเปคสินค้า
• วิธีการติดตั้งและดูแลรักษา
• บริการและการรับประกัน
• การนัดหมายชมโชว์รูม

มีอะไรเกี่ยวกับสุขภัณฑ์ TOA JOMOO ให้ช่วยเหลือไหมครับ?`,

      `คำถามนี้อยู่นอกขอบเขตการให้บริการของ TOA JOMOO ครับ

✨ ผมเชี่ยวชาญเรื่อง:
• สุขภัณฑ์และอุปกรณ์ห้องน้ำ
• Smart Toilet และ One Piece Toilet
• อ่างล้างหน้า ก๊อกน้ำ ฝักบัว
• การเลือกซื้อและเปรียบเทียบสินค้า
• บริการติดตั้งและหลังการขาย

ลองถามเกี่ยวกับสินค้า TOA JOMOO ดูครับ!`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }
}