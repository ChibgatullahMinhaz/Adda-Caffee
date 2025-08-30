import React from "react";
import { ShoppingCart, Smartphone, Bike } from "lucide-react";
import { motion } from "framer-motion";

const OrderDeliveryInfo: React.FC = () => {
    const steps = [
        { icon: <ShoppingCart size={28} />, title: "Browse Menu", desc: "Choose from a wide range of drinks & snacks." },
        { icon: <Smartphone size={28} />, title: "Place Order", desc: "Easy and secure checkout process." },
        { icon: <Bike size={28} />, title: "Get Delivered", desc: "Sit back & relax while we deliver your coffee." },
    ];

    return (
        <section className="my-12">
            <motion.h2 className="text-3xl font-bold text-center mb-8"

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.5, }}
            >🚀 How It Works</motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((s, i) => (
                    <motion.div key={i} className="p-6 text-center bg-white rounded-xl shadow hover:shadow-md"
                        whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
                    >
                        <div className="flex justify-center text-[#E3B577] mb-3">{s.icon}</div>
                        <h3 className="font-semibold text-lg">{s.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OrderDeliveryInfo;
