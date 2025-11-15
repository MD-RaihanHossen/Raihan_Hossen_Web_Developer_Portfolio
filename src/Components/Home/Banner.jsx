import SocialIcons from "./SocialIcons";
import BannerData from "./BannerData";
import ProfileImage from "./ProfileImage";
import ScroolDown from "./ScroolDown.";


const Banner = () => {

    return (
        <div >
            <section
                id="home"
                className="py-16 px-6 md:px-12 lg:px-20 flex md:mt-10 flex-col-reverse md:flex-row items-center justify-center text-gray-700 "
            >
                {/* LEFT SOCIAL ICONS */}
                <SocialIcons></SocialIcons>


                {/* CENTER TEXT */}
                <BannerData></BannerData>

                {/* RIGHT PROFILE IMAGE WITH BLOB ANIMATION */}
                <ProfileImage></ProfileImage>

            </section>
            <div className=" hidden md:flex flex-col md:flex-row items-center justify-center px-6 text-gray-700 gap-1.5 md:px-12 ">
                
                <div className="flex-1 lg:ml-50"><ScroolDown></ScroolDown></div>
                <div className="flex-1 lg:hidden"></div>
                <div className="flex-1 lg:hidden"></div>
            </div>
        </div>
    );
};

export default Banner;