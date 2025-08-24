import type { SmartSuggestion, ProductContext } from './types';
import { supabase } from '@/integrations/supabase/client';

export class SuggestionsService {
  // Cache for knowledge base questions
  private static cachedQuestions: SmartSuggestion[] | null = null;
  
  // Get suggestions from real RAG knowledge base
  static async getSuggestionsFromKnowledgeBase(): Promise<SmartSuggestion[]> {
    try {
      // Get all unique titles from knowledge base as questions
      const { data, error } = await supabase
        .from('knowledge_base')
        .select('id, title, category, product_type')
        .limit(20);

      if (error) {
        console.error('Error fetching knowledge base:', error);
        return this.getFallbackSuggestions();
      }

      if (!data || data.length === 0) {
        return this.getFallbackSuggestions();
      }

      // Convert knowledge base titles to questions
      const suggestions: SmartSuggestion[] = data
        .filter(item => item.title && item.title.trim())
        .map((item, index) => ({
          id: `kb-${item.id || index}`,
          text: this.convertTitleToQuestion(item.title),
          category: this.mapCategoryToSuggestionCategory(item.category)
        }));

      return this.shuffleArray(suggestions).slice(0, 8);
    } catch (error) {
      console.error('Error in getSuggestionsFromKnowledgeBase:', error);
      return this.getFallbackSuggestions();
    }
  }

  // Convert knowledge base title to question format
  private static convertTitleToQuestion(title: string): string {
    // If already a question, return as is
    if (title.includes('?') || title.includes('คือ') || title.includes('อะไร') || title.includes('อย่างไร')) {
      return title;
    }

    // Convert statements to questions
    const questionPatterns = [
      { pattern: /^เกี่ยวกับ (.+)/, replacement: '$1 คืออะไร?' },
      { pattern: /^(.+) คืออะไร$/, replacement: '$1 คืออะไร?' },
      { pattern: /^(.+)$/, replacement: '$1 เป็นอย่างไร?' }
    ];

    for (const { pattern, replacement } of questionPatterns) {
      if (pattern.test(title)) {
        return title.replace(pattern, replacement);
      }
    }

    return title + '?';
  }

  // Map knowledge base category to suggestion category
  private static mapCategoryToSuggestionCategory(category: string): SmartSuggestion['category'] {
    const categoryMap: Record<string, SmartSuggestion['category']> = {
      'product_info': 'product',
      'company_info': 'product',
      'warranty_info': 'warranty',
      'installation_info': 'installation',
      'contact_info': 'product'
    };
    return categoryMap[category] || 'product';
  }

  // Fallback suggestions if knowledge base is not available
  private static getFallbackSuggestions(): SmartSuggestion[] {
    return [
      { id: 'fb1', text: 'JOMOO คืออะไร?', category: 'product' },
      { id: 'fb2', text: 'Smart Toilet คืออะไร?', category: 'product' },
      { id: 'fb3', text: 'สินค้ามีประกันไหม?', category: 'warranty' },
      { id: 'fb4', text: 'ติดต่อสอบถามได้อย่างไร?', category: 'product' }
    ];
  }

  static async getSuggestionsForContext(context: ProductContext | null): Promise<SmartSuggestion[]> {
    try {
      // Get suggestions from knowledge base
      const kbSuggestions = await this.getSuggestionsFromKnowledgeBase();
      
      // If we have context, try to get context-specific suggestions
      if (context?.category) {
        const { data, error } = await supabase
          .from('knowledge_base')
          .select('id, title, category, product_type')
          .eq('product_type', this.mapCategoryToProductType(context.category))
          .limit(10);

        if (!error && data && data.length > 0) {
          const contextSuggestions = data.map((item, index) => ({
            id: `ctx-${item.id || index}`,
            text: this.convertTitleToQuestion(item.title),
            category: this.mapCategoryToSuggestionCategory(item.category)
          }));
          
          // Mix context-specific and general suggestions
          const mixed = [
            ...this.shuffleArray(contextSuggestions).slice(0, 3),
            ...this.shuffleArray(kbSuggestions).slice(0, 2)
          ];
          
          return this.shuffleArray(mixed).slice(0, 4);
        }
      }
      
      // Return general knowledge base suggestions
      return this.shuffleArray(kbSuggestions).slice(0, 4);
    } catch (error) {
      console.error('Error getting suggestions for context:', error);
      return this.getFallbackSuggestions().slice(0, 4);
    }
  }

  // Map website category to product type
  private static mapCategoryToProductType(category: string): string {
    const typeMap: Record<string, string> = {
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
    return typeMap[category] || category;
  }

  // Helper function to shuffle array
  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Get follow-up suggestions from knowledge base
  static async getFollowUpSuggestions(lastMessage: string, context: ProductContext | null): Promise<SmartSuggestion[]> {
    try {
      // Get fresh suggestions from knowledge base, different from initial ones
      const { data, error } = await supabase
        .from('knowledge_base')
        .select('id, title, category, product_type')
        .limit(15);

      if (!error && data && data.length > 0) {
        const followUpSuggestions = data
          .filter(item => item.title && item.title.trim())
          .map((item, index) => ({
            id: `fu-${item.id || index}`,
            text: this.convertTitleToQuestion(item.title),
            category: this.mapCategoryToSuggestionCategory(item.category)
          }));

        return this.shuffleArray(followUpSuggestions).slice(0, 3);
      }
    } catch (error) {
      console.error('Error getting follow-up suggestions:', error);
    }

    // Fallback follow-up suggestions
    const fallbackFollowUps: SmartSuggestion[] = [
      { id: 'fu-fb1', text: 'มีข้อมูลการติดต่อไหม?', category: 'product' },
      { id: 'fu-fb2', text: 'สินค้ามีการรับประกันไหม?', category: 'warranty' },
      { id: 'fu-fb3', text: 'JOMOO เป็นแบรนด์อย่างไร?', category: 'product' }
    ];

    return this.shuffleArray(fallbackFollowUps).slice(0, 3);
  }
}