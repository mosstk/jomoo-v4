import React from 'react';
import { User, Bot } from 'lucide-react';
import { ChatMessage } from '@/services/ai-widget/types';

interface AIChatMessageProps {
  message: ChatMessage;
}

const AIChatMessage: React.FC<AIChatMessageProps> = ({ message }) => {
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
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
        
        {/* Timestamp */}
        <div className={`text-xs text-slate-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString('th-TH', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default AIChatMessage;