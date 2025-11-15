import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMonitor } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsDatabase } from "react-icons/bs";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeCard !== null &&
        cardRefs.current[activeCard] &&
        !cardRefs.current[activeCard].contains(event.target)
      ) {
        setActiveCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeCard]);

  const popupAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.4 },
  };

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 pt-20 pb-10 md:py-28 md:pb-18 text-gray-700"
    >
      <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">Services</h2>
      <p className="text-gray-500 mb-12" data-aos="fade-up" data-aos-delay="100">What I Offer</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* === CARD 1 === */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="relative bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden h-[350px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FiMonitor className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
          <p className="text-gray-600 mb-4">
            Building responsive, user-friendly interfaces using React, Tailwind
            CSS, and JavaScript to deliver smooth user experiences.
          </p>

          <div className="mt-auto">
            <button
              onClick={() => toggleCard(1)}
              className="text-indigo-600 font-medium hover:underline"
            >
              {activeCard === 1 ? "Hide Details ↑" : "View More →"}
            </button>
          </div>

          <AnimatePresence>
            {activeCard === 1 && (
              <motion.div
                {...popupAnimation}
                className="absolute bottom-0 left-0 right-0 bg-indigo-50 text-gray-700 p-4 rounded-b-2xl text-sm"
              >
                <ul className="space-y-2 text-left">
                  <li>• Responsive website design</li>
                  <li>• React & Tailwind CSS projects</li>
                  <li>• Clean, maintainable code</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* === CARD 2 === */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="relative bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden h-[350px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <LuLayoutDashboard className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI / UX Implementation</h3>
          <p className="text-gray-600 mb-4">
            Converting modern UI/UX designs into interactive web pages with
            pixel-perfect layouts and smooth animations.
          </p>

          <div className="mt-auto">
            <button
              onClick={() => toggleCard(2)}
              className="text-indigo-600 font-medium hover:underline"
            >
              {activeCard === 2 ? "Hide Details ↑" : "View More →"}
            </button>
          </div>

          <AnimatePresence>
            {activeCard === 2 && (
              <motion.div
                {...popupAnimation}
                className="absolute bottom-0 left-0 right-0 bg-indigo-50 text-gray-700 p-4 rounded-b-2xl text-sm"
              >
                <ul className="space-y-2 text-left">
                  <li>• Figma to React conversion</li>
                  <li>• Mobile-friendly layouts</li>
                  <li>• Smooth hover & scroll effects</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* === CARD 3 === */}
        <div
          ref={(el) => (cardRefs.current[3] = el)}
          className="relative bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden h-[350px]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <BsDatabase className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
          <p className="text-gray-600 mb-4">
            Connecting frontend apps with backend APIs using Express.js,
            MongoDB, Firebase, and JWT authentication.
          </p>

          <div className="mt-auto">
            <button
              onClick={() => toggleCard(3)}
              className="text-indigo-600 font-medium hover:underline"
            >
              {activeCard === 3 ? "Hide Details ↑" : "View More →"}
            </button>
          </div>

          <AnimatePresence>
            {activeCard === 3 && (
              <motion.div
                {...popupAnimation}
                className="absolute bottom-0 left-0 right-0 bg-indigo-50 text-gray-700 p-4 rounded-b-2xl text-sm"
              >
                <ul className="space-y-2 text-left">
                  <li>• REST API connection</li>
                  <li>• Firebase authentication</li>
                  <li>• MongoDB data handling</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
