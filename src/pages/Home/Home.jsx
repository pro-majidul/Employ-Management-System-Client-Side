import Banner from "../../component/service/Banner";
import Features from "../../component/service/Features";
import OurPartner from "../../component/service/OurPartner";
import OurService from "../../component/service/OurService";
import Testimonial from "../../component/service/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <OurService></OurService>
            <Testimonial></Testimonial>
            <Features></Features>
            <OurPartner></OurPartner>
            
        </div>
    );
};

export default Home;