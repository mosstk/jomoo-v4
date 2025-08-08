import smartToiletImg from "@/assets/smart-toilet.jpg";
import basinImg from "@/assets/basin.jpg";
import bathtubImg from "@/assets/bathtub.jpg";
import showerImg from "@/assets/shower-enclosure.jpg";
import faucetImg from "@/assets/faucet.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  category?: string;
}

export const products: Product[] = [
  { id: "1", name: "Smart Toilet", image: smartToiletImg, category: "toilet" },
  { id: "2", name: "Toilet", image: smartToiletImg, category: "toilet" },
  { id: "3", name: "Basin", image: basinImg, category: "basin" },
  { id: "4", name: "Bathtub", image: bathtubImg, category: "bathtub" },
  { id: "5", name: "Shower Enclosure", image: showerImg, category: "shower" },
  { id: "6", name: "Faucet", image: faucetImg, category: "faucet" },
  { id: "7", name: "Rain Shower", image: showerImg, category: "shower" },
  { id: "8", name: "Bidet Sprayer", image: faucetImg, category: "faucet" },
  { id: "9", name: "Urinal", image: smartToiletImg, category: "toilet" },
  { id: "10", name: "Accessories", image: faucetImg, category: "accessories" },
];