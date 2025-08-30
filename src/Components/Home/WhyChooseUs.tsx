import React from "react";
import { Coffee, Leaf, Home, Truck } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs: React.FC = () => {
    const features = [
        { icon: <Coffee size={30} />, title: "Freshly Brewed", desc: "Every cup brewed with love and care." },
        { icon: <Leaf size={30} />, title: "Organic Beans", desc: "We use 100% organic & premium beans." },
        { icon: <Home size={30} />, title: "Cozy Ambience", desc: "Relax, work, or meet friends in comfort." },
        { icon: <Truck size={30} />, title: "Fast Delivery", desc: "Hot coffee delivered at your doorstep." },
    ];

    return (
        <section className="my-12 text-center">
            <motion.h2 className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.5, }}
            >☕ Why Choose Us</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="p-6 bg-white rounded-xl shadow cursor-pointer"
                        whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
                    >
                        <div className="text-[#E3B577] mb-3 flex justify-center">{f.icon}</div>
                        <h3 className="font-semibold text-lg">{f.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
