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

    // Bidet Spray specific responses
    if (context?.productName === 'Bidet Sprayer') {
      if (lowerMessage.includes('ราคา')) {
        return {
          content: `ชุดสายฉีดชำระ (Bidet Spray) TOA JOMOO ราคาเริ่มต้น 1,500 - 8,000 บาท

รุ่นพื้นฐาน: 1,500-3,000 บาท
รุ่นมาตรฐาน: 3,000-5,000 บาท  
รุ่นพรีเมียม: 5,000-8,000 บาท

ราคารวมชุดติดตั้งครบ (หัวฉีด, สาย, วาล์ว)
ค่าติดตั้ง: 800-1,500 บาท`,
          suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
        };
      }
      
      if (lowerMessage.includes('ติดตั้ง')) {
        return {
          content: `การติดตั้งชุดสายฉีดชำระ TOA JOMOO:

🔧 ขั้นตอนการติดตั้ง:
• เชื่อมต่อกับระบบประปาเดิม
• ติดตั้งวาล์วควบคุมแรงดันน้ำ
• วางสายและยึดหัวฉีด
• ทดสอบการทำงานและรั่วซึม

⏰ ใช้เวลา: 1-2 ชั่วโมง
👨‍🔧 ควรใช้ช่างมืออาชีพ
💧 ไม่ต้องเจาะกำแพงเพิ่ม (ใช้จุดเชื่อมต่อเดิม)`,
          suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
        };
      }

      if (lowerMessage.includes('ฟีเจอร์') || lowerMessage.includes('สเปค')) {
        return {
          content: `คุณสมบัติชุดสายฉีดชำระ TOA JOMOO:

💧 ปรับแรงดันน้ำได้ 3 ระดับ (อ่อน-กลาง-แรง)
🚿 หัวฉีดหมุนได้ 360 องศา
🔧 วาล์วปิด-เปิดน้ำแบบกด
💎 วัสดุสแตนเลสคุณภาพสูง กันสนิม
🧼 ผิวเรียบ ทำความสะอาดง่าย
📏 ความยาวสาย 1.2-1.5 เมตร
🛡️ รับประกัน 2 ปี`,
          suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
        };
      }
    }

    // Smart Toilet specific responses
    if (context?.productName === 'Smart Toilet') {
      if (lowerMessage.includes('ราคา')) {
        return {
          content: `Smart Toilet ของ TOA JOMOO มีราคาตั้งแต่ 25,000 - 80,000 บาท ขึ้นอยู่กับรุ่นและฟีเจอร์
          
รุ่นพื้นฐาน: 25,000-35,000 บาท
รุ่นกลาง: 35,000-55,000 บาท  
รุ่นพรีเมียม: 55,000-80,000 บาท

ราคารวมการติดตั้งแล้ว และมีการรับประกัน 2-5 ปี`,
          suggestions: SuggestionsService.getFollowUpSuggestions(message, context),
          productRecommendations: this.getSmartToiletRecommendations()
        };
      }
      
      if (lowerMessage.includes('ฟีเจอร์') || lowerMessage.includes('สเปค')) {
        return {
          content: `Smart Toilet TOA JOMOO มีฟีเจอร์ครบครัน:

🚿 ระบบล้างก้น-ล้างหญิง แรงดันน้ำปรับได้
🌡️ ที่นั่งอุ่นไฟฟ้า ปรับอุณหภูมิได้
💨 ระบบดูดกลิ่น และเป่าลมอบแห้ง
📱 รีโมทคอนโทรล หรือแผงควบคุมข้าง
🌙 ไฟส่องกลางคืน LED
♻️ ประหยัดน้ำ ระบบ Dual Flush
🔧 ระบบทำความสะอาดตัวเองอัตโนมัติ`,
          suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
        };
      }
    }

    if (context?.productName === 'One Piece Toilet') {
      if (lowerMessage.includes('ราคา')) {
        return {
          content: `One Piece Toilet TOA JOMOO ราคาเริ่มต้น 8,000 - 25,000 บาท

รุ่นมาตรฐาน: 8,000-12,000 บาท
รุ่นพิเศษ: 12,000-18,000 บาท
รุ่นดีลักซ์: 18,000-25,000 บาท

ราคาดังกล่าวยังไม่รวมค่าติดตั้ง (2,000-3,000 บาท)`,
          suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
        };
      }
    }

    // General responses
    if (lowerMessage.includes('รับประกัน')) {
      return {
        content: `การรับประกันสินค้า TOA JOMOO:

🛡️ สุขภัณฑ์: รับประกัน 2-5 ปี
🔧 ระบบไฟฟ้า/อิเล็กทรอนิกส์: รับประกัน 1-2 ปี  
🚿 อุปกรณ์ท่อประปา: รับประกัน 1 ปี

ครอบคลุม:
✅ วัสดุและการผลิต
✅ บริการซ่อมแซมฟรี
✅ เปลี่ยนชิ้นส่วนฟรี (กรณีของเสีย)

❌ ไม่รับประกัน: การใช้งานผิดวิธี, ภัยธรรมชาติ`,
        suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
      };
    }

    if (lowerMessage.includes('ติดตั้ง')) {
      return {
        content: `บริการติดตั้ง TOA JOMOO:

👨‍🔧 ทีมช่างมืออาชีพ
📅 นัดหมายติดตั้งภายใน 3-7 วันทำการ
⏰ ใช้เวลาติดตั้ง 2-4 ชั่วโมง (ขึ้นอยู่กับสินค้า)

ค่าบริการ:
🚿 Smart Toilet: 3,000-5,000 บาท
🚽 One Piece Toilet: 2,000-3,000 บาท
🚿 Basin/Faucet: 1,500-2,500 บาท

รวม: วัสดุติดตั้ง, ค่าแรง, การทดสอบระบบ`,
        suggestions: SuggestionsService.getFollowUpSuggestions(message, context)
      };
    }

    if (lowerMessage.includes('โชว์รูม') || lowerMessage.includes('ชม')) {
      return {
        content: `ยินดีต้อนรับสู่โชว์รูม TOA JOMOO! 

📍 สาขาใกล้ท่าน:
• กรุงเทพ: 5 สาขา  
• ปริมณฑล: 3 สาขา
• ต่างจังหวัด: 12 สาขา

🕐 เวลาเปิด-ปิด: 9:00-18:00 น. (จันทร์-อาทิตย์)

💡 บริการที่โชว์รูม:
✅ ชมสินค้าจริง พร้อมทดลองใช้
✅ คำปรึกษาจากผู้เชี่ยวชาญ
✅ ออกแบบห้องน้ำฟรี
✅ ใบเสนอราคาแบบละเอียด

ต้องการนัดหมายหรือไม่ครับ?`,
        suggestions: [
          { id: 'showroom-1', text: 'อยากนัดหมายชมโชว์รูม', category: 'product' },
          { id: 'showroom-2', text: 'ขอดูแคตตาล็อกสินค้า', category: 'product' }
        ]
      };
    }

    // Default response - ต้องเกี่ยวข้องกับสินค้าเท่านั้น
    const knowledge = KnowledgeBaseService.getAvailableKnowledge();
    
    return {
      content: `สวัสดีครับ! ยินดีให้คำปรึกษาเกี่ยวกับสินค้า TOA JOMOO 

${context ? `คุณกำลังสนใจ ${context.productName} ใช่ไหมครับ?` : 'มีอะไรให้ช่วยเหลือเกี่ยวกับสุขภัณฑ์ TOA JOMOO ไหมครับ?'}

🏢 TOA JOMOO - แบรนด์สุขภัณฑ์คุณภาพสูงจากญี่ปุ่น
✨ สินค้าที่มี: Smart Toilet, Basin, Faucet, Shower และอีกมากมาย
🛡️ รับประกันยาวนาน พร้อมบริการหลังการขาย
🏪 มีโชว์รูมให้ชมสินค้าจริง

ผมตอบได้เฉพาะเรื่องสุขภัณฑ์และบริการของ TOA JOMOO เท่านั้นครับ`,
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