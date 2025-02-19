import Banner from "../../component/service/Banner";
import Faq from "../../component/service/Faq";
import Features from "../../component/service/Features";
import OurPartner from "../../component/service/OurPartner";
import OurService from "../../component/service/OurService";
import TermsAndPrivacy from "../../component/service/TermsAndPrivacy";
import Testimonial from "../../component/service/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <OurService></OurService>
            <Testimonial></Testimonial>
            <Features></Features>
            <OurPartner></OurPartner>
            <Faq></Faq>
            <TermsAndPrivacy></TermsAndPrivacy>
            
        </div>
    );
};

export default Home;