import { useEffect } from "react";
import { motion } from "framer-motion";
import ErrorImage from "../assets/404/404.gif";
import ScrollButton from "../Components/UI/ScrollButton";
import BackButton from "../Components/UI/BackButton";
import Footer from "../Shared/Footer";
import ErrorNavbar from "../Components/ErrorNavbar/ErrorNavbar";



const ErrorLayout: React.FunctionComponent = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <>
            <ScrollButton></ScrollButton>
            <header>
                <nav>
                    <ErrorNavbar></ErrorNavbar>
                </nav>
            </header>
            <main className="mt-10">
                <div className="flex justify-center items-center">
                    <BackButton></BackButton>
                </div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="flex justify-center items-center p-0 m-0"
                >
                    <img src={ErrorImage} alt="404 not found pages" />
                </motion.div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default ErrorLayout;
