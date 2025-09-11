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
  });

  return addCategory;
};

export default useAddCategory;
