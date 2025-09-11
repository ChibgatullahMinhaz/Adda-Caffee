import { toast } from "react-toastify";
import axiosSecureInstance from "./axiosSecureInstance";
import type { CoffeeFormData } from "../types/types";

export const updateCoffee = async (
  productId: string,
  formData: FormData
): Promise<CoffeeFormData> => {
  try {
    const res = await axiosSecureInstance.put(
      `/coffees/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
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
