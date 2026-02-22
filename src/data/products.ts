import type { Product, CollectionItem } from "@/types/product";

export const allProducts: Product[] = [
  {
    id: "1",
    name: "The Aria Tote",
    price: 485,
    image: "/images/bag1.png",
    category: "tote",
    description: "Crafted from premium Italian leather with gold-tone hardware",
    isNew: true,
  },
  {
    id: "2",
    name: "Luna Crossbody",
    price: 325,
    image: "/images/bag2.png",
    category: "crossbody",
    description: "Elegant everyday companion with adjustable strap",
    isBestseller: true,
  },
  {
    id: "4",
    name: "The Willow Shoulder Bag",
    price: 395,
    image: "/images/bag4.png",
    category: "shoulder",
    description: "Timeless silhouette meets modern functionality",
    isNew: true,
  },
  {
    id: "5",
    name: "Classic Day Tote",
    price: 425,
    image: "/images/bag5.png",
    category: "tote",
    description: "Spacious interior with multiple compartments",
    isBestseller: true,
  },
  {
    id: "6",
    name: "Petite Crossbody",
    price: 285,
    image: "/images/bag6.png",
    category: "crossbody",
    description: "Compact yet surprisingly spacious design",
  },
  {
    id: "8",
    name: "Sophia Shoulder Bag",
    price: 365,
    image: "/images/bag8.png",
    category: "shoulder",
    description: "Elegant curves with structured silhouette",
  },
  {
    id: "9",
    name: "Mini Pearl Crossbody",
    price: 195,
    image: "/images/bag9.png",
    category: "mini",
    description: "Delicate chain detail with pearl accents",
    isNew: true,
  },
  {
    id: "11",
    name: "Velvet Evening Clutch",
    price: 295,
    image: "/images/bag11.png",
    category: "clutch",
    description: "Luxurious velvet with crystal closure",
    isBestseller: true,
  },
  {
    id: "12",
    name: "Mini Belt Bag",
    price: 225,
    image: "/images/bag12.png",
    category: "mini",
    description: "Hands-free versatility with adjustable belt",
  },
];

export const featuredProducts: Product[] = allProducts.slice(0, 4);

export const collections: CollectionItem[] = [
  {
    id: "1",
    title: "The Essentials",
    description: "Timeless pieces for everyday elegance",
    image: "/images/bag1.png",
    slug: "essentials",
  },
  {
    id: "2",
    title: "Evening Edit",
    description: "Statement bags for unforgettable nights",
    image: "/images/bag7.png",
    slug: "evening",
  },
];
