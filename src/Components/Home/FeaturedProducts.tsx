import { useQuery } from '@tanstack/react-query';
import React from 'react';
import type { Coffee } from '../../types/types';
import { getFeaturedCoffee } from '../../api/featuredCoffee';
import { motion } from "framer-motion";
import { Link } from 'react-router';

const FeaturedProducts: React.FunctionComponent = () => {
    const { data, isPending, error } = useQuery<Coffee[], Error>({
        queryKey: ['featured'],
        queryFn: getFeaturedCoffee,
    });

    if (isPending) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data)
    return (
        <div className="my-10">
            {/* 🔹 Section Title */}

            <motion.h1
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0 }}
                className="hTextShadow text-center my-5 sm:my-10 text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
            >
                Featured Products
            </motion.h1>


            {/* 🔹 Grid of Cards */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.map((coffee) => (
                    <Link
                        to={`/coffee/${coffee._id}`} // ✅ Dynamic route
                        key={coffee._id}
                        className="block group" // পুরো কার্ড clickable
                    >
                        <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition group-hover:scale-[1.02]">
                            {/* Image Section */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={coffee.images?.[0] ? `${import.meta.env.VITE_BASE_URL}/uploads/${coffee.images[0]}` : '/placeholder.jpg'}
                                    alt={coffee.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Rating */}
                                <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
                                    ⭐ {coffee.ratings}
                                </div>
                                {/* Stock */}
                                <div
                                    className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-lg shadow ${coffee.inStock
                                        ? 'bg-green-500 text-white'
                                        : 'bg-red-500 text-white'
                                        }`}
                                >
                                    {coffee.inStock ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-3 flex flex-col flex-1">
                                {/* Name & Price */}
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-lg truncate">{coffee.name}</h3>
                                    <span className="text-amber-600 font-semibold">
                                        {coffee.price} {coffee.currency}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 line-clamp-1 mb-2">
                                    {coffee.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {coffee.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className=" border border-[#EFC879] text-[#EFC879] text-xs px-2 py-1 rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-auto flex gap-2">
                                    <button
                                        className="flex-1 bg-[#4a3939] hover:bg-[#7a6060] text-white py-2 rounded-lg text-sm font-semibold transition"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className="flex-1 bg-[#EFC879] hover:bg-amber-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Buy Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;