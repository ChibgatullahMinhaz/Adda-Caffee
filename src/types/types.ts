export interface Coffee {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  images: FileList | null;
  ratings: number;
  available: boolean;
  sizes: string[];
  currency: string;
  inStock: boolean;
  caffeineContent: number;
  createdAt: Date;
  updatedAt: Date;
  calories: number;
  tags: string[];
  seasonal: boolean;
  quantity: number;
  ingredients: string[];
  roastLevel: string;
  origin: string;
  isSpecial: boolean;
}

export interface User {
  name: string;
  email: string;
  isOnline: boolean;
  isActive: boolean;
  role: string;
  createdAt: Date;
}

export interface CoffeeFormData {
  name: string;
  category: string;
  description: string;
  price: number;
  sizes: string[];
  currency: string;
  inStock: boolean;
  caffeineContent: number;
  ratings: number;
  calories: number;
  tags: string[];
  images?: FileList;
  seasonal: boolean;
  quantity: number;
  ingredients: string[];
  roastLevel: string;
  origin: string;
  available: boolean;
  isSpecial: boolean;
}

export interface categoriesType {
  categories: string;
}
