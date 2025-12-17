import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import handIcon from "../../assets/icons/hand.svg";
import sendIcon from "../../assets/icons/send.svg";

const BannerData = () => {
  const texts = ["Say Hello 👋", "View Projects 💻", "Let's Talk 🤝"];
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  // ✅ FIX: Start wave animation only after the component is mounted
  useEffect(() => {
    let isMounted = true; // ensure we only animate if mounted

    const waveSequence = async () => {
      while (isMounted) {
        await controls.start({
          rotate: [0, 14, -8, 14, -4, 10, 0],
          scale: [1, 1.18, 1.12, 1.18, 1.12, 1.18, 1],
          transition: {
            duration: 5.5,
            ease: "easeInOut",
          },
        });
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
    };

    // Start animation only once after mount
    waveSequence();

    // Cleanup when component unmounts
    return () => {
      isMounted = false;
    };
  }, [controls]);

  // Text cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Button click logic
  const handleClick = () => {
    const currentText = texts[index];
    if (currentText.includes("Say Hello")) {
      window.open(
        "https://wa.me/8801787227342?text=Hi%20Raihan!%20I%20saw%20your%20portfolio%20and%20want%20to%20connect.",
        "_blank"
      );
    } else if (currentText.includes("View Projects")) {
      window.open("#portfolio", "_self");
    } else if (currentText.includes("Let's Talk")) {
      window.open("https://www.linkedin.com/in/raihan-hossen-dev/", "_blank");
    }
  };

  return (
    <div  className="flex-1 max-w-lg text-center md:text-left space-y-6 md:space-y-8 lg:ml-36">
      {/* === Heading === */}
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-extrabold text-gray-700 flex items-center justify-center md:justify-start gap-3">
          Raihan Hossain
          <motion.img
            src={handIcon}
            alt="hand"
            className="w-7 h-7 md:w-8 md:h-8 origin-[70%_70%]"
            animate={controls}
          />
        </h1>
        <h2 className="text-base md:text-lg lg:text-xl text-gray-500 mt-2">
          Frontend Developer (MERN Stack)
        </h2>
      </div>

      {/* === Description === */}
      <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
        I’m a self-taught developer who loves turning ideas into interactive web
        experiences. I specialize in React, Tailwind CSS, and have backend
        experience using Express and MongoDB.
      </p>

      {/* === Animated Button === */}
      <motion.button
        onClick={handleClick}
        className="bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 
          mx-auto md:mx-0 hover:bg-gray-800 transition-all relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={texts[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
        <img src={sendIcon} alt="send" className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    </div>
  );
};

export default BannerData;
