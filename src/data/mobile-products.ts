export interface MobileProduct {
  id: string;
  name: string;
  image: string;
}

export const mobileProducts: MobileProduct[] = [
  { id: "1", name: "Smart Toilet", image: "/src/assets/smart-toilet.jpg" },
  { id: "2", name: "One Piece Toilet", image: "/src/assets/smart-toilet.jpg" },
  { id: "3", name: "Basin", image: "/src/assets/basin.jpg" },
  { id: "4", name: "Bathtub", image: "/src/assets/bathtub.jpg" },
  { id: "5", name: "Shower Enclosure", image: "/src/assets/shower-enclosure.jpg" },
  { id: "6", name: "Faucet", image: "/src/assets/faucet.jpg" },
  { id: "7", name: "Rain Shower", image: "/src/assets/shower-enclosure.jpg" },
  { id: "8", name: "Bidet Sprayer", image: "/src/assets/faucet.jpg" },
  { id: "9", name: "Urinal", image: "/src/assets/smart-toilet.jpg" },
  { id: "10", name: "Accessories", image: "/src/assets/basin.jpg" },
];