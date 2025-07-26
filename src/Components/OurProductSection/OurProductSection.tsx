import { motion } from "framer-motion";

const OurProductSection: React.FunctionComponent = () => {

    return (
        <div id="productSection" className="my-16  ">
            <div className="max-w-11/12  mx-auto text-center py-6 md:py-16">
                <motion.p
                    initial={{ x: -70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0 }}
                    className="text-[#1B1A1A]"
                >
                    --- Sip & Savor ---
                </motion.p>
                <motion.h1
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0 }}
                    className="hTextShadow text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
                >
                    Our Popular Products
                </motion.h1>

                {/* showing coffees */}
                {/* <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 max-w-11/12 mx-auto py-6 space-y-4 lg:gap-4">


                    {allCoffees.length == 0 ? <Loader></Loader> :
                        allCoffees.map((coffee, idx) => (
                            <CoffeeCard
                                key={idx}
                                setCoffees={setCoffees}
                                coffee={coffee}
                                coffees={coffees}
                            ></CoffeeCard>
                        ))
                    }

                    {(allCoffees.length == 0
                        && !loading) &&
                        <NoCoffeeFound />}
                </div> */}
            </div>
        </div>
    );
};

export default OurProductSection;
