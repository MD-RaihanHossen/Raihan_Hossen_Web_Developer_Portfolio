import { motion } from "framer-motion";
import profileImg from "../../assets/Images/profileImg.jpg";

const ProfileImage = () => {
    return (
        <div className="relative mt-14 md:mt-0 flex justify-center md:justify-end flex-1">
            <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 
                                bg-cover bg-center shadow-inner border-5 border-gray-700 "
                style={{
                    backgroundImage: `url(${profileImg})`,
                }}
                animate={{
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            ></motion.div>
        </div>
    );
};

export default ProfileImage;