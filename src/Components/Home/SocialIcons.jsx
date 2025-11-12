import { FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";

const SocialIcons = () => {
    return (
        < div className = "hidden  lg:flex flex-col items-center gap-5 text-gray-500" >
                <a href="#"><FaInstagram className="hover:text-black transition text-2xl lg:text-3xl " /></a>
                <a href="#"><FaGithub className="hover:text-black transition text-2xl lg:text-3xl " /></a>
                <a href="#"><FaDribbble className="hover:text-black transition text-2xl lg:text-3xl " /></a>
            </div >
    );
};

export default SocialIcons;