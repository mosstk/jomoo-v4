import type { AIResponse, ProductContext, ProductRecommendation } from './types';
import { supabase } from '@/integrations/supabase/client';
import { SuggestionsService } from './suggestionsService';
import { KnowledgeBaseService } from './knowledgeBaseService';

export class AIResponseService {
  // Main method to generate AI response using RAG
  static async generateResponse(message: string, context: ProductContext | null): Promise<AIResponse> {
    try {
      // ตรวจสอบความเกี่ยวข้องของคำถามก่อน
      const relevanceCheck = KnowledgeBaseService.isQuestionRelevant(message);
      
    if (!relevanceCheck.isRelevant) {
      const suggestions = await SuggestionsService.getSuggestionsForContext(context);
      return {
        content: KnowledgeBaseService.getIrrelevantQuestionResponse(relevanceCheck.reason),
        suggestions: suggestions.slice(0, 3)
      };
    }

      // Use RAG search for real knowledge base data
      console.log('🚀 Starting RAG search for message:', message);
      const ragResponse = await this.searchKnowledgeBase(message, context);
      
      if (ragResponse && ragResponse.success && ragResponse.response) {
        console.log('✅ RAG search successful, returning RAG response');
        const suggestions = await SuggestionsService.getSuggestionsForContext(context);
        return {
          content: ragResponse.response,
          suggestions: suggestions.slice(0, 2),
          productRecommendations: this.getProductRecommendations(context)
        };
      }
      
      // Fallback to previous response system if RAG fails
      console.log('❌ RAG search failed, using fallback response');
      console.log('RAG response:', ragResponse);
      return await this.getMockResponse(message, context);
      
    } catch (error) {
      console.error('Error in AI response generation:', error);
      return await this.getMockResponse(message, context);
    }
  }

  // Search knowledge base using RAG
  private static async searchKnowledgeBase(message: string, context: ProductContext | null) {
    try {
      console.log('🔍 Searching RAG with message:', message);
      console.log('🔍 Context:', context);
      
      const { data, error } = await supabase.functions.invoke('rag-search', {
        body: {
          query: message,
          limit: 5,
          category: context?.category ? this.mapCategoryToKnowledgeBase(context.category) : undefined,
          product_type: context?.category ? this.mapCategoryToProductType(context.category) : undefined
        }
      });

      console.log('📡 RAG response data:', data);
      console.log('❌ RAG response error:', error);

      if (error) {
        console.error('RAG search error:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Failed to search knowledge base:', error);
      return null;
    }
  }

  // Map website categories to knowledge base categories
  private static mapCategoryToKnowledgeBase(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'smart-toilet': 'product_info',
      'one-piece-toilet': 'product_info', 
      'basin': 'product_info',
      'bathtub': 'product_info',
      'shower-enclosure': 'product_info',
      'faucet': 'product_info',
      'rain-shower': 'product_info',
      'bidet-spray': 'product_info',
      'urinal': 'product_info',
      'accessories': 'product_info',
      'about': 'company_info',
      'contact': 'contact_info',
      'warranty': 'warranty_info'
    };
    
    return categoryMap[category] || 'product_info';
  }

  // Map website categories to product types
  private static mapCategoryToProductType(category: string): string | undefined {
    const typeMap: { [key: string]: string } = {
      'smart-toilet': 'smart_toilet',
      'one-piece-toilet': 'one_piece_toilet',
      'basin': 'basin',
      'bathtub': 'bathtub',
      'shower-enclosure': 'shower_enclosure',
      'faucet': 'faucet',
      'rain-shower': 'rain_shower',
      'bidet-spray': 'bidet_spray',
      'urinal': 'urinal',
      'accessories': 'accessories'
    };
    
    return typeMap[category];
  }

