import { toast } from "react-toastify";
import axiosSecureInstance from "./axiosSecureInstance";
import type { categoriesType } from "../types/types";

export const addCategories = async (formData: categoriesType) => {
  try {
    const res = await axiosSecureInstance.post("/addOneCategory", formData);
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
