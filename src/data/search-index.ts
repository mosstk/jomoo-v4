import { smartToiletProducts } from './smart-toilet-products';
import { onePieceToiletProducts } from './one-piece-toilet-products';
import { basinProducts } from './basin-products';
import { bathProducts } from './bathtub-products';
import { showerProducts } from './shower-products';
import { faucetProducts } from './faucet-products';
import { rainShowerProducts } from './rain-shower-products';
import { bidetSprayProducts } from './bidet-spray-products';
import { uniralProducts } from './uniral-products';
import { accessoriesProducts } from './accessories-products';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'product' | 'page';
  url: string;
  image?: string;
  model?: string;
  relevanceScore?: number;
}

// Create searchable data index
const createSearchIndex = (): SearchResult[] => {
  const searchData: SearchResult[] = [];

  // Add product categories
  const productCategories = [
    { id: 'smart-toilet', name: 'Smart Toilet', url: '/smart-toilet', products: smartToiletProducts, description: 'สุขภัณฑ์อัจฉริยะ' },
    { id: 'one-piece-toilet', name: 'One Piece Toilet', url: '/one-piece-toilet', products: onePieceToiletProducts, description: 'สุขภัณฑ์ชิ้นเดียว' },
    { id: 'basin', name: 'Basin', url: '/basin', products: basinProducts, description: 'อ่างล้างหน้า' },
    { id: 'bathtub', name: 'Bathtub', url: '/bathtub', products: bathProducts, description: 'อ่างอาบน้ำ' },
    { id: 'shower-enclosure', name: 'Shower Enclosure', url: '/shower-enclosure', products: showerProducts, description: 'ฉากกั้นอาบน้ำ' },
    { id: 'faucet', name: 'Faucet', url: '/faucet', products: faucetProducts, description: 'ก๊อกน้ำ' },
    { id: 'rain-shower', name: 'Rain Shower', url: '/rain-shower', products: rainShowerProducts, description: 'ชุดเรนชาวเวอร์อาบน้ำ' },
    { id: 'bidet-spray', name: 'Bidet Spray', url: '/bidet-spray', products: bidetSprayProducts, description: 'ชุดสายฉีดชำระ' },
    { id: 'uniral', name: 'Urinal', url: '/uniral', products: uniralProducts, description: 'โถปัสสวะชาย' },
    { id: 'accessories', name: 'Accessories', url: '/accessories', products: accessoriesProducts, description: 'อุปกรณ์ห้องน้ำ' }
  ];

  // Add category pages
  productCategories.forEach(category => {
    searchData.push({
      id: `category-${category.id}`,
      title: category.name,
      description: category.description,
      category: 'Product Categories',
      type: 'page',
      url: category.url
    });

    // Add individual products
    category.products.forEach(product => {
      searchData.push({
        id: product.id,
        title: product.name,
        description: product.description,
        category: category.name,
        type: 'product',
        url: category.url,
        image: product.image,
        model: product.model
      });
    });
  });

  // Add main pages
  searchData.push(
    {
      id: 'about-us',
      title: 'About Us',
      description: 'TOA Living Space - Leading provider of premium bathroom fixtures and design solutions. Expert designers and craftsmen creating personalized bathroom solutions.',
      category: 'Company Info',
      type: 'page',
      url: '/about-us'
    },
    {
      id: 'service',
      title: 'Service',
      description: 'Design Consultation, Installation Service, After-Sales Support. Professional services for your bathroom renovation journey.',
      category: 'Services',
      type: 'page',
      url: '/service'
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with TOA Living Space. Bangkok showroom, phone, email, business hours. Contact form available.',
      category: 'Contact Info',
      type: 'page',
      url: '/contact'
    },
    {
      id: 'inspiration',
      title: 'Inspiration',
      description: 'Bathroom design inspiration and ideas. Discover beautiful bathroom layouts and design concepts.',
      category: 'Design Ideas',
      type: 'page',
      url: '/inspiration'
    }
  );

  return searchData;
};

export const searchIndex = createSearchIndex();

// Search function with relevance scoring
export const searchContent = (query: string, limit: number = 10): SearchResult[] => {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  searchIndex.forEach(item => {
    let relevanceScore = 0;
    const titleLower = item.title.toLowerCase();
    const descriptionLower = item.description.toLowerCase();
    const categoryLower = item.category.toLowerCase();

    // Exact match in title (highest priority)
    if (titleLower === searchTerm) {
      relevanceScore += 100;
    } else if (titleLower.includes(searchTerm)) {
      relevanceScore += 50;
    }

    // Match in description
    if (descriptionLower.includes(searchTerm)) {
      relevanceScore += 30;
    }

    // Match in category
    if (categoryLower.includes(searchTerm)) {
      relevanceScore += 20;
    }

    // Model match (for products)
    if (item.model && item.model.toLowerCase().includes(searchTerm)) {
      relevanceScore += 15;
    }

    // Partial word matches
    const words = searchTerm.split(' ');
    words.forEach(word => {
      if (word.length > 2) {
        if (titleLower.includes(word)) relevanceScore += 10;
        if (descriptionLower.includes(word)) relevanceScore += 5;
      }
    });

    // Add to results if relevant
    if (relevanceScore > 0) {
      results.push({
        ...item,
        relevanceScore
      });
    }
  });

  // Sort by relevance score and limit results
  return results
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, limit);
};

// Get search suggestions
export const getSearchSuggestions = (query: string): string[] => {
  if (!query.trim() || query.length < 2) return [];

  const suggestions = new Set<string>();
  const searchTerm = query.toLowerCase();

  searchIndex.forEach(item => {
    // Add title if it matches
    if (item.title.toLowerCase().includes(searchTerm)) {
      suggestions.add(item.title);
    }
    
    // Add category if it matches
    if (item.category.toLowerCase().includes(searchTerm)) {
      suggestions.add(item.category);
    }
  });

  return Array.from(suggestions).slice(0, 5);
};