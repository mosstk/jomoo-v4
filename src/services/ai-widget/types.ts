// AI Widget Types
export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  productContext?: ProductContext;
}

export interface ProductContext {
  category: string;
  productName: string;
  productId?: string;
  currentPage: string;
  availableProducts?: any[];
}

export interface SmartSuggestion {
  id: string;
  text: string;
  category: 'product' | 'specification' | 'installation' | 'warranty' | 'comparison';
  productContext?: string[];
}

export interface AIResponse {
  content: string;
  suggestions?: SmartSuggestion[];
  productRecommendations?: ProductRecommendation[];
}

export interface ProductRecommendation {
  productId: string;
  productName: string;
  reason: string;
  image: string;
  category: string;
}

export interface WidgetState {
  isOpen: boolean;
  isLoading: boolean;
  messages: ChatMessage[];
  currentContext: ProductContext | null;
  suggestions: SmartSuggestion[];
}