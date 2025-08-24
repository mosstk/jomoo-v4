import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WidgetState, ChatMessage, ProductContext } from '@/services/ai-widget/types';
import { ProductContextService } from '@/services/ai-widget/productContextService';
import { AIResponseService } from '@/services/ai-widget/aiResponseService';
import { SuggestionsService } from '@/services/ai-widget/suggestionsService';

export const useAIWidget = () => {
  const location = useLocation();
  
  const [state, setState] = useState<WidgetState>({
    isOpen: false,
    isLoading: false,
    messages: [],
    currentContext: null,
    suggestions: []
  });

  // Update context when location changes
  useEffect(() => {
    const updateContext = async () => {
      const newContext = ProductContextService.getCurrentContext(location.pathname);
      try {
        const suggestions = await SuggestionsService.getSuggestionsForContext(newContext);
        setState(prev => ({
          ...prev,
          currentContext: newContext,
          suggestions
        }));
      } catch (error) {
        console.error('Error updating context:', error);
        setState(prev => ({
          ...prev,
          currentContext: newContext,
          suggestions: []
        }));
      }
    };
    
    updateContext();
  }, [location.pathname]);

  const toggleWidget = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const closeWidget = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: content.trim(),
      type: 'user',
      timestamp: new Date(),
      productContext: state.currentContext || undefined
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true
    }));

    try {
      const aiResponse = await AIResponseService.generateResponse(
        content,
        state.currentContext
      );

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: aiResponse.content,
        type: 'assistant',
        timestamp: new Date()
      };

      // Update suggestions with either response suggestions or new ones from knowledge base
      let newSuggestions = aiResponse.suggestions;
      if (!newSuggestions) {
        try {
          newSuggestions = await SuggestionsService.getSuggestionsForContext(state.currentContext);
        } catch (error) {
          console.error('Error getting new suggestions:', error);
          newSuggestions = [];
        }
      }

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
        suggestions: newSuggestions
      }));

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'ขออภัยครับ เกิดข้อผิดพลาดในการประมวลผล กรุณาลองใหม่อีกครั้ง',
        type: 'assistant',
        timestamp: new Date()
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false
      }));
    }
  }, [state.currentContext]);

  const selectSuggestion = useCallback(async (suggestion: string) => {
    await sendMessage(suggestion);
  }, [sendMessage]);

  const clearMessages = useCallback(async () => {
    try {
      const suggestions = await SuggestionsService.getSuggestionsForContext(state.currentContext);
      setState(prev => ({
        ...prev,
        messages: [],
        suggestions
      }));
    } catch (error) {
      console.error('Error clearing messages:', error);
      setState(prev => ({
        ...prev,
        messages: [],
        suggestions: []
      }));
    }
  }, [state.currentContext]);

  return {
    isOpen: state.isOpen,
    isLoading: state.isLoading,
    messages: state.messages,
    currentContext: state.currentContext,
    suggestions: state.suggestions,
    toggleWidget,
    closeWidget,
    sendMessage,
    selectSuggestion,
    clearMessages
  };
};