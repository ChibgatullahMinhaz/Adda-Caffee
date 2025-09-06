
export interface Coffee {
 _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
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