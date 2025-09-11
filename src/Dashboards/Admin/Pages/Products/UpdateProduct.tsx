import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import type { Coffee } from '../../../../types/types';
import { getCoffeeDetailsAdminSide } from '../../../../api/getCoffeeDetails';
import { updateCoffee } from '../../../../api/updateCoffee';
import Loader from '../../../../Components/UI/Loader';
import { toast } from 'react-toastify';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ALLOWED_SIZES, categories } from '../../../../javascript/categoryObject';

// ✅ New type for form data
type CoffeeFormData = Omit<Coffee, 'tags' | 'ingredients'> & {
  tags: string;         // comma-separated string
  ingredients: string;  // comma-separated string
  sizes: string[];      // checkbox array
  images?: FileList | null;
};

const UpdateProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const { data, error, refetch, isLoading } = useQuery<Coffee, Error>({
    queryKey: ['coffee-details', productId],
    queryFn: () => {
      if (!productId) throw new Error('Product ID is missing!');
      return getCoffeeDetailsAdminSide(productId);
    },
    enabled: !!productId,
  });

  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      if (!productId) throw new Error('Missing Product id');
      return updateCoffee(productId, formData);
    },
    onSuccess: () => toast.success('Product successfully updated!'),
    onError: () => toast.error('Failed to update product'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CoffeeFormData>();

  // ✅ Reset form when data arrives
  useEffect(() => {
    if (data) {
      reset({
        ...data,
        tags: Array.isArray(data.tags) ? data.tags.join(',') : data.tags || '',
        ingredients: Array.isArray(data.ingredients) ? data.ingredients.join(',') : data.ingredients || '',
        sizes: data.sizes || [],
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<CoffeeFormData> = (formValues) => {
    const formData = new FormData();
    // ✅ Validate max 5 images
    if (formValues.images && formValues.images.length > 5) {
      toast.error("You can upload a maximum of 5 images");
      return; // prevent submission
    }
    const tags = formValues.tags.split(',').map(t => t.trim()).filter(Boolean);
    const ingredients = formValues.ingredients.split(',').map(i => i.trim()).filter(Boolean);

    if (formValues.images && formValues.images.length > 0) {
      Array.from(formValues.images).forEach(file => formData.append('images', file));
    }

    formData.append('name', formValues.name);
    formData.append('category', formValues.category);
    formData.append('description', formValues.description);
    formData.append('price', String(formValues.price));
    formValues.sizes.forEach(size => formData.append('sizes', size));
    formData.append('currency', formValues.currency);
    formData.append('inStock', String(formValues.inStock));
    formData.append('caffeineContent', String(formValues.caffeineContent));
    formData.append('calories', String(formValues.calories));
    formData.append('tags', tags.join(','));
    formData.append('ingredients', ingredients.join(','));
    formData.append('roastLevel', formValues.roastLevel);
    formData.append('origin', formValues.origin);
    formData.append('available', String(formValues.available));
    formData.append('isSpecial', String(formValues.isSpecial));
    formData.append('seasonal', String(formValues.seasonal));
    formData.append('quantity', String(formValues.quantity));

    mutation.mutate(formData);
  };

  if (error) {
    toast.error(error.message);
    return <div>Error fetching coffee details.</div>;
  }
  if (isLoading) return <Loader />;
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m0 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">Oops! No Coffee Found</h2>
        <p className="text-gray-500 text-center max-w-md mb-6">
          The coffee details you are looking for are not available. It might have been removed or the ID is incorrect. You can try refreshing the page.
        </p>
        <button onClick={() => refetch()} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-4xl">Update Coffee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input type="text" {...register('name', { required: 'Name is required' })} className="input w-full" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="label">Category</label>
          <select {...register('category')} className="select select-bordered w-full">
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea {...register('description')} className="textarea textarea-bordered w-full" />
        </div>

        {/* Price */}
        <div>
          <label className="label">Price</label>
          <input type="number" {...register('price', { valueAsNumber: true })} className="input w-full" />
        </div>

        {/* Sizes */}
        <div>
          <label className="label">Sizes</label>
          <div className="flex gap-3 flex-wrap">
            {ALLOWED_SIZES.map(size => (
              <label key={size} className="flex items-center gap-1">
                <input type="checkbox" value={size} {...register('sizes')} className="checkbox" />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Currency */}
        <div>
          <label className="label">Currency</label>
          <select {...register('currency')} className="select select-bordered w-full">
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
        </div>

        {/* In Stock */}
        <div>
          <label className="label cursor-pointer flex items-center gap-2">
            <input type="checkbox" {...register('inStock')} className="checkbox" /> In Stock
          </label>
        </div>

        {/* Caffeine Content */}
        <div>
          <label className="label">Caffeine Content (mg)</label>
          <input type="number" {...register('caffeineContent', { valueAsNumber: true })} className="input w-full" />
        </div>

        {/* Calories */}
        <div>
          <label className="label">Calories</label>
          <input type="number" {...register('calories', { valueAsNumber: true })} className="input w-full" />
        </div>

        {/* Tags */}
        <div>
          <label className="label">Tags (comma separated)</label>
          <input type="text" {...register('tags')} className="input w-full" placeholder="strong, cold, popular" />
        </div>

        {/* Ingredients */}
        <div>
          <label className="label">Ingredients (comma separated)</label>
          <input type="text" {...register('ingredients')} className="input w-full" placeholder="coffee beans, milk, sugar" />
        </div>

        {/* Roast Level */}
        <div>
          <label className="label">Roast Level</label>
          <select {...register('roastLevel')} className="select select-bordered w-full">
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        {/* Origin */}
        <div>
          <label className="label">Origin</label>
          <input type="text" {...register('origin')} className="input w-full" placeholder="Ethiopia" />
        </div>

        {/* Available */}
        <div>
          <label className="label cursor-pointer flex items-center gap-2">
            <input type="checkbox" {...register('available')} className="checkbox" /> Available
          </label>
        </div>

        {/* Special */}
        <div>
          <label className="label cursor-pointer flex items-center gap-2">
            <input type="checkbox" {...register('isSpecial')} className="checkbox" /> Mark as Special
          </label>
        </div>

        {/* Seasonal */}
        <div>
          <label className="label cursor-pointer flex items-center gap-2">
            <input type="checkbox" {...register('seasonal')} className="checkbox" /> Seasonal Product
          </label>
        </div>

        {/* Quantity */}
        <div>
          <label className="label">Quantity</label>
          <input type="number" {...register('quantity', { valueAsNumber: true })} className="input w-full" />
        </div>

        {/* Images */}
        <div>
          <label className="label">Upload New Images (optional)</label>
          <input type="file" {...register('images')} className="file-input w-full" multiple />
        </div>

        {/* Submit */}
        <div>
          <button type="submit" className="btn btn-primary w-full" disabled={mutation.isPending}>
            {mutation.isPending ? 'Updating...' : 'Update Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;


