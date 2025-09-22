import { lazy, Suspense } from "react";
import Loading from "../../Components/ComponentLoading/Loading";

const FollowUsSection = lazy(() => import("../../Components/FollowUsSection/FollowUsSection"));
const Hero = lazy(() => import("../../Components/Hero/Hero"));
const AboutUs = lazy(() => import("../../Components/Home/AboutUs"));
const FeaturedProducts = lazy(() => import("../../Components/Home/FeaturedProducts"));
const JoinAsRider = lazy(() => import("../../Components/Home/JoinAsRider"));
const OrderDeliveryInfo = lazy(() => import("../../Components/Home/OrderDeliveryInfo"));
const SpecialOffer = lazy(() => import("../../Components/Home/SpecialOffer"));
const WhyChooseUs = lazy(() => import("../../Components/Home/WhyChooseUs"));
const OurProductSection = lazy(() => import("../../Components/OurProductSection/OurProductSection"));
const SubHeader = lazy(() => import("../../Components/SubHeader/SubHeader"))


const Home: React.FC = () => {
    return (
        <>
            <Suspense fallback={
                <div className="max-h-screen h-[400px]">
                    <Loading />
                </div>
            }>
                <Hero></Hero>
            </Suspense>

            <Suspense fallback={
                <div className="max-h-screen lg:h-[265px]">
                    <Loading />
                </div>
            }>
                <SubHeader></SubHeader>
            </Suspense>
            <Suspense fallback={<Loading />}>
                <OurProductSection></OurProductSection>
            </Suspense>
            <section className="max-w-[90%] mx-auto">
                <Suspense fallback={<Loading />}>
                    <FeaturedProducts />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <WhyChooseUs />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <OrderDeliveryInfo />
                </Suspense>

            </section>

            <section className="max-w-[95%] mx-auto">
                <Suspense fallback={<Loading />}>
                    <SpecialOffer />
                </Suspense>
            </section>
            <Suspense fallback={<Loading />}><FollowUsSection></FollowUsSection></Suspense>
            <section className="max-w-7xl mx-auto">
                <Suspense fallback={<Loading />}>
                    <AboutUs />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <JoinAsRider />
                </Suspense>
            </section>
        </>
    );
};

export default Home;