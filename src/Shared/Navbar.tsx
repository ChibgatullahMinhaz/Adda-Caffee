import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/more/logo1.png";
import { motion } from "framer-motion";

// interface
interface NavLinksType {
    path: string;
    name: string;
}
const navLinks: NavLinksType[] = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/products",
        name: "Our Products",
    },
    {
        path: "/our-commitments",
        name: "Our commitment",
    },
    {
        path: "/our-story",
        name: "Our stories",
    },
];
const Navbar: React.FC = () => {
    const links = navLinks.map((link) => (
        <NavLink key={link.name} to={`${link.path}`} className={`text-md`}>
            {link.name}
        </NavLink>
    ));


    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar shadow-sm"
            id="navbar"
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  dropdown-content bg-stone-600 rounded-box z-100 mt-3 w-32 p-2"
                    >
                        {links}
                    </ul>
                </div>
                <div className="flex gap-x-2.5 items-center">
                    <img src={Logo} alt="" className="h-10 w-10" />
                    <Link to={`/`} className=" text-xl">
                        Coffee House
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 flex gap-x-5">{links}</ul>
            </div>
            
            <div className="navbar-end flex gap-x-3">
                <Link to={`signUp`}>
                    <button className=" btn bg-[#E3B577] cursor-pointer text-white">
                        SingUp
                    </button>
                </Link>

            </div>
        </motion.div>
    );
};

export default Navbar;
