# AI Widget Service Documentation

## ภาพรวม
AI Widget เป็นระบบแชทบอทอัจฉริยะสำหรับเว็บไซต์ TOA JOMOO ที่ช่วยตอบคำถามของลูกค้าเกี่ยวกับสินค้าและบริการ

## โครงสร้างไฟล์

```
src/services/ai-widget/
├── types.ts                    # Type definitions
├── productContextService.ts    # จัดการบริบทสินค้า
├── suggestionsService.ts       # คำแนะนำและคำถามยอดนิยม
├── aiResponseService.ts        # ประมวลผลและตอบกลับ
└── README.md                   # คู่มือนี้

src/hooks/
└── useAIWidget.ts             # React hook หลัก

src/components/ai-widget/
├── AIWidget.tsx               # Component หลัก
├── AIFloatingButton.tsx       # ปุ่มลอยตัว
├── AIChatWindow.tsx          # หน้าต่างแชท
├── AIChatMessage.tsx         # ข้อความแชท
└── AISuggestionChips.tsx     # ชิปคำแนะนำ
```

## ฟีเจอร์หลัก

### 1. Product Context Awareness
- รู้จักหน้าที่ผู้ใช้กำลังดู (Smart Toilet, Basin, etc.)
- ให้คำแนะนำเฉพาะเจาะจงตามสินค้า
- ปรับคำถามยอดนิยมตามบริบท

### 2. Smart Suggestions
- คำถามยอดนิยมตามหมวดหมู่สินค้า
- Follow-up suggestions ตามคำถามก่อนหน้า
- Color-coded ตามหมวดหมู่

### 3. AI Response System
- Mock responses สำหรับ demo
- พร้อม integrate กับ OpenAI API
- Support สำหรับ product recommendations

## การใช้งาน

### Basic Usage
```tsx
import AIWidget from '@/components/ai-widget/AIWidget';

function App() {
  return (
    <div>
      {/* Your app content */}
      <AIWidget />
    </div>
  );
}
```

### Custom Hook
```tsx
import { useAIWidget } from '@/hooks/useAIWidget';

function CustomChat() {
  const {
    isOpen,
    messages,
    sendMessage,
    currentContext
  } = useAIWidget();

  // Custom implementation
}
```

## API Integration

### OpenAI Integration
```typescript
// ใน aiResponseService.ts
static async callOpenAI(message: string, context: ProductContext | null): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4.1-2025-04-14',
      messages: [
        {
          role: 'system',
          content: ProductContextService.getContextualPrompt(context)
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
```

## Customization

### เพิ่มคำถามยอดนิยม
```typescript
// ใน suggestionsService.ts
private static readonly categorySuggestions = {
  'new-category': [
    {
      id: 'new-1',
      text: 'คำถามใหม่',
      category: 'product'
    }
  ]
};
```

### เพิ่มสินค้าใหม่
```typescript
// ใน productContextService.ts
const contextMap = {
  'new-product': {
    category: 'new-category',
    productName: 'สินค้าใหม่',
    availableProducts: newProductsData
  }
};
```

### ปรับแต่ง UI
```tsx
// สามารถปรับ Tailwind classes ใน components
<button className="custom-styles">
  Chat Button
</button>
```

## Environment Variables

```env
# สำหรับ production
OPENAI_API_KEY=your_openai_api_key
PERPLEXITY_API_KEY=your_perplexity_api_key # optional
```

## Features ที่จะพัฒนาต่อ

1. **Voice Chat** - ใช้ ElevenLabs API
2. **Live Chat Handover** - ต่อสายไปทีมขาย
3. **Appointment Booking** - นัดหมายชมโชว์รูม
4. **Analytics** - ติดตามการใช้งาน
5. **Multi-language** - รองรับภาษาอังกฤษ

## การ Debug

```typescript
// เปิด debug mode
localStorage.setItem('ai-widget-debug', 'true');

// ดู context ปัจจุบัน
console.log(ProductContextService.getCurrentContext(window.location.pathname));

// ดู suggestions
console.log(SuggestionsService.getSuggestionsForContext(context));
```

## Performance Tips

1. **Lazy Loading** - Widget โหลดเมื่อผู้ใช้เปิดใช้งาน
2. **Message Limit** - จำกัดข้อความเก่าใน state
3. **Context Caching** - Cache product context
4. **Debounced Input** - ป้องกัน spam requests

## Security

1. **API Key Protection** - เก็บใน environment variables
2. **Input Sanitization** - ป้องกัน XSS
3. **Rate Limiting** - จำกัดจำนวน requests
4. **Content Filtering** - กรองเนื้อหาไม่เหมาะสม