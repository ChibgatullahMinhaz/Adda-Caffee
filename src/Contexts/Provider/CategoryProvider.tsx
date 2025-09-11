import React, { type ReactNode } from 'react';
import { CategoryContext } from '../Context/CategoryContext';
import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../../api/getAllCategories';
import Loader from '../../Components/UI/Loader';
import { toast } from 'react-toastify';
import type { categoriesType } from '../../types/types';

interface CategoryType {
    children: ReactNode
}
const CategoryProvider: React.FunctionComponent<CategoryType> = ({ children }) => {

    const { data, error, isLoading } = useQuery<categoriesType[], Error>({
        queryKey: ['all-coffee'],
        queryFn: getAllCategories
    })
    if (error) {
        toast.error(error.message)
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <CategoryContext.Provider value={data ?? []}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;