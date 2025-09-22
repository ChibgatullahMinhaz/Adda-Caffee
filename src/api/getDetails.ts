import { toast } from "react-toastify";
import type { Coffee } from "../types/types";
import axiosPublicInstance from "./axiosPublicInstance";

export const getProductDetails = async (id:string): Promise<Coffee> => {
  try {
    const res = await axiosPublicInstance.get(`/coffees/${id}`);
    if (!res) {
      throw new Error("Failed to Fetch coffee details");
    }
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
      throw error;
    } else {
      toast.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred");
    }
  }
};