  private static async getMockResponse(message: string, context: ProductContext | null): Promise<AIResponse> {
    const lowerMessage = message.toLowerCase();
    console.log('🤖 Generating mock response for:', message);

    // ตรวจสอบความเกี่ยวข้องอีกครั้งเพื่อความปลอดภัย
    const relevanceCheck = KnowledgeBaseService.isQuestionRelevant(message);
    if (!relevanceCheck.isRelevant) {
      const suggestions = await SuggestionsService.getSuggestionsForContext(context);
      return {
        content: KnowledgeBaseService.getIrrelevantQuestionResponse(),
        suggestions: suggestions
      };
    }

    // วิเคราะห์คำถามและตอบให้ตรงประเด็น
    
    // คำถามเกี่ยวกับวัสดุ
    if (lowerMessage.includes('วัสดุ') || lowerMessage.includes('ทำจาก') || lowerMessage.includes('material')) {
      return {
        content: `สินค้าสุขภัณฑ์ JOMOO ผลิตจากวัสดุคุณภาพสูง:

🏺 **เซรามิก:** อ่างล้างหน้า Basin และโถสุขภัณฑ์
🔧 **โลหะคุณภาพ:** ก๊อกน้ำ Faucet ทนทานต่อการใช้งาน  
🛡️ **กระจกนิรภัย:** ห้องอาบน้ำ Shower Enclosure
💧 **วัสดุกันซึม:** อ่างอาบน้ำ Bathtub

สำหรับข้อมูลวัสดุเฉพาะแต่ละรุ่น กรุณาติดต่อทีมงานเพื่อทราบรายละเอียดครับ`,
        suggestions: [
          { id: 'material-1', text: 'วัสดุของ Smart Toilet', category: 'product' },
          { id: 'material-2', text: 'ติดต่อสอบถามรายละเอียด', category: 'product' }
        ]
      };
    }

    // คำถามเกี่ยวกับคุณสมบัติ/ฟีเจอร์
    if (lowerMessage.includes('คุณสมบัติ') || lowerMessage.includes('ฟีเจอร์') || lowerMessage.includes('ความสามารถ')) {
      if (context?.category === 'smart-toilet') {
        return {
          content: `Smart Toilet ของ JOMOO มีคุณสมบัติพิเศษ:

🚿 **ระบบฉีดล้าง:** เพิ่มความสะอาดและสุขอนามัย
🌡️ **ระบบอบแห้ง:** ความสะดวกสบายสูงสุด
🎛️ **ระบบควบคุมอุณหภูมิ:** ปรับได้ตามต้องการ
🧠 **ฟีเจอร์อัจฉริยะ:** เทคโนโลยีขั้นสูง

สำหรับรายละเอียดฟีเจอร์ในแต่ละรุ่น กรุณาติดต่อทีมงานครับ`,
          suggestions: [
            { id: 'smart-features', text: 'Smart Toilet รุ่นไหนดี?', category: 'product' },
            { id: 'smart-contact', text: 'ติดต่อสอบถาม Smart Toilet', category: 'product' }
          ]
        };
      }
      
      return {
        content: `สินค้า JOMOO แต่ละหมวดมีคุณสมบัติเด่น:

🚽 **Smart Toilet:** เทคโนโลยีอัจฉริยะ
🚿 **Basin:** เซรามิกคุณภาพสูง ทนทาน
🚰 **Faucet:** ระบบประหยัดน้ำ ดีไซน์ทันสมัย
🛁 **Bathtub:** การผ่อนคลาย ความสะดวกสบาย

สำหรับคุณสมบัติเฉพาะแต่ละรุ่น กรุณาติดต่อทีมงานครับ`,
        suggestions: [
          { id: 'features-smart', text: 'ฟีเจอร์ Smart Toilet', category: 'product' },
          { id: 'features-contact', text: 'ติดต่อสอบถามคุณสมบัติ', category: 'product' }
        ]
      };
    }

    // คำถามเกี่ยวกับแบรนด์/บริษัท
    if (lowerMessage.includes('jomoo') || lowerMessage.includes('แบรนด์') || lowerMessage.includes('บริษัท') || 
        lowerMessage.includes('เกี่ยวกับ') || lowerMessage.includes('ประวัติ')) {
      return {
        content: `JOMOO - แบรนด์สุขภัณฑ์คุณภาพสูง

🏢 **เกี่ยวกับ JOMOO:**
• แบรนด์สุขภัณฑ์ที่มีประสบการณ์มายาวนาน
• ผลิตสินค้าคุณภาพสูงด้วยเทคโนโลยีขั้นสูง
• มีผลิตภัณฑ์หลากหลาย ตั้งแต่โถส้วม อ่างล้างหน้า ก๊อกน้ำ

📍 **สินค้าใน TOA JOMOO:**
Smart Toilet, Basin, Faucet, Shower และอีกมากมาย

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับแบรนด์ กรุณาดูในหน้า About Us ครับ`,
        suggestions: [
          { id: 'about-products', text: 'ดูสินค้าทั้งหมด', category: 'product' },
          { id: 'about-contact', text: 'ติดต่อสอบถาม', category: 'product' }
        ]
      };
    }

    // คำถามเกี่ยวกับประเภทสินค้า
    if (lowerMessage.includes('มีอะไรบ้าง') || lowerMessage.includes('ประเภท') || lowerMessage.includes('หมวดหมู่')) {
      return {
        content: `สินค้าสุขภัณฑ์ TOA JOMOO มีหลากหลาย:

🚽 **โถสุขภัณฑ์:**
• Smart Toilet - สุขภัณฑ์อัจฉริยะ
• One Piece Toilet - ดีไซน์เรียบง่าย

🚿 **อุปกรณ์อาบน้ำ:**
• Shower Enclosure - ห้องอาบน้ำ
• Rain Shower - ฝักบัวสายฝน
• Bathtub - อ่างอาบน้ำ

🚰 **อุปกรณ์เสริม:**
• Basin - อ่างล้างหน้า
• Faucet - ก๊อกน้ำ
• Bidet Spray - สายฉีดชำระ
• Urinal - โถปัสสาวะชาย
• Accessories - อุปกรณ์เสริม

ทุกรุ่นสามารถดูรูปภาพและรายละเอียดได้ในเว็บไซต์ครับ`,
        suggestions: [
          { id: 'products-smart', text: 'ดู Smart Toilet', category: 'product' },
          { id: 'products-basin', text: 'ดู Basin', category: 'product' }
        ]
      };
    }

    // คำถามเกี่ยวกับแบบ/รุ่น
    if (lowerMessage.includes('แบบไหนบ้าง') || lowerMessage.includes('รุ่น') || lowerMessage.includes('มีกี่')) {
      if (context?.category) {
        const productName = this.getProductDisplayName(context.category);
        return {
          content: `${productName} ของ JOMOO มีหลายรุ่นให้เลือก:

📋 **ข้อมูลที่มีในเว็บไซต์:**
• รูปภาพสินค้าหลายรุ่น
• ชื่อสินค้าและหมวดหมู่
• การจัดแสดงตามประเภท

📞 **สำหรับข้อมูลรายละเอียด เช่น:**
• สเปคเฉพาะแต่ละรุ่น
• ราคาและโปรโมชั่น
• การเปรียบเทียบรุ่น

กรุณาติดต่อทีมงานหรือเยี่ยมชมโชว์รูมครับ`,
          suggestions: [
            { id: 'models-contact', text: 'สอบถามรุ่นที่เหมาะสม', category: 'product' },
            { id: 'models-showroom', text: 'ชมของจริงที่โชว์รูม', category: 'product' }
          ]
        };
      }
    }

    // คำถามเกี่ยวกับการติดต่อ
    if (lowerMessage.includes('ติดต่อ') || lowerMessage.includes('โทร') || lowerMessage.includes('contact')) {
      return {
        content: `การติดต่อ TOA JOMOO:

📞 **ช่องทางการติดต่อ:**
• หน้า Contact ในเว็บไซต์
• โชว์รูมทั่วประเทศ
• ทีมขายและบริการ

🕐 **การให้บริการ:**
• คำปรึกษาเลือกสินค้า
• ข้อมูลราคาและโปรโมชั่น
• บริการติดตั้งและหลังการขาย
• การรับประกันสินค้า

💡 **แนะนำ:** ดูข้อมูลการติดต่อในหน้า Contact บนเว็บไซต์ครับ`,
        suggestions: [
          { id: 'contact-info', text: 'ดูข้อมูลการติดต่อ', category: 'product' },
          { id: 'contact-showroom', text: 'หาโชว์รูมใกล้บ้าน', category: 'product' }
        ]
      };
    }

    // Default response - ตอบตามข้อมูลจริงที่มี
    return {
      content: `สวัสดีครับ! ยินดีให้คำปรึกษาเกี่ยวกับสินค้า TOA JOMOO 

${context ? `📍 คุณกำลังดูหน้า ${this.getProductDisplayName(context.category)} ใช่ไหมครับ?` : '🏢 มีอะไรให้ช่วยเหลือเกี่ยวกับสุขภัณฑ์ TOA JOMOO ไหมครับ?'}

📋 **ข้อมูลในเว็บไซต์:**
• รูปภาพสินค้าหลากหลาย
• หมวดหมู่สินค้าครบครัน
• ข้อมูลการติดต่อ

📞 **สำหรับข้อมูลเพิ่มเติม:**
ราคา สเปค การติดตั้ง และการรับประกัน
กรุณาติดต่อทีมงานโดยตรงครับ`,
      suggestions: (await SuggestionsService.getSuggestionsForContext(context)).slice(0, 3)
    };
  }

