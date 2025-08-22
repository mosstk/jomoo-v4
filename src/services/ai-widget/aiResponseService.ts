import { AIResponse, ProductContext, ProductRecommendation } from './types';
import { SuggestionsService } from './suggestionsService';
import { KnowledgeBaseService } from './knowledgeBaseService';

export class AIResponseService {
  private static readonly API_KEY_PLACEHOLDER = 'your-openai-api-key';

  static async generateResponse(
    message: string,
    context: ProductContext | null
  ): Promise<AIResponse> {
    try {
      // ตรวจสอบความเกี่ยวข้องของคำถามก่อน
      const relevanceCheck = KnowledgeBaseService.isQuestionRelevant(message);
      
      if (!relevanceCheck.isRelevant) {
        return {
          content: KnowledgeBaseService.getIrrelevantQuestionResponse(relevanceCheck.reason),
          suggestions: SuggestionsService.getSuggestionsForContext(context).slice(0, 3)
        };
      }

      // For demo purposes, return mock responses based on available data
      // In production, replace with actual OpenAI API call
      const mockResponse = this.getMockResponse(message, context);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return mockResponse;
    } catch (error) {
      console.error('Error generating AI response:', error);
      return {
        content: 'ขออภัยครับ ขณะนี้ระบบมีปัญหา กรุณาลองใหม่อีกครั้งหรือติดต่อทีมงานของเราโดยตรง',
        suggestions: SuggestionsService.getSuggestionsForContext(context).slice(0, 2)
      };
    }
  }

