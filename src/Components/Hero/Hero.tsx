import { motion } from "framer-motion";
import { Link } from "react-router";
const Hero: React.FC = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0 }}
            className="hero  md:h-[400px] overflow-hidden"
            id="hero"
            
        >
            {/* <div className="hero-overlay"></div> */}
            <div className="hero-content text-neutral-content sm:text-justify  max-w-lg mx-auto ">
                <div className=" ">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0 }}
                        className="mb-5 text-5xl font-bold"
                    >
                        Would you like a Cup of Delicious Coffee?
                    </motion.h1>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0 }}
                        className="mb-5"
                    >
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the
                        nostalgia back!! Your companion of every moment!!! Enjoy the
                        beautiful moments and make them memorable.
                    </motion.p>
                    <Link to={`/our-products`} >
                    <button className="btn animate-bounce bg-[var(--btnColor)] hover:border-1 hover:border-white hover:text-white hover:bg-transparent">
                       Order Now
                    </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
