import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Loader from "../UI/Loader";

interface ImageType {
    image: string;
};

const FollowUsSection: React.FunctionComponent = () => {
    const [gallery, setGallery] = useState<ImageType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("/Follow.json");
                const data: ImageType[] = await res.json();
                setGallery(data);
            } catch (error) {
                // toast.error(error.message);
                if (error instanceof Error) {
                    toast.error(error.message);
                } else {
                    toast.error("An unknown error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <>
            {
                isLoading ?
                    <Loader />
                    :

                    <div id="followSection">
                        <div className="max-w-11/12 mx-auto text-center py-7">
                            <motion.p
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0 }}
                                className="text-[#1B1A1A]"
                            >
                                Follow Us Now
                            </motion.p>
                            <motion.h1
                                initial={{ y: 70, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0 }}
                                className="hTextShadow text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
                            >
                                Follow on Instagram
                            </motion.h1>

                            {/* image galarry  */}
                            <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 mt-5">
                                {gallery &&
                                    gallery.map((img, idx) => (
                                        <motion.div
                                            initial={{ y: 70, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            viewport={{ once: false, amount: 0 }}
                                            key={idx}
                                        >
                                            <img src={img?.image} alt="" />
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </div>

            }

        </>
    );
};

export default FollowUsSection;
