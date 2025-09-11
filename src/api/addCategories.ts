import { toast } from "react-toastify";
import axiosSecureInstance from "./axiosSecureInstance";
import type { categoriesType } from "../types/types";
import { AxiosError } from "axios";

export const addCategories = async (formData: categoriesType) => {
  try {
    const res = await axiosSecureInstance.post("/addOneCategory", formData);
    return res.data;
  } catch (err: unknown) {
    // @ check if AxiosError
    if (err instanceof AxiosError && err.response?.data?.message) {
      toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
    // @ check if generic JS error
    else if (err instanceof Error) {
      toast.error(err.message);
      throw err;
    } else {
      toast.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred");
    }
  }
};
