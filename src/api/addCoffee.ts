import { toast } from "react-toastify";
import axiosSecureInstance from "./axiosSecureInstance";
import type { CoffeeFormData } from "../types/types";

const addCoffee = async (
  newCoffee: CoffeeFormData
): Promise<CoffeeFormData> => {
  try {
    const res = await axiosSecureInstance.post("/coffees", newCoffee);
    toast.success("Coffee Add Successfully");
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

export { addCoffee };
