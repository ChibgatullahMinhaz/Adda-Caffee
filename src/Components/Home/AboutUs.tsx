import React from "react";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
    return (
        <section className="my-12 max-w-3xl  mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.2, duration: 0.5, }}
                    src="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/7e/c1/88/cafeteria-armenia.jpg"
                    alt="Coffee House"
                    className="rounded-2xl shadow-lg max-w-sm hidden sm:block"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.2, duration: 0.5, }}
                >
                    <h2 className="text-3xl font-bold mb-4">☕ About Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Since 2015, Adda Coffee House has been serving freshly brewed coffee made from
                        premium organic beans. We believe coffee is more than just a drink — it’s an
                        experience of warmth, joy, and connection. Our cozy ambience makes us the
                        perfect place to relax, work, or catch up with friends.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
