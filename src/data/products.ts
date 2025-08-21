export interface Product {
  id: string;
  name: string;
  image: string; // รูปสำหรับ desktop
  imageMobile: string; // รูปสำหรับ mobile
  category?: string;
}

export const products: Product[] = [
  { id: "1", name: "Smart Toilet", image: "/src/assets/smart-toilet.jpg", imageMobile: "/src/assets/smart-toilet.jpg", category: "toilet" },
  { id: "2", name: "One Piece Toilet", image: "/src/assets/smart-toilet.jpg", imageMobile: "/src/assets/smart-toilet.jpg", category: "toilet" },
  { id: "3", name: "Basin", image: "/src/assets/basin.jpg", imageMobile: "/src/assets/basin.jpg", category: "basin" },
  { id: "4", name: "Bathtub", image: "/src/assets/bathtub.jpg", imageMobile: "/src/assets/bathtub.jpg", category: "bathtub" },
  { id: "5", name: "Shower Enclosure", image: "/src/assets/shower-enclosure.jpg", imageMobile: "/src/assets/shower-enclosure.jpg", category: "shower" },
  { id: "6", name: "Faucet", image: "/src/assets/faucet.jpg", imageMobile: "/src/assets/faucet.jpg", category: "faucet" },
  { id: "7", name: "Rain Shower", image: "/src/assets/shower-enclosure.jpg", imageMobile: "/src/assets/shower-enclosure.jpg", category: "shower" },
  { id: "8", name: "Bidet Sprayer", image: "/src/assets/faucet.jpg", imageMobile: "/src/assets/faucet.jpg", category: "faucet" },
  { id: "9", name: "Urinal", image: "/src/assets/smart-toilet.jpg", imageMobile: "/src/assets/smart-toilet.jpg", category: "toilet" },
  { id: "10", name: "Accessories", image: "/src/assets/faucet.jpg", imageMobile: "/src/assets/faucet.jpg", category: "accessories" },
];