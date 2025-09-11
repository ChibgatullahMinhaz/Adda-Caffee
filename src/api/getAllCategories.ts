import { toast } from "react-toastify";
import axiosPublicInstance from "./axiosPublicInstance";
import type { categoriesType } from "../types/types";

export const getAllCategories = async (): Promise<categoriesType[]> => {
  try {
    const res = await axiosPublicInstance.get("/getAllCategories");
    if (!res) {
      throw new Error("Failed to Fetch Categories");
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
