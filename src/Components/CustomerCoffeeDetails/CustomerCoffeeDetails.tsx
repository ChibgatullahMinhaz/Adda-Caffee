import React, { useEffect, useState } from 'react';
import type { Coffee } from '../../types/types';
import { motion } from 'framer-motion';

interface CustomerCoffeeDetailsProps {
    data: Coffee;
}

// @ BASE URL
const baseUrl = import.meta.env.VITE_BASE_URL;

const CustomerCoffeeDetails: React.FC<CustomerCoffeeDetailsProps> = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Select first image by default
    useEffect(() => {
        if (data.images && data.images.length > 0) {
            setSelectedImage(`${baseUrl}/uploads/${data.images[0]}`);
        }
    }, [data.images]);

    const filesArray = Array.from(data.images || []);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side - Image Gallery */}
                <div className="md:w-1/2 flex flex-col md:flex-col gap-4">
                    {/* Main Image */}
                    <div className="w-full md:w-3/4 flex justify-center items-center">
                        {selectedImage ? (
                            <motion.img
                                key={selectedImage}
                                src={selectedImage}
                                alt={data.name}
                                className="w-full h-[300px] object-cover rounded"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
                                No Image
                            </div>
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex  gap-2 mt-4 md:mt-0 md:w-1/4">
                        {filesArray.map((img, index) => {
                            const fullUrl = `${baseUrl}/uploads/${img}`;
                            return (
                                <img
                                    key={index}
                                    src={fullUrl}
                                    alt={`coffee-${index}`}
                                    className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${selectedImage === fullUrl ? 'border-blue-500' : 'border-gray-200'
                                        }`}
                                    onClick={() => setSelectedImage(fullUrl)}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Right Side - Info */}
                <div className="md:w-1/2 flex flex-col gap-4">
                    {/* Name */}
                    <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>

                    {/* Price */}
                    <p className="text-2xl text-amber-600 font-semibold">{data.price} {data.currency}</p>

                    {/* Description */}
                    <p className="text-gray-600 mt-2">{data.description}</p>

                    {/* Rating & Stock */}
                    <div className="flex items-center gap-4 mt-2">
                        <span className="bg-yellow-400 text-white px-2 py-1 rounded">⭐ {data.ratings}</span>
                        <span className={`px-2 py-1 rounded ${data.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                            {data.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    {/* Sizes */}
                    <div className="mt-2">
                        <p className="font-semibold text-gray-700">Sizes:</p>
                        <p className="text-gray-600">{data.sizes.join(', ')}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.tags?.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Optional Info */}
                    <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600 text-sm">
                        <div>
                            <p className="font-semibold">Ingredients:</p>
                            <p>{data.ingredients.join(', ')}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Calories:</p>
                            <p>{data.calories}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Caffeine:</p>
                            <p>{data.caffeineContent} mg</p>
                        </div>
                        <div>
                            {data.seasonal && <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">Seasonal</span>}
                            {data.isSpecial && <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded ml-2">Special</span>}
                        </div>
                    </div>

                    {/* Add to Cart / Buy */}
                    <div className="flex gap-4 mt-6">
                        <button className="flex-1 bg-[#372727] hover:bg-[#4a3939] text-white py-2 rounded-lg font-semibold transition">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-[#EFC879] hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCoffeeDetails;
