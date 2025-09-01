import { Eye, Pencil, Trash2 } from "lucide-react";
import CoffeeCard from "../../Components/UI/CoffeeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchCoffee } from "../../../../api/FetchCoffee";
import { toast } from "react-toastify";

interface Coffee {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  available: boolean;
  sizes: string[];
  currency: string;
  inStock: boolean;
  caffeineContent: number;
  createdAt: Date;
  updatedAt: Date;
  calories: number;
  tags: string[];
  seasonal: boolean;
  quantity: number;
  ingredients: string[];
  roastLevel: string;
  origin: string;
  isSpecial: boolean;
}

const ProductManagements = () => {
  const { data = [], error } = useQuery<Coffee[], Error>({
    queryKey: ['all-coffee'],
    queryFn: fetchCoffee
  })
  if (error) {
    toast.error(error.message)
  }
  
  return (
    <div>
      {data.length == 0 ?

        <>
          <p>not found</p>
        </>
        :
        <>
          <div className="overflow-x-auto hidden sm:block">
            <table className="table">
              {/* head */}
              <thead className="bg-[var(--primaryColor)] text-orange-200 font-bold">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Sizes</th>
                  <th>Quantity</th>
                  <th>Available</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  data && data.length !== 0 && data.map((coff, idx) => (
                    <tr key={idx} className="bg-base-200 hover:cursor-pointer hover:bg-base-100 transition-all duration-300">
                      <th>{idx + 1}</th>
                      <td>{coff.name}</td>
                      <td>{coff.category}</td>
                      <td>{coff.price}</td>
                      <td>{coff.sizes.join(", ")}</td>
                      <td>{coff.quantity}</td>
                      <td>{coff.available === true ? 'Available' : 'Not Available'}</td>
                      <td className="flex gap-x-2">
                        {/* View Icon */}
                        <button className="btn btn-sm btn-info text-white flex items-center">
                          <Eye size={16} />
                        </button>
                        {/* Update Icon */}
                        <button className="btn btn-sm btn-warning text-white flex items-center">
                          <Pencil size={16} />
                        </button>
                        {/* Delete Icon */}
                        <button className="btn btn-sm btn-error text-white flex items-center ">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          {/* card layout for sm device */}
          <div className="grid gap-4 sm:hidden mt-4">
            {data.map((coff) => (
              <div
                key={coff._id}
                className="card bg-base-200 shadow-md rounded-xl p-4"
              >
                <CoffeeCard coffee={coff} />
              </div>
            ))}
          </div>
        </>
      }

    </div>
  );
};

export default ProductManagements;