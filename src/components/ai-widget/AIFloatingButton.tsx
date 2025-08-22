import React from 'react';
import { MessageCircle, X } from 'lucide-react';

interface AIFloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
  hasUnread?: boolean;
}

const AIFloatingButton: React.FC<AIFloatingButtonProps> = ({
  isOpen,
  onClick,
  hasUnread = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-br from-blue-500 to-blue-600
        hover:from-blue-600 hover:to-blue-700
        text-white shadow-lg hover:shadow-xl
        transform transition-all duration-300 ease-out
        ${isOpen ? 'rotate-180 scale-110' : 'hover:scale-110'}
        flex items-center justify-center
        border-2 border-white/20
        backdrop-blur-sm
      `}
      aria-label={isOpen ? 'ปิดแชทบอท' : 'เปิดแชทบอท TOA Assistant'}
    >
      {/* Notification dot */}
      {hasUnread && !isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      )}
      
      {/* Icon */}
      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" />
    </button>
  );
};

export default AIFloatingButton;