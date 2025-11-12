import SocialIcons from "./SocialIcons";
import BannerData from "./BannerData";
import ProfileImage from "./ProfileImage";
import ScroolDown from "./ScroolDown.";

const Home = () => {
    return (
        <div>
            <section
                id="home"
                className="max-w-7xl mx-auto relative flex flex-col sm:gap-10 md:flex-row items-center justify-center 
                md:justify-between px-6 md:px-12 lg:px-20 pt-20 pb-10  md:py-28 md:pb-18 "
            >
                {/* LEFT SOCIAL ICONS */}
                <SocialIcons></SocialIcons>

                {/* CENTER TEXT */}
                <BannerData></BannerData>

                {/* RIGHT PROFILE IMAGE WITH BLOB ANIMATION */}
                <ProfileImage></ProfileImage>

            </section>

            <section>
                {/* SCROLL DOWN */}
            <ScroolDown></ScroolDown>
            </section>

        </div>
    );
};

export default Home;
