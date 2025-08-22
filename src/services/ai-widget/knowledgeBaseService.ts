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
      'ดูแลรักษา', 'ทำความสะอาด', 'วิธีใช้', 'คู่มือ'
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
    const lowerMessage = message.toLowerCase();
    
    // ตรวจสอบคำศัพท์ที่เกี่ยวข้อง
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

    // คำถามทั่วไปที่อาจเกี่ยวข้อง
    const generalQuestions = [
      'สวัสดี', 'ราคา', 'ข้อมูล', 'สินค้า', 'บริการ', 'ติดต่อ',
      'โชว์รูม', 'ชม', 'ดู', 'เลือก', 'ซื้อ', 'แนะนำ'
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