import React, { useContext } from "react";
import CoffeeImg from "../../assets/5.png";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { price, name, _id, photo, barista } = coffee;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    if (user) {
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            fetch(`https://coffee-server-lyart.vercel.app/coffees/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
                    icon: "success",
                  });
                  const remainingCoffee = coffees.filter(
                    (cof) => cof._id !== id
                  );
                  setCoffees(remainingCoffee);
                }
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your coffee is safe 🙂",
              icon: "error",
            });
          }
        });
    } else {
      navigate("/signin");
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: false, amount: 0 }}
      className="bg-[#F5F4F1] rounded-box grid grid-cols-1  p-3 justify-center sm:grid-cols-4 items-center"
    >
      <div>
        <img
          src={photo || CoffeeImg}
          alt={name || "Coffee Image"}
          className=" w-sm mx-auto col-span-1"
        />
      </div>
      <div className="p-4 text-center sm:text-left col-span-2">
        <h2>
          <span className="text-xl font-semibold">Name:</span> {name}
        </h2>
        <p>
          {" "}
          <span className="text-xl font-semibold">Price: $</span>
          {price}
        </p>
        <p>
          {" "}
          <span className="text-xl font-semibold">Barista:</span> {barista}
        </p>
      </div>
      <div className="sm:col-span-1 flex justify-center items-center sm:flex-col gap-4">
        <Link
          to={`/coffeeDetails/${_id}`}
          className=" cursor-pointer bg-[var(--btnColor)] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <FaEye />
        </Link>
        <Link
          to={`/updateCoffee/${_id}`}
          className=" cursor-pointer bg-[#3c393b] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <FaPen />
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className=" cursor-pointer bg-[#ea4744] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <MdDelete />
        </button>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
