import { ProductContext } from './types';
import { products } from '@/data/products';
import { smartToiletProducts } from '@/data/smart-toilet-products';
import { onePieceToiletProducts } from '@/data/one-piece-toilet-products';
import { basinProducts } from '@/data/basin-products';
import { bathProducts } from '@/data/bathtub-products';
import { bidetSprayProducts } from '@/data/bidet-spray-products';
import { faucetProducts } from '@/data/faucet-products';

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
        availableProducts: bathProducts
      },
      'shower-enclosure': {
        category: 'shower',
        productName: 'Shower Enclosure',
        availableProducts: []
      },
      'faucet': {
        category: 'faucet',
        productName: 'Faucet',
        availableProducts: faucetProducts
      },
      'rain-shower': {
        category: 'shower',
        productName: 'Rain Shower',
        availableProducts: []
      },
      'bidet-spray': {
        category: 'faucet',
        productName: 'Bidet Sprayer',
        availableProducts: bidetSprayProducts
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
    const basePrompt = `คุณเป็น AI Assistant สำหรับเว็บไซต์ TOA JOMOO เท่านั้น 
    
ข้อจำกัดสำคัญ:
- ตอบเฉพาะคำถามเกี่ยวกับสุขภัณฑ์และบริการของ TOA JOMOO เท่านั้น
- หากคำถามไม่เกี่ยวข้อง ให้แจ้งว่าไม่สามารถตอบได้และนำกลับสู่หัวข้อสุขภัณฑ์
- ใช้ข้อมูลที่มีในเว็บไซต์เท่านั้น อย่าแต่งเรื่องหรือสมมติข้อมูล`;
    
    if (context.currentPage === 'home') {
      return `${basePrompt} ตอบคำถามเกี่ยวกับสินค้าทั้งหมดของ TOA JOMOO อย่างเป็นมิตรและให้ข้อมูลที่มีอยู่จริงเท่านั้น`;
    }

    return `${basePrompt} ขณะนี้ลูกค้ากำลังดูสินค้า ${context.productName} 
    หมวดหมู่: ${context.category}
    
    ให้คำแนะนำเฉพาะเจาะจงเกี่ยวกับสินค้านี้เท่านั้น:
    - ข้อมูลสินค้าที่มีจริงในเว็บไซต์
    - ราคาโดยประมาณที่สมเหตุสมผล  
    - วิธีการติดตั้งพื้นฐาน
    - การรับประกันมาตรฐาน (2-5 ปี)
    - การเปรียบเทียบรุ่นต่างๆ ที่มีอยู่
    
    ห้ามตอบคำถามที่ไม่เกี่ยวข้องกับสุขภัณฑ์ TOA JOMOO
    ตอบเป็นภาษาไทยเสมอ และใช้น้ำเสียงที่เป็นมิตร เชี่ยวชาญ`;
  }
}