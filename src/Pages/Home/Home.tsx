import FollowUsSection from "../../Components/FollowUsSection/FollowUsSection";
import Hero from "../../Components/Hero/Hero";
import AboutUs from "../../Components/Home/AboutUs";
import FeaturedProducts from "../../Components/Home/FeaturedProducts";
import JoinAsRider from "../../Components/Home/JoinAsRider";
import OrderDeliveryInfo from "../../Components/Home/OrderDeliveryInfo";
import SpecialOffer from "../../Components/Home/SpecialOffer";
import WhyChooseUs from "../../Components/Home/WhyChooseUs";
import OurProductSection from "../../Components/OurProductSection/OurProductSection";
import SubHeader from "../../Components/SubHeader/SubHeader";

const Home: React.FC = () => {
    return (
        <>
            <Hero></Hero>
            <SubHeader></SubHeader>
            <section className="max-w-[90%] mx-auto">
                <WhyChooseUs />
                <OrderDeliveryInfo />
                <FeaturedProducts />
            </section>
            <OurProductSection></OurProductSection>
            <section className="max-w-[95%] mx-auto">
                <SpecialOffer />
            </section>

            <FollowUsSection></FollowUsSection>
            <section className="max-w-[95%] mx-auto">
                <AboutUs />
                <JoinAsRider />
            </section>
        </>
    );
};

export default Home;