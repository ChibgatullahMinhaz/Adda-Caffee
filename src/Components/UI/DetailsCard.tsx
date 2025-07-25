import CoffeeImg from "../../assets/5.png";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

const DetailsCard = () => {
  const {
    barista,
    category,
    photo,
    details,
    name,
    price,
    quantity,
    supplier,
    taste,
 
  } = useLoaderData();
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: false, amount: 0 }}
      className="bg-[#F5F4F1] rounded-box grid grid-cols-1 text-left  p-3 justify-center self-start sm:grid-cols-4 items-center"
    >
      <div className="col-span-2">
        <img
          src={photo || CoffeeImg}
          alt={name || "Coffee Image"}
          className=" max-w-sm mx-auto"
        />
      </div>
      <div className="p-4 text-left col-span-2">
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
          className="hTextShadow text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
        >
        Niceties
        </motion.h1>
        <motion.h2
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          <span className="text-xl font-semibold">Name:</span> {name}
        </motion.h2>
        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Price: $</span>
          {price}
        </motion.p>


        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Barista:</span> {barista}
        </motion.p>

        

        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Category:</span> {category}
        </motion.p>


        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Supplier:</span> {supplier}
        </motion.p>
        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Taste:</span> {taste}
        </motion.p>

        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Quantity:</span> {quantity}
        </motion.p>

        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <span className="text-xl font-semibold">Details:</span> {details}
        </motion.p>


      </div>
    </motion.div>
  );
};

export default DetailsCard;
