import React from 'react';
import { useAIWidget } from '@/hooks/useAIWidget';
import AIFloatingButton from './AIFloatingButton';
import AIChatWindow from './AIChatWindow';

const AIWidget: React.FC = () => {
  const {
    isOpen,
    isLoading,
    messages,
    currentContext,
    suggestions,
    toggleWidget,
    closeWidget,
    sendMessage,
    selectSuggestion,
    clearMessages
  } = useAIWidget();

  return (
    <>
      <AIFloatingButton
        isOpen={isOpen}
        onClick={toggleWidget}
        hasUnread={false} // Can be enhanced with notification logic
      />
      
      <AIChatWindow
        isOpen={isOpen}
        isLoading={isLoading}
        messages={messages}
        suggestions={suggestions}
        currentContext={currentContext}
        onClose={closeWidget}
        onSendMessage={sendMessage}
        onSelectSuggestion={selectSuggestion}
        onClearMessages={clearMessages}
      />
    </>
  );
};

export default AIWidget;