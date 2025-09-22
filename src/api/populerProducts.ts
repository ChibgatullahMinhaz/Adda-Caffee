import { toast } from "react-toastify";
import type { Coffee } from "../types/types";
import axiosPublicInstance from "./axiosPublicInstance";

const getPopularCoffee = async (): Promise<Coffee[]> => {
  try {
    const res = await axiosPublicInstance.get("/popular/coffees");
    if (!res) {
      throw new Error("Failed to Fetch All coffee");
    }
    return res.data;
  }catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        throw error;
      } else {
        toast.error("An unexpected error occurred");
        throw new Error("An unexpected error occurred");
      }
    }
};
export {getPopularCoffee}