  private static getMockResponse(message: string, context: ProductContext | null): AIResponse {
    const lowerMessage = message.toLowerCase();

    // ตรวจสอบความเกี่ยวข้องอีกครั้งเพื่อความปลอดภัย
    const relevanceCheck = KnowledgeBaseService.isQuestionRelevant(message);
    if (!relevanceCheck.isRelevant) {
      return {
        content: KnowledgeBaseService.getIrrelevantQuestionResponse(),
        suggestions: SuggestionsService.getSuggestionsForContext(context)
      };
    }

    // Bidet Spray specific responses - เฉพาะข้อมูลที่มีจริง
    if (context?.productName === 'Bidet Sprayer') {
      if (lowerMessage.includes('ราคา')) {
        return {
          content: `ขออภัยครับ ข้อมูลราคาสายฉีดชำระ (Bidet Spray) ไม่มีแสดงในเว็บไซท์

📞 สำหรับข้อมูลราคาที่แม่นยำ กรุณาติดต่อ:
• โชว์รูม TOA JOMOO ใกล้บ้านท่าน
• ทีมขายโดยตรง
• หน้า Contact ในเว็บไซท์

💡 ในเว็บไซท์มีแสดงรุ่นสายฉีดชำระต่างๆ ที่สามารถดูได้ครับ`,
          suggestions: [
            { id: 'contact-1', text: 'อยากติดต่อทีมขาย', category: 'product' },
            { id: 'showroom-1', text: 'อยากนัดชมโชว์รูม', category: 'product' }
          ]
        };
      }
      
      if (lowerMessage.includes('ติดตั้ง') || lowerMessage.includes('สเปค') || lowerMessage.includes('ฟีเจอร์')) {
        return {
          content: `ขออภัยครับ ข้อมูลรายละเอียดการติดตั้งและสเปคของสายฉีดชำระไม่มีแสดงในเว็บไซท์

📋 ข้อมูลที่มีในเว็บไซท์:
• รุ่นต่างๆ ของสายฉีดชำระ
• รูปภาพสินค้า

📞 สำหรับข้อมูลเพิ่มเติม เช่น:
• วิธีการติดตั้ง
• สเปคทางเทคนิค  
• คำแนะนำการใช้งาน

กรุณาติดต่อทีมผู้เชี่ยวชาญของเราโดยตรงครับ`,
          suggestions: [
            { id: 'contact-2', text: 'ติดต่อสอบถามรายละเอียด', category: 'product' },
            { id: 'products-1', text: 'ดูรุ่นอื่นๆ', category: 'product' }
          ]
        };
      }
    }

    // Smart Toilet specific responses - เฉพาะข้อมูลที่มีจริง
    if (context?.productName === 'Smart Toilet') {
      if (lowerMessage.includes('ราคา') || lowerMessage.includes('ฟีเจอร์') || lowerMessage.includes('สเปค')) {
        return {
          content: `ขออภัยครับ ข้อมูลราคาและสเปครายละเอียดของ Smart Toilet ไม่มีแสดงในเว็บไซท์

📋 ข้อมูลที่มีในเว็บไซท์:
• Smart Toilet หลายรุ่น
• รูปภาพสินค้า
• คำอธิบายทั่วไป "สุขภัณฑ์อัจฉริยะ"

📞 สำหรับข้อมูลเพิ่มเติม เช่น ราคา สเปค ฟีเจอร์
กรุณาติดต่อทีมขายหรือเยี่ยมชมโชว์รูมเพื่อดูสินค้าจริงครับ`,
          suggestions: [
            { id: 'contact-3', text: 'ติดต่อสอบถามราคา Smart Toilet', category: 'product' },
            { id: 'showroom-2', text: 'นัดชมโชว์รูม', category: 'product' }
          ]
        };
      }
    }

    // One Piece Toilet และสินค้าอื่นๆ - เฉพาะข้อมูลที่มีจริง
    if (context?.productName === 'One Piece Toilet' || context?.productName === 'Basin' || 
        context?.currentPage !== 'home') {
      if (lowerMessage.includes('ราคา') || lowerMessage.includes('สเปค') || 
          lowerMessage.includes('ฟีเจอร์') || lowerMessage.includes('ติดตั้ง')) {
        return {
          content: `ขออภัยครับ ข้อมูลรายละเอียดของ ${context?.productName || 'สินค้านี้'} ไม่มีแสดงในเว็บไซท์

📋 ข้อมูลที่มีในเว็บไซท์:
• รูปภาพสินค้าหลายรุ่น
• ชื่อสินค้าและหมวดหมู่

📞 สำหรับข้อมูลเพิ่มเติม เช่น:
• ราคาและโปรโมชั่น
• สเปคและขนาด
• วิธีการติดตั้ง
• การรับประกัน

กรุณาติดต่อทีมขายหรือเยี่ยมชมโชว์รูมครับ`,
          suggestions: [
            { id: 'contact-4', text: 'ติดต่อสอบถาม', category: 'product' },
            { id: 'showroom-3', text: 'ดูข้อมูลการติดต่อ', category: 'product' }
          ]
        };
      }
    }

    // คำถามเกี่ยวกับการรับประกัน - ข้อมูลที่ไม่มีจริง
    if (lowerMessage.includes('รับประกัน')) {
      return {
        content: `ขออภัยครับ ข้อมูลการรับประกันของสินค้า TOA JOMOO ไม่มีแสดงรายละเอียดในเว็บไซท์

📞 สำหรับข้อมูลการรับประกัน กรุณาติดต่อ:
• ทีมขายโดยตรง
• โชว์รูม TOA JOMOO
• หน้า Contact ในเว็บไซท์

💡 ทีมงานจะให้ข้อมูลการรับประกันที่แม่นยำตามสินค้าแต่ละรุ่นครับ`,
        suggestions: [
          { id: 'contact-5', text: 'ติดต่อสอบถามการรับประกัน', category: 'warranty' }
        ]
      };
    }

    // คำถามเกี่ยวกับการติดตั้ง - ข้อมูลที่ไม่มีจริง
    if (lowerMessage.includes('ติดตั้ง')) {
      return {
        content: `ขออภัยครับ ข้อมูลการติดตั้งไม่มีแสดงรายละเอียดในเว็บไซท์

📞 สำหรับข้อมูลการติดตั้ง กรุณาติดต่อ:
• ทีมเทคนิค TOA JOMOO
• โชว์รูมใกล้บ้านท่าน

💡 ทีมช่างจะให้คำแนะนำและบริการติดตั้งที่เหมาะสมกับบ้านของท่านครับ`,
        suggestions: [
          { id: 'contact-6', text: 'ติดต่อสอบถามการติดตั้ง', category: 'installation' }
        ]
      };
    }

    // คำถามเกี่ยวกับโชว์รูม - ข้อมูลทั่วไป
    if (lowerMessage.includes('โชว์รูม') || lowerMessage.includes('ชม')) {
      return {
        content: `ยินดีต้อนรับสู่โชว์รูม TOA JOMOO! 

📍 มีโชว์รูมหลายสาขา ทั่วประเทศ
🕐 สามารถชมสินค้าจริงและปรึกษาผู้เชี่ยวชาญ

📞 สำหรับข้อมูลโชว์รูมใกล้บ้านท่าน:
• ดูหน้า Contact ในเว็บไซท์
• โทรสอบถามทีมขาย

💡 แนะนำนัดหมายล่วงหน้าเพื่อความสะดวกครับ`,
        suggestions: [
          { id: 'showroom-4', text: 'ดูข้อมูลการติดต่อ', category: 'product' },
          { id: 'contact-7', text: 'สอบถามโชว์รูมใกล้บ้าน', category: 'product' }
        ]
      };
    }

    // Default response - เฉพาะข้อมูลที่มีจริง
    const knowledge = KnowledgeBaseService.getAvailableKnowledge();
    
    return {
      content: `สวัสดีครับ! ยินดีให้คำปรึกษาเกี่ยวกับสินค้า TOA JOMOO 

${context ? `คุณกำลังดูหน้า ${context.productName} ใช่ไหมครับ?` : 'มีอะไรให้ช่วยเหลือเกี่ยวกับสุขภัณฑ์ TOA JOMOO ไหมครับ?'}

🏢 TOA JOMOO - แบรนด์สุขภัณฑ์คุณภาพสูง
📋 ในเว็บไซท์มี: Smart Toilet, Basin, Faucet, Shower และอีกมากมาย
📞 สำหรับข้อมูลเพิ่มเติม กรุณาติดต่อทีมขายหรือโชว์รูม

⚠️ หมายเหตุ: ผมตอบได้เฉพาะข้อมูลพื้นฐานที่มีในเว็บไซท์ สำหรับรายละเอียดเช่น ราคา สเปค กรุณาติดต่อทีมงานโดยตรงครับ`,
      suggestions: SuggestionsService.getSuggestionsForContext(context)
    };
  }

  private static getSmartToiletRecommendations(): ProductRecommendation[] {
    return [
      {
        productId: 'st1',
        productName: 'Smart Toilet รุ่นพรีเมียม',
        reason: 'ฟีเจอร์ครบครัน เหมาะกับการใช้งานประจำวัน',
        image: '/lovable-uploads/353d8916-0ba6-457a-95a4-cfc67b65e5f6.png',
        category: 'toilet'
      },
      {
        productId: 'st2', 
        productName: 'Smart Toilet รุ่นประหยัด',
        reason: 'ราคาคุ้มค่า ฟีเจอร์เป็นที่ต้องการ',
        image: '/lovable-uploads/450f66c7-17d5-4b40-8f20-2c239481083e.png', 
        category: 'toilet'
      }
    ];
  }

  // Method for future OpenAI integration
  static async callOpenAI(message: string, context: ProductContext | null): Promise<string> {
    // This will be implemented when OpenAI API key is provided
    const prompt = context 
      ? `Context: User is viewing ${context.productName} (${context.category}). ${message}`
      : message;

    // Placeholder for actual OpenAI API call
    console.log('Would call OpenAI with prompt:', prompt);
    
    throw new Error('OpenAI API key not configured');
  }
}