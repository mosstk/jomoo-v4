import { ProductContext } from './types';
import { products } from '@/data/products';
import { smartToiletProducts } from '@/data/smart-toilet-products';
import { onePieceToiletProducts } from '@/data/one-piece-toilet-products';
import { basinProducts } from '@/data/basin-products';

export class ProductContextService {
  static getCurrentContext(pathname: string): ProductContext | null {
    // Extract page information from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentPage = pathSegments[0] || 'home';

    // Map pathname to product category and context
    const contextMap: Record<string, Partial<ProductContext>> = {
      'smart-toilet': {
        category: 'toilet',
        productName: 'Smart Toilet',
        availableProducts: smartToiletProducts
      },
      'one-piece-toilet': {
        category: 'toilet', 
        productName: 'One Piece Toilet',
        availableProducts: onePieceToiletProducts
      },
      'basin': {
        category: 'basin',
        productName: 'Basin',
        availableProducts: basinProducts
      },
      'bathtub': {
        category: 'bathtub',
        productName: 'Bathtub',
        availableProducts: []
      },
      'shower-enclosure': {
        category: 'shower',
        productName: 'Shower Enclosure',
        availableProducts: []
      },
      'faucet': {
        category: 'faucet',
        productName: 'Faucet',
        availableProducts: []
      },
      'rain-shower': {
        category: 'shower',
        productName: 'Rain Shower',
        availableProducts: []
      },
      'bidet-spray': {
        category: 'faucet',
        productName: 'Bidet Sprayer',
        availableProducts: []
      },
      'uniral': {
        category: 'toilet',
        productName: 'Urinal',
        availableProducts: []
      },
      'accessories': {
        category: 'accessories',
        productName: 'Accessories',
        availableProducts: []
      }
    };

    const contextInfo = contextMap[currentPage];
    if (!contextInfo) {
      return {
        category: 'general',
        productName: 'TOA Products',
        currentPage: 'home',
        availableProducts: products
      };
    }

    return {
      category: contextInfo.category!,
      productName: contextInfo.productName!,
      currentPage,
      availableProducts: contextInfo.availableProducts || []
    };
  }

  static getContextualPrompt(context: ProductContext): string {
    const basePrompt = `คุณเป็น AI ที่ช่วยให้คำปรึกษาเกี่ยวกับสินค้า TOA JOMOO ซึ่งเป็นแบรนด์สุขภัณฑ์คุณภาพสูง`;
    
    if (context.currentPage === 'home') {
      return `${basePrompt} ตอบคำถามเกี่ยวกับสินค้าทั้งหมดของ TOA JOMOO อย่างเป็นมิตรและให้ข้อมูลที่เป็นประโยชน์`;
    }

    return `${basePrompt} ขณะนี้ลูกค้ากำลังดูสินค้า ${context.productName} 
    หมวดหมู่: ${context.category}
    ให้คำแนะนำเฉพาะเจาะจงเกี่ยวกับสินค้านี้ รวมถึง:
    - สเปคสินค้า
    - ราคาโดยประมาณ  
    - วิธีการติดตั้ง
    - การรับประกัน
    - การเปรียบเทียบรุ่นต่างๆ
    
    ตอบเป็นภาษาไทยเสมอ และใช้น้ำเสียงที่เป็นมิตร เชี่ยวชาญ และให้ข้อมูลที่เป็นประโยชน์`;
  }
}