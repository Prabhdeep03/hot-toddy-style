import type { Product, CollectionItem } from "@/types/product";

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "The Aria Tote",
    price: 485,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    category: "tote",
    description: "Crafted from premium Italian leather with gold-tone hardware",
    isNew: true,
  },
  {
    id: "2",
    name: "Luna Crossbody",
    price: 325,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    category: "crossbody",
    description: "Elegant everyday companion with adjustable strap",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Evening Ember Clutch",
    price: 275,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    category: "clutch",
    description: "Statement piece for your most memorable nights",
  },
  {
    id: "4",
    name: "The Willow Shoulder Bag",
    price: 395,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    category: "shoulder",
    description: "Timeless silhouette meets modern functionality",
    isNew: true,
  },
];

export const collections: CollectionItem[] = [
  {
    id: "1",
    title: "The Essentials",
    description: "Timeless pieces for everyday elegance",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80",
    slug: "essentials",
  },
  {
    id: "2",
    title: "Evening Edit",
    description: "Statement bags for unforgettable nights",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    slug: "evening",
  },
];
