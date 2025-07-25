import Logo from "../assets/more/logo1.png";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ once: false, amount: 0.1 }}
            className="overflow-hidden"
        >
            <motion.div className="p-4 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 items-center lg:gap-x-9 relative overflow-hidden">
                <div>
                    <img src={Logo} alt="footer logo" className="w-10 h-10" />
                    <Link to={`/`}>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="text-[#331A15] textShadow"
                        >
                            Coffee House
                        </motion.p>
                    </Link>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        viewport={{ once: false, amount: 0 }}
                        className="text-[#331A15]"
                    >
                        Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.
                    </motion.p>

                    {/* social icons */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        viewport={{ once: false, amount: 0 }}
                        className="flex justify-items-start items-center gap-x-3.5"
                    >
                        <FaFacebook size={24} />
                        <AiFillInstagram size={24} />
                        <FaLinkedin size={24} />
                        <FaTwitter size={24} />
                    </motion.div>

                    <div className="mt-5 space-y-2">
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            className="text-[#331A15] textShadow"
                        >
                            Get in Touch
                        </motion.p>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            className="text-[#331A15] flex items-center"
                        >
                            <FaPhone />
                            +88 01533 333 333
                        </motion.p>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            className="text-[#331A15] flex items-center"
                        >
                            <MdEmail />
                            coffeehouse.info@gmail.com
                        </motion.p>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            className="text-[#331A15] flex items-center"
                        >
                            <FaLocationDot />
                            72, Wall street, King Road, Dhaka
                        </motion.p>
                    </div>
                </div>
                <form>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        viewport={{ once: false, amount: 0 }}
                        className="text-[#331A15] textShadow"
                    >
                        Contact With Us
                    </motion.p>

                    <div className="flex flex-col gap-y-2 py-1.5">
                        <motion.input
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            type="text"
                            className="input outline-none focus:shadow-amber-300 focus:shadow-sm focus:border-2 focus:border-amber-500 focus:outline-none"
                            name="name"
                            placeholder="Name"
                        />
                        <motion.input
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            type="email"
                            className="input outline-none focus:shadow-amber-300 focus:shadow-sm focus:border-2 focus:border-amber-500 focus:outline-none"
                            name="email"
                            placeholder="Email"
                        />
                        <motion.textarea
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0 }}
                            name="message"
                            id=""
                            cols={10}
                            rows={5}
                            placeholder="Message"
                            className="textarea border-2 outline-none focus:shadow-amber-300 focus:shadow-sm focus:border-2 focus:border-amber-500 focus:outline-none"
                        ></motion.textarea>
                    </div>
                    <button type="submit" className="btn btn-outline hover:bg-[var(--btnColor)]">
                        Send Message
                    </button>
                </form>
            </motion.div>

            <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeIn" }}
                viewport={{ once: false, amount: 0 }}
                className="text-center copyRight p-4"
            >
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right reserved by
                        Coffee House Ltd
                    </p>
                </aside>
            </motion.div>
        </motion.div>
    );
};

export default Footer;
