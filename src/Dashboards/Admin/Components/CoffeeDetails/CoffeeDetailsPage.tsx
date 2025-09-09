import React from 'react';
import type { Coffee } from '../../../../types/types';
interface CoffeeDetailsPageProps {
    data: Coffee
}
const CoffeeDetailsPage: React.FC<CoffeeDetailsPageProps> = ({ data }) => {
    console.log(data)
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side - Image */}
                <div className="md:w-1/2 flex justify-center items-start">
                    {data?.images?.map((img, index) => (
                        <img
                            key={index}
                            src={`http://localhost:5000${img}`}
                            alt={`coffee-${index}`}
                            className="w-32 h-32 object-cover rounded"
                        />
                    ))}
                </div>

                {/* Right Side - Info */}
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                    <p className="text-gray-500">{data.description}</p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="font-semibold text-gray-700">Category:</p>
                            <p className="text-gray-500">{data.category}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Price:</p>
                            <p className="text-gray-500">
                                {data.price} {data.currency}
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Origin:</p>
                            <p className="text-gray-500">{data.origin}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Sizes:</p>
                            <p className="text-gray-500">{data.sizes.join(", ")}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Ingredients:</p>
                            <p className="text-gray-500">{data.ingredients.join(", ")}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Tags:</p>
                            <p className="text-gray-500">{data.tags.join(", ")}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Calories:</p>
                            <p className="text-gray-500">{data.calories}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Caffeine:</p>
                            <p className="text-gray-500">{data.caffeineContent} mg</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Stock:</p>
                            <p className="text-gray-500">
                                {data.inStock ? "In Stock" : "Out of Stock"}
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Available:</p>
                            <p className="text-gray-500">
                                {data.available ? "Yes" : "No"}
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Special:</p>
                            <p className="text-gray-500">{data.isSpecial ? "Yes" : "No"}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Seasonal:</p>
                            <p className="text-gray-500">{data.seasonal ? "Yes" : "No"}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Roast Level:</p>
                            <p className="text-gray-500">{data.roastLevel}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Quantity:</p>
                            <p className="text-gray-500">{data.quantity}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Ratings:</p>
                            <p className="text-gray-500">{data.ratings}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Created At:</p>
                            <p className="text-gray-500">{new Date(data.createdAt).toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Updated At:</p>
                            <p className="text-gray-500">{new Date(data.updatedAt).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetailsPage;