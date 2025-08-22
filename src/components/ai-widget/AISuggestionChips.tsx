import React from 'react';
import { SmartSuggestion } from '@/services/ai-widget/types';

interface AISuggestionChipsProps {
  suggestions: SmartSuggestion[];
  onSuggestionClick: (suggestion: string) => void;
  disabled?: boolean;
}

const AISuggestionChips: React.FC<AISuggestionChipsProps> = ({
  suggestions,
  onSuggestionClick,
  disabled = false
}) => {
  const getCategoryColor = (category: SmartSuggestion['category']) => {
    const colors = {
      product: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
      specification: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
      installation: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
      warranty: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
      comparison: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700'
    };
    return colors[category] || colors.product;
  };

  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">คำถามยอดนิยม:</p>
      <div className="flex flex-wrap gap-1">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            onClick={() => onSuggestionClick(suggestion.text)}
            disabled={disabled}
            className={`
              px-2 py-1 text-xs rounded-full border transition-colors
              ${getCategoryColor(suggestion.category)}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              hover:scale-105 transform transition-transform duration-150
            `}
            title={`หมวดหมู่: ${suggestion.category}`}
          >
            {suggestion.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AISuggestionChips;