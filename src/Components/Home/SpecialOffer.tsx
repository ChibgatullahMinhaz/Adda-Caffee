import React from "react";
import { motion } from "framer-motion";
const SpecialOffer: React.FC = () => {
    return (
        <motion.section className="bg-[#392928] text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-lg text-center my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5, }}
        >
            <h3 className="text-2xl font-bold">🔥 Special Offer</h3>
            <p className="mt-3 text-lg">Get 20% Off on Cold Brew Today!</p>
            <button className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100">
                Order Now
            </button>
        </motion.section>
    );
};

export default SpecialOffer;
