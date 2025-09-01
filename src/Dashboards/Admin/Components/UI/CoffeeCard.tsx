import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react';
import type { Coffee } from '../../../../types/types';


interface CoffeeCardProps  {
    coffee: Coffee
}

const CoffeeCard: React.FunctionComponent<CoffeeCardProps > = ({ coffee}) => {
    return (
        <section>

            <div className="flex items-center gap-4">
                <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                    <h2 className="text-lg font-bold">{coffee.name}</h2>
                    <p className="text-sm text-gray-500">{coffee.category}</p>
                </div>
            </div>

            <div className="mt-3 text-sm space-y-1">
                <p>
                    <span className="font-semibold">Price:</span> {coffee.price}{" "}
                    BDT
                </p>
                <p>
                    <span className="font-semibold">Sizes:</span>{" "}
                    {coffee.sizes.join(", ")}
                </p>
                <p>
                    <span className="font-semibold">Available:</span>{" "}
                    {coffee.available ? "✅ Yes" : "❌ No"}
                </p>
                <p>
                    <span className="font-semibold">Origin:</span>{" "}
                    {origin}
                </p>
            </div>

            <div className="flex gap-2 mt-3">
                <button className="btn btn-sm btn-info text-white flex-1">
                    <Eye size={16} />
                </button>
                <button className="btn btn-sm btn-warning text-white flex-1">
                    <Pencil size={16} />
                </button>
                <button className="btn btn-sm btn-error text-white flex-1">
                    <Trash2 size={16} />
                </button>
            </div>

        </section>
    );
};

export default CoffeeCard;