import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addCategories } from "../api/addCategories";
import type { categoriesType } from "../types/types";
import { toast } from "react-toastify";

const useAddCategory = () => {
  
  const queryClient = useQueryClient();
  const addCategory = useMutation({
    mutationFn: (formData: categoriesType) => addCategories(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category Add Successfully");

    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        throw error;
      } else {
        toast.error("An unexpected error occurred");
        throw new Error("An unexpected error occurred");
      }
    },
  });

  return addCategory;
};

export default useAddCategory;
