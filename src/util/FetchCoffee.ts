import { toast } from "react-toastify";
import axiosPublicInstance from "../api/axiosPublicInstance";

interface Coffee {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  available: boolean;
  size: string;
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
const fetchCoffee = async (): Promise<Coffee[]> => {
  try {
    const response = await axiosPublicInstance("/coffees");
    if (!response) {
      throw new Error("Failed to Fetch All coffee");
    }
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
      throw error;
    } else {
      toast.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred");
    }
  }
};

export { fetchCoffee };
