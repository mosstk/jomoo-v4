import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash2, Minimize2 } from 'lucide-react';
import { ChatMessage, SmartSuggestion, ProductContext } from '@/services/ai-widget/types';
import AIChatMessage from './AIChatMessage';
import AISuggestionChips from './AISuggestionChips';

interface AIChatWindowProps {
  isOpen: boolean;
  isLoading: boolean;
  messages: ChatMessage[];
  suggestions: SmartSuggestion[];
  currentContext: ProductContext | null;
  onClose: () => void;
  onSendMessage: (message: string) => Promise<void>;
  onSelectSuggestion: (suggestion: string) => Promise<void>;
  onClearMessages: () => void;
}

const AIChatWindow: React.FC<AIChatWindowProps> = ({
  isOpen,
  isLoading,
  messages,
  suggestions,
  currentContext,
  onClose,
  onSendMessage,
  onSelectSuggestion,
  onClearMessages
}) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');
    await onSendMessage(message);
  };

  const handleSuggestionClick = async (suggestion: string) => {
    setInputValue('');
    await onSelectSuggestion(suggestion);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 z-40 w-80 h-[500px] md:h-[500px] sm:h-[450px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">AI</span>
          </div>
          <div>
            <h3 className="font-semibold text-sm">TOA Assistant</h3>
            <p className="text-xs text-blue-100">
              {currentContext ? `${currentContext.productName}` : 'ช่วยเหลือทั่วไป'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {messages.length > 0 && (
            <button
              onClick={onClearMessages}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              title="ล้างข้อความ"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            title="ปิดหน้าต่าง"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {messages.length === 0 ? (
          <div className="text-center text-slate-500 dark:text-slate-400 py-8">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 dark:text-blue-400 text-lg">👋</span>
            </div>
            <p className="text-sm font-medium mb-1">สวัสดีครับ!</p>
            <p className="text-xs text-slate-400">มีคำถามเกี่ยวกับสินค้า TOA ไหมครับ?</p>
          </div>
        ) : (
          messages.map((message, index) => {
            const isLastAIMessage = message.type === 'assistant' && 
                                   index === messages.length - 1;
            return (
              <AIChatMessage 
                key={message.id} 
                message={message}
                suggestions={isLastAIMessage ? suggestions : undefined}
                onSuggestionClick={isLastAIMessage ? handleSuggestionClick : undefined}
                isLastMessage={isLastAIMessage}
              />
            );
          })
        )}
        
        {isLoading && (
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <span className="text-xs">กำลังพิมพ์...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Initial Suggestions - shown when no messages yet */}
      {suggestions.length > 0 && messages.length === 0 && (
        <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 mb-2">คำถามยอดนิยม:</p>
          <AISuggestionChips
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            disabled={isLoading}
          />
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="พิมพ์คำถามของคุณ..."
            className="flex-1 px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChatWindow;