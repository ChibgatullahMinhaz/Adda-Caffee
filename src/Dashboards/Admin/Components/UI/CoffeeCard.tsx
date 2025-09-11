import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import type { Coffee } from '../../../../types/types';
import { useMatch, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axiosSecureInstance from '../../../../api/axiosSecureInstance';
// @ BASE URL 
const baseUrl = import.meta.env.VITE_BASE_URL

interface CoffeeCardProps {
    coffee: Coffee;
    refetch: () => void
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, refetch }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();

    const images = useMemo(() => {
        return coffee.images ?? []
    }, [coffee.images]) //@ pass images or empty array


    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    // Select first image by default if images exist
    useEffect(() => {
        if (images && images.length > 0) {
            setSelectedImage(`${baseUrl}/uploads/${images[currentIndex]}`);
        }
    }, [images, currentIndex]);


    // delete coffee
    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
            try {
                const res = await axiosSecureInstance.delete(`/coffees/${id}`);
                if (res.data) {
                    toast.success("Deleted Successfully!");
                    refetch();
                }
            } catch (error) {
                if (error instanceof Error) toast.error(error.message);
                else toast.error("An unexpected error occurred");
            }
        }
    };

    const handleView = (id: string) => navigate(`/admin-dashboard/products/details/${id}`);
    const handleEdit = (id: string) => {
       
        navigate(`/admin-dashboard/products/update/${id}`);
    };



    return (
        <section className="border p-4 rounded-lg shadow-md">

            <div className="relative w-full h-40 md:h-52 mb-3">
                {selectedImage ? (
                    <>
                        <img
                            src={selectedImage}
                            alt={coffee.name}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-1 rounded-full">
                            &lt;
                        </button>
                        <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-1 rounded-full">
                            &gt;
                        </button>

                    </>
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        No Image
                    </div>
                )}
            </div>

            {/* Coffee Info */}
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold">{coffee.name}</h2>
                <p className="text-sm text-gray-500">{coffee.category}</p>
                <p>
                    <span className="font-semibold">Price:</span> {coffee.price} BDT
                </p>
                <p>
                    <span className="font-semibold">Sizes:</span> {coffee.sizes.join(', ')}
                </p>
                <p>
                    <span className="font-semibold">Available:</span> {coffee.available ? '✅ Yes' : '❌ No'}
                </p>
                <p>
                    <span className="font-semibold">Origin:</span> {coffee.origin}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3">
                <button onClick={() => handleView(coffee._id)} className="btn btn-sm btn-info text-white flex-1">
                    <Eye size={16} />
                </button>
                <button onClick={() => handleEdit(coffee._id)} className="btn btn-sm btn-warning text-white flex-1">
                    <Pencil size={16} />
                </button>
                <button onClick={() => handleDelete(coffee._id)} className="btn btn-sm btn-error text-white flex-1">
                    <Trash2 size={16} />
                </button>
            </div>
        </section>
    );
};

export default CoffeeCard;
