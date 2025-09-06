import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface CoffeeFormData {
  name: string;
  category: string;
  description: string;
  price: number;
  sizes: string[];
  currency: string;
  inStock: boolean;
  caffeineContent: number;
  ratings: number;
  calories: number;
  tags: string[];
  image: string;
  seasonal: boolean;
  quantity: number;
  ingredients: string[];
  roastLevel: string;
  origin: string;
  available: boolean;
  isSpecial: boolean;
}


const Categories: React.FunctionComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CoffeeFormData>({
    defaultValues: {
      name: "",
      category: "Other",
      description: "",
      price: 0,
      sizes: ["medium"],
      currency: "BDT",
      inStock: true,
      caffeineContent: 0,
      ratings: 0,
      calories: 0,
      tags: [],
      image: "",
      seasonal: false,
      quantity: 0,
      ingredients: [],
      roastLevel: "",
      origin: "",
      available: true,
      isSpecial: false
    }
  })

  const onSubmit = (data: CoffeeFormData) => {
    console.log(data);
    toast.success("Coffee added successfully!");
    // reset(); // reset form after submission
    // Here you can call your API to save the coffee
  };



  return (
    <>
      cetagorz page
    </>
  );
};

export default Categories;
