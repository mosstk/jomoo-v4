import { SmartSuggestion, ProductContext } from './types';

export class SuggestionsService {
  private static readonly commonSuggestions: SmartSuggestion[] = [
    {
      id: 'general-1',
      text: 'ราคาสินค้า TOA JOMOO เป็นอย่างไร?',
      category: 'product'
    },
    {
      id: 'general-2', 
      text: 'การรับประกันสินค้ามีระยะเวลาเท่าไหร่?',
      category: 'warranty'
    },
    {
      id: 'general-3',
      text: 'มีบริการติดตั้งหรือไม่?',
      category: 'installation'
    },
    {
      id: 'general-4',
      text: 'อยากนัดหมายชมโชว์รูม',
      category: 'product'
    }
  ];

  private static readonly categorySuggestions: Record<string, SmartSuggestion[]> = {
    toilet: [
      {
        id: 'toilet-1',
        text: 'Smart Toilet กับ One Piece Toilet ต่างกันอย่างไร?',
        category: 'comparison',
        productContext: ['smart-toilet', 'one-piece-toilet']
      },
      {
        id: 'toilet-2',
        text: 'วิธีติดตั้งสุขภัณฑ์แบบชิ้นเดียว',
        category: 'installation'
      },
      {
        id: 'toilet-3',
        text: 'ฟีเจอร์ Smart Toilet มีอะไรบ้าง?',
        category: 'specification'
      }
    ],
    basin: [
      {
        id: 'basin-1',
        text: 'อ่างล้างหน้ารุ่นไหนเหมาะกับห้องน้ำขนาดเล็ก?',
        category: 'specification'
      },
      {
        id: 'basin-2',
        text: 'วิธีดูแลรักษาอ่างล้างหน้า',
        category: 'product'
      },
      {
        id: 'basin-3',
        text: 'ขนาดอ่างล้างหน้ามีแบบไหนบ้าง?',
        category: 'specification'
      }
    ],
    shower: [
      {
        id: 'shower-1',
        text: 'Rain Shower กับ Shower Enclosure ต่างกันอย่างไร?',
        category: 'comparison'
      },
      {
        id: 'shower-2',
        text: 'วิธีเลือกระบบฝักบัวที่เหมาะสม',
        category: 'specification'
      }
    ],
    faucet: [
      {
        id: 'faucet-1',
        text: 'ก๊อกน้ำชนิดไหนประหยัดน้ำที่สุด?',
        category: 'specification'
      },
      {
        id: 'faucet-2',
        text: 'Bidet Spray ติดตั้งยากไหม?',
        category: 'installation'
      }
    ],
    bathtub: [
      {
        id: 'bathtub-1',
        text: 'อ่างอาบน้ำขนาดไหนเหมาะกับห้องน้ำบ้าน?',
        category: 'specification'
      }
    ],
    accessories: [
      {
        id: 'accessories-1',
        text: 'อุปกรณ์เสริมสำหรับห้องน้ำมีอะไรบ้าง?',
        category: 'product'
      }
    ]
  };

  static getSuggestionsForContext(context: ProductContext | null): SmartSuggestion[] {
    if (!context) {
      return this.commonSuggestions;
    }

    const categorySugs = this.categorySuggestions[context.category] || [];
    return [...categorySugs, ...this.commonSuggestions.slice(0, 2)];
  }

  static getFollowUpSuggestions(lastMessage: string, context: ProductContext | null): SmartSuggestion[] {
    // Simple keyword-based follow-up suggestions
    const keywordSuggestions: Record<string, SmartSuggestion[]> = {
      'ราคา': [
        {
          id: 'followup-price-1',
          text: 'มีโปรโมชั่นหรือส่วนลดไหม?',
          category: 'product'
        },
        {
          id: 'followup-price-2',
          text: 'สามารถผ่อนชำระได้ไหม?',
          category: 'product'
        }
      ],
      'ติดตั้ง': [
        {
          id: 'followup-install-1',
          text: 'ค่าติดตั้งเท่าไหร่?',
          category: 'installation'
        },
        {
          id: 'followup-install-2',
          text: 'ใช้เวลาติดตั้งนานไหม?',
          category: 'installation'
        }
      ],
      'รับประกัน': [
        {
          id: 'followup-warranty-1',
          text: 'การรับประกันครอบคลุมอะไรบ้าง?',
          category: 'warranty'
        }
      ]
    };

    // Find matching keywords
    for (const [keyword, suggestions] of Object.entries(keywordSuggestions)) {
      if (lastMessage.includes(keyword)) {
        return suggestions;
      }
    }

    return this.getSuggestionsForContext(context).slice(0, 3);
  }
}