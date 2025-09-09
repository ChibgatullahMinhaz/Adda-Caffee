import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CoffeeFormData } from "../types/types";
import { addCoffee } from "../api/addCoffee";
import { toast } from "react-toastify";

export const useAddCoffee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCoffee: CoffeeFormData) => addCoffee(newCoffee),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coffees"] });
      toast.success("Coffee Add Successfully");
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
};
