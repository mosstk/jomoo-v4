import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X, Clock, ArrowRight } from 'lucide-react';
import { searchContent, getSearchSuggestions, SearchResult } from '@/data/search-index';
import { useNavigate } from 'react-router-dom';

interface SearchDialogProps {
  children: React.ReactNode;
}

const SearchDialog = ({ children }: SearchDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('searchHistory');
    if (saved) {
      setRecentSearches(JSON.parse(saved).slice(0, 5));
    }
  }, []);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search functionality with debounce
  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        const searchResults = searchContent(query, 8);
        setResults(searchResults);
        setSuggestions(getSearchSuggestions(query));
      } else {
        setResults([]);
        setSuggestions([]);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    // Save to recent searches
    const newRecentSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('searchHistory', JSON.stringify(newRecentSearches));
    
    setQuery(searchQuery);
  };

  const handleResultClick = (result: SearchResult) => {
    handleSearch(query);
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('searchHistory');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 overflow-hidden bg-white dark:bg-slate-900 border-0 shadow-2xl rounded-2xl">
        <div className="flex flex-col h-full">
          {/* Search Input */}
          <div className="flex items-center px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-b border-blue-100 dark:border-slate-600">
            <Search className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ค้นหาสินค้า, หมวดหมู่, หรือเนื้อหา..."
              className="border-0 bg-transparent text-base text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery('')}
                className="h-8 w-8 p-0 hover:bg-blue-100 dark:hover:bg-slate-600 rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
            )}
          </div>

          {/* Search Content */}
          <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900">
            {!query && recentSearches.length > 0 && (
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">ค้นหาล่าสุด</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearRecentSearches}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    ล้างทั้งหมด
                  </Button>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="flex items-center w-full p-3 text-left rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-slate-600"
                    >
                      <Clock className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-3" />
                      <span className="text-sm text-slate-800 dark:text-slate-200 font-medium">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query && suggestions.length > 0 && (
              <div className="p-4 border-b">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">คำแนะนำ</h3>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="flex items-center w-full p-3 text-left rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-slate-600"
                    >
                      <Search className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-sm text-slate-800 dark:text-slate-200 font-medium">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {query && (
              <div className="p-4">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-medium">กำลังค้นหา...</p>
                  </div>
                ) : results.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        ผลการค้นหา ({results.length} รายการ)
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {results.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className="flex items-start w-full p-4 text-left rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 group border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-sm"
                        >
                          {result.image && (
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-12 h-12 object-cover rounded mr-3 flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold truncate text-slate-800 dark:text-slate-200">{result.title}</h4>
                              <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 ml-2 flex-shrink-0 transition-colors" />
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                              {result.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium">
                                {result.category}
                              </span>
                              {result.type === 'product' && result.model && (
                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                  {result.model}
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">ไม่พบผลการค้นหาสำหรับ "{query}"</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">ลองใช้คำค้นหาอื่น</p>
                  </div>
                )}
              </div>
            )}

            {!query && recentSearches.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">เริ่มพิมพ์เพื่อค้นหา</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">ค้นหาสินค้า หมวดหมู่ หรือเนื้อหาในเว็บไซท์</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;