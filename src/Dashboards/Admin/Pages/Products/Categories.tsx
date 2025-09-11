import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { categoriesType } from '../../../../types/types';
import useAddCategory from '../../../../Hook/useAddCategory';


const Categories: React.FunctionComponent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<categoriesType>();
  const addCategory = useAddCategory()

  const onSubmit: SubmitHandler<categoriesType> = (formData) => {
    // @ converting string to array without falsy values.
    // const categories = formData.categories.split(',').map(c => c.trim()).filter(Boolean);
    const payload = { categories: formData.categories.trim() };

    addCategory.mutate(payload, {
      onSuccess: () => {
        reset();
      }
    })
  }
  return (
    <>
      <h1 className='font-bold  text-center text-shadow-green-800'>Add Categories</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex justify-center flex-col space-y-2.5'>
        <label>Categories (only on in at a time )</label>
        <input
          type="text"
          className='p-2 border-2 border-green-800 rounded-2xl block '
          {...register('categories', { required: 'Please enter at least one category' })}
          placeholder="Espresso"
        />
        {errors.categories && <p className="text-red-500">{errors.categories.message}</p>}

        <button
          type="submit"
          disabled={addCategory.isPending}
          className='btn bg-green-800 text-base-300 cursor-pointer'
        >
          {addCategory.isPending ? 'Adding...' : 'Add Category'}
        </button>      </form>
    </>
  );
};

export default Categories;
