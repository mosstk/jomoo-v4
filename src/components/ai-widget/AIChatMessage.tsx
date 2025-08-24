import React from 'react';
import { User, Bot } from 'lucide-react';
import { ChatMessage, SmartSuggestion } from '@/services/ai-widget/types';
import AISuggestionChips from './AISuggestionChips';

// Helper function to format message content and convert markdown links to HTML
const formatMessageContent = (content: string, isUser: boolean): string => {
  if (isUser) {
    return content; // Don't format user messages
  }
  
  // Convert markdown links [text](url) to HTML links
  let formatted = content.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g, 
    `<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>`
  );
  
  // Convert **bold** to HTML bold
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Convert line breaks to HTML br tags
  formatted = formatted.replace(/\n/g, '<br>');
  
  return formatted;
};

interface AIChatMessageProps {
  message: ChatMessage;
  suggestions?: SmartSuggestion[];
  onSuggestionClick?: (suggestion: string) => void;
  isLastMessage?: boolean;
}

const AIChatMessage: React.FC<AIChatMessageProps> = ({ message, suggestions, onSuggestionClick, isLastMessage }) => {
  const isUser = message.type === 'user';
  
  return (
    <div className={`flex items-start space-x-2 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-blue-500 text-white' 
          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
      }`}>
        {isUser ? (
          <User className="w-3 h-3" />
        ) : (
          <Bot className="w-3 h-3" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block px-3 py-2 rounded-2xl text-sm ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-sm'
            : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-sm'
        }`}>
          <div 
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ 
              __html: formatMessageContent(message.content, isUser) 
            }}
          />
        </div>
        
        {/* Timestamp */}
        <div className={`text-xs text-slate-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString('th-TH', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>

        {/* Show suggestions after AI responses (only for the last AI message) */}
        {!isUser && isLastMessage && suggestions && suggestions.length > 0 && onSuggestionClick && (
          <div className="mt-3">
            <AISuggestionChips
              suggestions={suggestions}
              onSuggestionClick={onSuggestionClick}
              disabled={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChatMessage;