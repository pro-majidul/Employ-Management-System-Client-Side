import Banner from "../../component/service/Banner";
import Features from "../../component/service/Features";
import OurService from "../../component/service/OurService";
import Testimonial from "../../component/service/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <OurService></OurService>
            <Testimonial></Testimonial>
            <Features></Features>
            
        </div>
    );
};

export default Home;