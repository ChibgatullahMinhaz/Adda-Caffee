import React, { useEffect, useState } from 'react';
import type { Coffee } from '../../../../types/types';

interface CoffeeDetailsPageProps {
    data: Coffee;
}

// @ BASE URL 
const baseUrl = import.meta.env.VITE_BASE_URL

const CoffeeDetailsPage: React.FC<CoffeeDetailsPageProps> = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Select first image by default if images exist
    useEffect(() => {
        if (data.images && data.images.length > 0) {
            setSelectedImage(`${baseUrl}/uploads/${data.images[0]}`);
        }
    }, [data.images]);

    // @ convert in array from fileList for avoiding ts warning
    const filesArray = Array.from(data.images || []);
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side - Image Gallery */}
                <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
                    {/* Main Image */}
                    <div className="w-full md:w-3/4">
                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                alt="Selected coffee"
                                className="w-full h-auto object-cover rounded"
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
                                No Image
                            </div>
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex md:flex-col gap-2 mt-4 md:mt-0 md:w-1/4 overflow-x-auto md:overflow-y-auto">


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
                    <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                    <p className="text-gray-500">{data.description}</p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="font-semibold text-gray-700">Category:</p>
                            <p className="text-gray-500">{data.category}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Price:</p>
                            <p className="text-gray-500">{data.price} {data.currency}</p>
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
                            <p className="text-gray-500">{data.inStock ? "In Stock" : "Out of Stock"}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Available:</p>
                            <p className="text-gray-500">{data.available ? "Yes" : "No"}</p>
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
