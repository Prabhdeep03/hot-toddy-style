export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: ProductCategory;
  description: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export type ProductCategory = 
  | "tote"
  | "crossbody"
  | "clutch"
  | "shoulder"
  | "mini";

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
