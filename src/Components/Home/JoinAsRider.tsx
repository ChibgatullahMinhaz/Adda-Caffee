import React from "react";
import { motion } from "framer-motion";

const JoinAsRider: React.FC = () => {
    return (
        <motion.section className="bg-[#392928] text-white p-10 rounded-2xl max-w-4xl mx-auto shadow-lg text-center my-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5, }}
        >
            <h2 className="text-3xl font-bold">🚴 Become a Rider</h2>
            <p className="mt-3 text-lg">
                Join our delivery team and be part of Adda Coffee House family. Flexible hours,
                great perks, and lots of coffee!
            </p>
            <button className="mt-5 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100">
                Apply Now
            </button>
        </motion.section>
    );
};

export default JoinAsRider;
