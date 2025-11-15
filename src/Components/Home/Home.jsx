
import ScroolDown from "./ScroolDown.";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Qualification from "../Qualification/Qualification";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contract/Contract";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
        
            <Banner></Banner>

            {/*this is my about section*/}
            <About></About>

            {/*this is my skills section*/}
            <Skills></Skills>

            {/*this is my Services section*/}
            <Services></Services>

            {/*this is Qualification section*/}
            <Qualification></Qualification>

            {/*this is Portfolio section*/}
            <Portfolio></Portfolio>

            {/*this is Testimonial section*/}
            <Testimonial></Testimonial>

            {/*this is Contact section*/}
            <Contact></Contact>



        </div>
    );
};

export default Home;
