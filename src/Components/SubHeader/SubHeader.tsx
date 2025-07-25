import Aroma from "../../assets/icons/1.png";
import Grades from "../../assets/icons/3.png";
import Quality from "../../assets/icons/2.png";
import Rosting from "../../assets/icons/4.png";
import { motion } from "framer-motion";

const SubHeader: React.FunctionComponent = () => {
    return (
        <div className="bg-[#ECEAE3] overflow-hidden">
            <div className="max-w-9/12 mx-auto grid grid-cols-1 md:text-left text-center content-center justify-center items-center md:grid-cols-3 lg:grid-cols-4 ">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-3"
                >
                    <div className="flex justify-center  sm:justify-start">
                        <img
                            src={Aroma}
                            alt="You will definitely be a fan of the design & aroma of your coffee"
                        />
                    </div>
                    <h1 className="text-2xl">Awesome Aroma</h1>
                    <p>
                        You will definitely be a fan of the design & aroma of your coffee
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-3"
                >
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src={Quality}
                            alt="We served the coffee to you maintaining the best quality"
                        />
                    </div>
                    <h1 className="text-2xl">High Quality</h1>
                    <p>We served the coffee to you maintaining the best quality </p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-3"
                >
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src={Grades}
                            alt="The coffee is made of the green coffee beans which you will love"
                        />
                    </div>
                    <h1 className="text-2xl">Pure Grades</h1>
                    <p>
                        The coffee is made of the green coffee beans which you will love{" "}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-3"
                >
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src={Rosting}
                            alt="Your coffee is brewed by first roasting the green coffee beans"
                        />
                    </div>
                    <h1 className="text-2xl">Proper Roasting</h1>
                    <p>Your coffee is brewed by first roasting the green coffee beans </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SubHeader;
