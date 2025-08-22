import { SmartSuggestion, ProductContext } from './types';

export class SuggestionsService {
  // สร้าง suggestions pool ที่ใหญ่และหลากหลาย ใช้ข้อมูลจริงจากเว็บไซต์
  private static readonly realDataSuggestions: SmartSuggestion[] = [
    // คำถามเกี่ยวกับสินค้าจริงที่มีในเว็บไซต์
    {
      id: 'real-1',
      text: 'JOMOO มีสินค้าอะไรบ้าง?',
      category: 'product'
    },
    {
      id: 'real-2', 
      text: 'Smart Toilet ของ JOMOO มีฟีเจอร์อะไรบ้าง?',
      category: 'product'
    },
    {
      id: 'real-3',
      text: 'One Piece Toilet คืออะไร?',
      category: 'product'
    },
    {
      id: 'real-4',
      text: 'อ่างล้างหน้า Basin มีกี่แบบ?',
      category: 'product'
    },
    {
      id: 'real-5',
      text: 'ก๊อกน้ำ Faucet มีรุ่นไหนบ้าง?',
      category: 'product'
    },
    {
      id: 'real-6',
      text: 'ฝักบัวสายฝน Rain Shower ให้ความรู้สึกอย่างไร?',
      category: 'product'
    },
    {
      id: 'real-7',
      text: 'สายฉีดชำระ Bidet Spray ช่วยอะไรบ้าง?',
      category: 'product'
    },
    {
      id: 'real-8',
      text: 'อ่างอาบน้ำ Bathtub ใช้สำหรับอะไร?',
      category: 'product'
    },
    {
      id: 'real-9',
      text: 'ห้องอาบน้ำ Shower Enclosure มีแบบไหนบ้าง?',
      category: 'product'
    },
    {
      id: 'real-10',
      text: 'โถปัสสาวะชาย Urinal ออกแบบอย่างไร?',
      category: 'product'
    },
    {
      id: 'real-11',
      text: 'อุปกรณ์เสริม Accessories มีอะไรบ้าง?',
      category: 'product'
    },
    {
      id: 'real-12',
      text: 'JOMOO เป็นแบรนด์จากไหน?',
      category: 'product'
    },
    {
      id: 'real-13',
      text: 'ติดต่อทีมงาน JOMOO ได้อย่างไร?',
      category: 'product'
    },
    {
      id: 'real-14',
      text: 'สินค้า JOMOO มีการรับประกันไหม?',
      category: 'product'
    },
    {
      id: 'real-15',
      text: 'อยากดูรูปภาพสินค้า JOMOO',
      category: 'product'
    },
    {
      id: 'real-16',
      text: 'สินค้า JOMOO ทำจากวัสดุอะไร?',
      category: 'product'
    },
    {
      id: 'real-17',
      text: 'JOMOO มีประสบการณ์กี่ปี?',
      category: 'product'
    },
    {
      id: 'real-18',
      text: 'สินค้า JOMOO เหมาะกับใคร?',
      category: 'product'
    }
  ];

