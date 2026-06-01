import AllProductsListJson from "@/data/ProductList.json";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  detailedDescription: string;
  ingredients?: string;
  nutrition?: string;
  certifications?: string[];
  sizes?: string[];
  recommended: boolean;
  detailImage: string;
  cardImage?: string;
}

export interface Category {
  id: number;
  categoryName: string;
  products: Product[];
}

export const AllProductsList = AllProductsListJson as Category[];
