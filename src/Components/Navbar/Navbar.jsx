import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Skills", link: "/skills" },
    { title: "Services", link: "/services" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
    >
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight text-gray-700">
          Hossain
        </NavLink>

        {/* Desktop Menu (Keep Old AOS Version) */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <li key={i} data-aos="fade-down" data-aos-delay={i * 100}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu (Improved animation + more delay) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}     // ← More delay here
                >
                  <NavLink
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 ${
                        isActive ? "text-indigo-600 font-semibold" : "hover:text-black"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
