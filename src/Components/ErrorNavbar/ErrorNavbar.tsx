import React from "react";
import Logo from "../../assets/more/logo1.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorNavbar: React.FunctionComponent = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar flex justify-center shadow-sm"
            id="navError"
        >
            <div className="flex gap-x-2.5 items-center">
                <img src={Logo} alt="" className="h-10 w-10" />
                <Link to={`/`} className=" text-3xl">
                    Coffee House
                </Link>
            </div>
        </motion.div>
    );
};

export default ErrorNavbar;
