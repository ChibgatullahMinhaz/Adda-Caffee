import { Eye, Pencil, Trash2 } from "lucide-react";
import CoffeeCard from "../../Components/UI/CoffeeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchCoffee } from "../../../../api/FetchCoffee";
import { toast } from "react-toastify";
import type { Coffee } from "../../../../types/types";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Loader from "../../../../Components/UI/Loader";
import axiosSecureInstance from "../../../../api/axiosSecureInstance";
import Swal from "sweetalert2";
import { useMemo, useEffect } from "react";

const Allorder = () => {

  const navigate = useNavigate();

  const { data, error, refetch, isLoading } = useQuery<Coffee[], Error>({
    queryKey: ["all-coffee"],
    queryFn: fetchCoffee,
  });

  const coffeeList = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);


  // table rows memoized
  const tableRows = useMemo(() => {

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


    return coffeeList.map((coff, idx) => (
      <motion.tr
        key={coff._id} // unique key
        className="bg-base-200 hover:cursor-pointer hover:bg-base-100 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <th>{idx + 1}</th>
        <td>{coff.name}</td>
        <td>{coff.category}</td>
        <td>{coff.price}</td>
        <td>{coff.sizes.join(", ")}</td>
        <td>{coff.quantity}</td>
        <td>{coff.available ? "Available" : "Not Available"}</td>
        <td className="flex gap-x-2">
          <button
            onClick={() => handleView(coff._id)}
            className="btn btn-sm btn-info text-white flex items-center"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => handleEdit(coff._id)}
            className="btn btn-sm btn-warning text-white flex items-center"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => handleDelete(coff._id)}
            className="btn btn-sm btn-error text-white flex items-center"
          >
            <Trash2 size={16} />
          </button>
        </td>
      </motion.tr>
    ));
  }, [coffeeList, navigate, refetch]);

  // card layout memoized for mobile
  const productCards = useMemo(() => {
    return coffeeList.map((coff) => (
      <div key={coff._id} className="card bg-base-200 shadow-md rounded-xl p-4">
        <CoffeeCard coffee={coff} refetch={refetch} />
      </div>
    ));
  }, [coffeeList, refetch]);


  // show toast only once on error
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  return (
    <div>
      all orders
      {coffeeList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m0 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! No data found</h2>
          <p className="text-gray-500 text-center max-w-sm">
            It looks like there is nothing here yet. Please check back later or try a different filter.
          </p>
          <button
            onClick={() => refetch()}
            className="mt-6 px-6 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Refresh
          </button>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto hidden sm:block">
            <table className="table">
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
              <tbody>{tableRows}</tbody>
            </table>
          </div>
          <div className="grid gap-4 sm:hidden mt-4">{productCards}</div>
        </>
      )}
    </div>
  );
};

export default Allorder;
