import { createContext } from "react";
import type { categoriesType } from "../../types/types";


export const CategoryContext = createContext<categoriesType[] | null>(null) 