  // Get display name for product category
  private static getProductDisplayName(category: string): string {
    const nameMap: { [key: string]: string } = {
      'smart-toilet': 'Smart Toilet',
      'one-piece-toilet': 'One Piece Toilet',
      'basin': 'อ่างล้างหน้า',
      'bathtub': 'อ่างอาบน้ำ',
      'shower-enclosure': 'ห้องอาบน้ำ',
      'faucet': 'ก๊อกน้ำ',
      'rain-shower': 'ฝักบัวสายฝน',
      'bidet-spray': 'สายฉีดชำระ',
      'urinal': 'โถปัสสาวะชาย',
      'accessories': 'อุปกรณ์เสริม'
    };
    
    return nameMap[category] || 'สินค้า';
  }

  // Get product recommendations based on context (only real products)
  private static getProductRecommendations(context: ProductContext | null): ProductRecommendation[] {
    if (!context?.category) return [];

    // Return only real products that exist in our data files
    if (context.category === 'smart-toilet') {
      return [
        {
          productId: 'smart1',
          productName: 'Smart Toilet รุ่น 1',
          reason: 'สินค้าในหมวด Smart Toilet ของเรา',
          image: '/lovable-uploads/3aede93b-84f3-4a77-acf5-a767654f5f65.png',
          category: 'smart-toilet'
        }
      ];
    }

    if (context.category === 'one-piece-toilet') {
      return [
        {
          productId: 'onepiece1',
          productName: 'One Piece Toilet รุ่น 1',
          reason: 'สินค้าในหมวด One Piece Toilet ของเรา',
          image: '/lovable-uploads/43b4b548-71a6-4327-93ae-90547e01ef13.png',
          category: 'one-piece-toilet'
        }
      ];
    }

    return [];
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

  // Generate embeddings for knowledge base (used for initial setup)
  static async generateEmbeddings(): Promise<void> {
    try {
      const { data, error } = await supabase.functions.invoke('generate-embeddings', {
        body: { action: 'generate_all' }
      });

      if (error) {
        console.error('Error generating embeddings:', error);
        throw error;
      }

      console.log('Embeddings generated successfully:', data);
    } catch (error) {
      console.error('Failed to generate embeddings:', error);
      throw error;
    }
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