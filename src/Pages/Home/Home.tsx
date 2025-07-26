import FollowUsSection from "../../Components/FollowUsSection/FollowUsSection";
import Hero from "../../Components/Hero/Hero";
import OurProductSection from "../../Components/OurProductSection/OurProductSection";
import SubHeader from "../../Components/SubHeader/SubHeader";

const Home: React.FC = () => {
    return (
        <>
            <Hero></Hero>
            <SubHeader></SubHeader>
            <OurProductSection></OurProductSection>
            <FollowUsSection></FollowUsSection>
        </>
    );
};

export default Home;