  private static readonly categorySpecificSuggestions: Record<string, SmartSuggestion[]> = {
    'smart-toilet': [
      {
        id: 'smart-specific-1',
        text: 'Smart Toilet มีเทคโนโลยีอะไรบ้าง?',
        category: 'product'
      },
      {
        id: 'smart-specific-2',
        text: 'Smart Toilet ช่วยเพิ่มความสะดวกสบายอย่างไร?',
        category: 'product'
      },
      {
        id: 'smart-specific-3',
        text: 'Smart Toilet กับโถส้วมทั่วไปต่างกันอย่างไร?',
        category: 'comparison'
      }
    ],
    'one-piece-toilet': [
      {
        id: 'onepiece-specific-1',
        text: 'One Piece Toilet ดีอย่างไร?',
        category: 'product'
      },
      {
        id: 'onepiece-specific-2',
        text: 'One Piece Toilet ง่ายต่อการดูแลไหม?',
        category: 'product'
      },
      {
        id: 'onepiece-specific-3',
        text: 'One Piece Toilet เหมาะกับบ้านแบบไหน?',
        category: 'product'
      }
    ],
    basin: [
      {
        id: 'basin-specific-1',
        text: 'อ่างล้างหน้า JOMOO มีแบบแขวนผนังไหม?',
        category: 'product'
      },
      {
        id: 'basin-specific-2',
        text: 'อ่างล้างหน้าทำจากเซรามิกคุณภาพสูงไหม?',
        category: 'product'
      },
      {
        id: 'basin-specific-3',
        text: 'อ่างล้างหน้ามีแบบฝังเคาน์เตอร์ไหม?',
        category: 'product'
      }
    ],
    bathtub: [
      {
        id: 'bathtub-specific-1',
        text: 'อ่างอาบน้ำ JOMOO ช่วยผ่อนคลายไหม?',
        category: 'product'
      },
      {
        id: 'bathtub-specific-2',
        text: 'อ่างอาบน้ำมีแบบวางอิสระไหม?',
        category: 'product'
      },
      {
        id: 'bathtub-specific-3',
        text: 'อ่างอาบน้ำมีแบบมุมไหม?',
        category: 'product'
      }
    ],
    faucet: [
      {
        id: 'faucet-specific-1',
        text: 'ก๊อกน้ำ JOMOO ทนทานไหม?',
        category: 'product'
      },
      {
        id: 'faucet-specific-2',
        text: 'ก๊อกน้ำมีระบบประหยัดน้ำไหม?',
        category: 'product'
      },
      {
        id: 'faucet-specific-3',
        text: 'ก๊อกน้ำใช้ได้ทั้งห้องครัวและห้องน้ำไหม?',
        category: 'product'
      }
    ],
    'rain-shower': [
      {
        id: 'rainshower-specific-1',
        text: 'ฝักบัวสายฝนให้ความรู้สึกเหมือนสายฝนจริงไหม?',
        category: 'product'
      },
      {
        id: 'rainshower-specific-2',
        text: 'ฝักบัวสายฝนมีหลายขนาดไหม?',
        category: 'product'
      },
      {
        id: 'rainshower-specific-3',
        text: 'ฝักบัวสายฝนปรับแรงดันน้ำได้ไหม?',
        category: 'product'
      }
    ],
    'bidet-spray': [
      {
        id: 'bidet-specific-1',
        text: 'สายฉีดชำระเพิ่มความสะอาดจริงไหม?',
        category: 'product'
      },
      {
        id: 'bidet-specific-2',
        text: 'สายฉีดชำระใช้งานง่ายไหม?',
        category: 'product'
      },
      {
        id: 'bidet-specific-3',
        text: 'สายฉีดชำระมีหัวฉีดแบบไหนบ้าง?',
        category: 'product'
      }
    ]
  };

  // สุ่มเลือก suggestions จาก pool ใหญ่
  private static getRandomSuggestions(pool: SmartSuggestion[], count: number): SmartSuggestion[] {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  static getSuggestionsForContext(context: ProductContext | null): SmartSuggestion[] {
    let suggestions: SmartSuggestion[] = [];

    // หากมี context เฉพาะ ให้ผสมระหว่าง category specific และ general
    if (context?.category && this.categorySpecificSuggestions[context.category]) {
      const categorySpecific = this.getRandomSuggestions(
        this.categorySpecificSuggestions[context.category], 
        2
      );
      const general = this.getRandomSuggestions(this.realDataSuggestions, 2);
      suggestions = [...categorySpecific, ...general];
    } else {
      // ไม่มี context เฉพาะ ให้สุ่มจาก general pool
      suggestions = this.getRandomSuggestions(this.realDataSuggestions, 4);
    }

    return suggestions;
  }

  static getFollowUpSuggestions(lastMessage: string, context: ProductContext | null): SmartSuggestion[] {
    // Follow-up suggestions ที่อิงจากข้อมูลจริง
    const followUpSuggestions: SmartSuggestion[] = [
      {
        id: 'followup-1',
        text: 'ติดต่อทีมงานเพื่อสอบถามเพิ่มเติม',
        category: 'product'
      },
      {
        id: 'followup-2',
        text: 'ดูสินค้าหมวดอื่นๆ',
        category: 'product'
      },
      {
        id: 'followup-3',
        text: 'เกี่ยวกับ JOMOO',
        category: 'product'
      },
      {
        id: 'followup-4',
        text: 'สินค้า JOMOO มีการรับประกันไหม?',
        category: 'product'
      },
      {
        id: 'followup-5',
        text: 'อยากทราบข้อมูลการติดต่อ',
        category: 'product'
      }
    ];

    // สุ่มเลือก follow-up suggestions
    return this.getRandomSuggestions(followUpSuggestions, 3);
  }
}