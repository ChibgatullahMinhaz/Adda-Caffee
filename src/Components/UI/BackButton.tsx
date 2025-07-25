import React from 'react';
import { Link } from 'react-router';
import {motion} from 'framer-motion'
import { IoMdArrowBack } from 'react-icons/io';
const BackButton = () => {
    return (
        <>
              <Link to={`/`}>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              className=" cursor-pointer text-xl text-shadow-2xs flex items-center btn bg-transparent my-1.5 hover:bg-[var(--btnColor)]"
            >
              <IoMdArrowBack />
              Back To Home
            </motion.button>
          </Link>
        </>
    );
};

export default BackButton;