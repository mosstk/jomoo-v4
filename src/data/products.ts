export interface Product {
  id: string;
  name: string;
  image: string; // รูปสำหรับ desktop
  imageMobile: string; // รูปสำหรับ mobile
  category?: string;
}

export const products: Product[] = [
  { id: "1", name: "Faucet", image: "/lovable-uploads/6178181d-97ff-451f-af66-af63d4f1f4d8.png", imageMobile: "/lovable-uploads/76924a76-4772-4b47-a1a2-4ebc9494f234.png", category: "faucet" },
  { id: "2", name: "Shower", image: "/lovable-uploads/df4e8667-2cc9-42e0-a31f-d302e26be9a5.png", imageMobile: "/lovable-uploads/94950574-5d69-4097-85af-ee7d4927c2be.png", category: "shower" },
  { id: "3", name: "Bidet Sprayer", image: "/lovable-uploads/d1809d3a-0b62-4467-abaf-4911693b16b5.png", imageMobile: "/lovable-uploads/72cd55b0-754e-4fd8-9ad7-4cb9596e00aa.png", category: "faucet" },
  { id: "4", name: "Urinal", image: "/lovable-uploads/6e023a8e-c270-4f7a-8d69-ca7751d46c77.png", imageMobile: "/lovable-uploads/3b319425-03a1-4c7a-9f22-8aaddfa88000.png", category: "toilet" },
  { id: "5", name: "Bathroom Shelves", image: "/lovable-uploads/8bc2bdd7-dbfc-405a-b3c0-25a02a825c63.png", imageMobile: "/lovable-uploads/43b4b548-71a6-4327-93ae-90547e01ef13.png", category: "accessories" },
  { id: "6", name: "Smart Toilet", image: "/lovable-uploads/50cd01fb-f9ec-4c45-8171-e78616b52228.png", imageMobile: "/lovable-uploads/49806441-47b2-4281-a536-367f90a934e2.png", category: "toilet" },
  { id: "7", name: "Toilet", image: "/lovable-uploads/6390e784-9e77-451e-8b8c-407f169be6f4.png", imageMobile: "/lovable-uploads/123c236d-877a-454c-aa97-0b4e863c2cd3.png", category: "toilet" },
  { id: "8", name: "Basin", image: "/lovable-uploads/3aede93b-84f3-4a77-acf5-a767654f5f65.png", imageMobile: "/lovable-uploads/87d356b6-06b6-4d40-b8be-3ee3602b5696.png", category: "basin" },
  { id: "9", name: "Bathtub", image: "/lovable-uploads/7739bbfb-751f-4bb9-a2d2-f66c0c7aa89c.png", imageMobile: "/lovable-uploads/8c2b74dd-e09f-4961-9633-b580aea42e95.png", category: "bathtub" },
  { id: "10", name: "Shower Enclosure", image: "/lovable-uploads/fca316c9-ec48-4f9f-8a27-0aa24fd70bb5.png", imageMobile: "/lovable-uploads/21c4a65f-792e-4c44-831b-e5d9b19ec2ae.png", category: "shower" },
];