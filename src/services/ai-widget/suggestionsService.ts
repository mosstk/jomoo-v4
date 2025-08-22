import { SmartSuggestion, ProductContext } from './types';

export class SuggestionsService {
  private static readonly commonSuggestions: SmartSuggestion[] = [
    {
      id: 'general-1',
      text: 'มีสินค้าอะไรบ้าง?',
      category: 'product'
    },
    {
      id: 'general-2', 
      text: 'อยากดูรูปสินค้า',
      category: 'product'
    },
    {
      id: 'general-3',
      text: 'ติดต่อทีมขายอย่างไร?',
      category: 'product'
    },
    {
      id: 'general-4',
      text: 'โชว์รูมอยู่ที่ไหน?',
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
        text: 'มีรุ่นไหนบ้าง?',
        category: 'product'
      },
      {
        id: 'toilet-3',
        text: 'อยากดูรูปสินค้า',
        category: 'product'
      }
    ],
    basin: [
      {
        id: 'basin-1',
        text: 'มีอ่างล้างหน้ารุ่นไหนบ้าง?',
        category: 'product'
      },
      {
        id: 'basin-2',
        text: 'อยากดูรูปสินค้า Basin',
        category: 'product'
      },
      {
        id: 'basin-3',
        text: 'ติดต่อสอบถามรายละเอียด',
        category: 'product'
      }
    ],
    shower: [
      {
        id: 'shower-1',
        text: 'มีฝักบัวแบบไหนบ้าง?',
        category: 'product'
      },
      {
        id: 'shower-2',
        text: 'อยากดูรูปสินค้า Shower',
        category: 'product'
      }
    ],
    faucet: [
      {
        id: 'faucet-1',
        text: 'มีก๊อกน้ำรุ่นไหนบ้าง?',
        category: 'product'
      },
      {
        id: 'faucet-2',
        text: 'Bidet Spray มีรุ่นไหนบ้าง?',
        category: 'product'
      }
    ],
    bathtub: [
      {
        id: 'bathtub-1',
        text: 'มีอ่างอาบน้ำแบบไหนบ้าง?',
        category: 'product'
      }
    ],
    accessories: [
      {
        id: 'accessories-1',
        text: 'มีอุปกรณ์เสริมอะไรบ้าง?',
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