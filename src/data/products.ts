export interface Product {
  id: string;
  name: string;
  image: string; // รูปสำหรับ desktop
  imageMobile: string; // รูปสำหรับ mobile
  category?: string;
}

export const products: Product[] = [
  { id: "1", name: "Faucet", image: "/lovable-uploads/76924a76-4772-4b47-a1a2-4ebc9494f234.png", imageMobile: "/lovable-uploads/76924a76-4772-4b47-a1a2-4ebc9494f234.png", category: "faucet" },
  { id: "2", name: "Shower", image: "/lovable-uploads/94950574-5d69-4097-85af-ee7d4927c2be.png", imageMobile: "/lovable-uploads/94950574-5d69-4097-85af-ee7d4927c2be.png", category: "shower" },
  { id: "3", name: "Bidet Sprayer", image: "/lovable-uploads/72cd55b0-754e-4fd8-9ad7-4cb9596e00aa.png", imageMobile: "/lovable-uploads/72cd55b0-754e-4fd8-9ad7-4cb9596e00aa.png", category: "faucet" },
  { id: "4", name: "Urinal", image: "/lovable-uploads/3b319425-03a1-4c7a-9f22-8aaddfa88000.png", imageMobile: "/lovable-uploads/3b319425-03a1-4c7a-9f22-8aaddfa88000.png", category: "toilet" },
  { id: "5", name: "Bathroom Shelves", image: "/lovable-uploads/43b4b548-71a6-4327-93ae-90547e01ef13.png", imageMobile: "/lovable-uploads/43b4b548-71a6-4327-93ae-90547e01ef13.png", category: "accessories" },
  { id: "6", name: "Smart Toilet", image: "/lovable-uploads/49806441-47b2-4281-a536-367f90a934e2.png", imageMobile: "/lovable-uploads/49806441-47b2-4281-a536-367f90a934e2.png", category: "toilet" },
  { id: "7", name: "Toilet", image: "/lovable-uploads/123c236d-877a-454c-aa97-0b4e863c2cd3.png", imageMobile: "/lovable-uploads/123c236d-877a-454c-aa97-0b4e863c2cd3.png", category: "toilet" },
  { id: "8", name: "Basin", image: "/lovable-uploads/87d356b6-06b6-4d40-b8be-3ee3602b5696.png", imageMobile: "/lovable-uploads/87d356b6-06b6-4d40-b8be-3ee3602b5696.png", category: "basin" },
  { id: "9", name: "Bathtub", image: "/lovable-uploads/8c2b74dd-e09f-4961-9633-b580aea42e95.png", imageMobile: "/lovable-uploads/8c2b74dd-e09f-4961-9633-b580aea42e95.png", category: "bathtub" },
  { id: "10", name: "Shower Enclosure", image: "/lovable-uploads/21c4a65f-792e-4c44-831b-e5d9b19ec2ae.png", imageMobile: "/lovable-uploads/21c4a65f-792e-4c44-831b-e5d9b19ec2ae.png", category: "shower" },
];