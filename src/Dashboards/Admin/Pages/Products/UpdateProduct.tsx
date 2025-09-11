import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import type { Coffee } from '../../../../types/types';
import { getCoffeeDetailsAdminSide } from '../../../../api/getCoffeeDetails';
import Loader from '../../../../Components/UI/Loader';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const UpdateProduct: React.FunctionComponent = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, error, refetch, isLoading } = useQuery<Coffee, Error>({
    queryKey: ['coffee-details', productId],
    queryFn: () => {
      if (!productId) {
        throw new Error('Product ID is missing!')
      }
      return getCoffeeDetailsAdminSide(productId)
    },
    enabled: !!productId,
  })
  // @ handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Coffee>({
    defaultValues: data
  });

  // @ Handle error 
  if (error) {
    toast.error(error.message);
    return <div>Error fetching coffee details.</div>;
  }
  if (isLoading) return <Loader />;
  //@ handle no data 
  if (!data)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-gray-300 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m0 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">
          Oops! No Coffee Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-center max-w-md mb-6">
          The coffee details you are looking for are not available. It might have been
          removed or the ID is incorrect. You can try refreshing the page.
        </p>

        {/* Refresh Button */}
        <button
          onClick={() => refetch()}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          Refresh
        </button>
      </div>
    );

  return (
    <div>
      {data.name}
    </div>
  );
};

export default UpdateProduct;