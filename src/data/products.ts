export interface Product {
  id: string;
  name: string;
  image: string;
  category?: string;
}

export const products: Product[] = [
  { id: "1", name: "Smart Toilet", image: "/lovable-uploads/50cd01fb-f9ec-4c45-8171-e78616b52228.png", category: "toilet" },
  { id: "2", name: "One Piece Toilet", image: "/lovable-uploads/6390e784-9e77-451e-8b8c-407f169be6f4.png", category: "toilet" },
  { id: "3", name: "Basin", image: "/lovable-uploads/3aede93b-84f3-4a77-acf5-a767654f5f65.png", category: "basin" },
  { id: "4", name: "Bathtub", image: "/lovable-uploads/7739bbfb-751f-4bb9-a2d2-f66c0c7aa89c.png", category: "bathtub" },
  { id: "5", name: "Shower Enclosure", image: "/lovable-uploads/fca316c9-ec48-4f9f-8a27-0aa24fd70bb5.png", category: "shower" },
  { id: "6", name: "Faucet", image: "/lovable-uploads/6178181d-97ff-451f-af66-af63d4f1f4d8.png", category: "faucet" },
  { id: "7", name: "Rain Shower", image: "/lovable-uploads/df4e8667-2cc9-42e0-a31f-d302e26be9a5.png", category: "shower" },
  { id: "8", name: "Bidet Sprayer", image: "/lovable-uploads/d1809d3a-0b62-4467-abaf-4911693b16b5.png", category: "faucet" },
  { id: "9", name: "Urinal", image: "/lovable-uploads/6e023a8e-c270-4f7a-8d69-ca7751d46c77.png", category: "toilet" },
  { id: "10", name: "Accessories", image: "/lovable-uploads/8bc2bdd7-dbfc-405a-b3c0-25a02a825c63.png", category: "accessories" },
];