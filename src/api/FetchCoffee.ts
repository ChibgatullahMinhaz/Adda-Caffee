import { toast } from "react-toastify";
import axiosPublicInstance from "../api/axiosPublicInstance";
import type { Coffee } from "../types/types";


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
