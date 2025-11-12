import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // Mobile menu state
  const [open, setOpen] = useState(false);

  // Navigation items
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Skills", link: "/skills" },
    { title: "Services", link: "/services" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-20 h-16 ">
        {/* ===== Logo Section ===== */}
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight text-gray-700">
          Hossen
        </NavLink>

        {/* ===== Desktop Navigation ===== */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? "text-black font-semibold" : "hover:text-black"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* ===== Mobile Dropdown Menu ===== */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-600 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                onClick={() => setOpen(false)} // Close after selecting
                className={({ isActive }) =>
                  `block py-1 ${
                    isActive ? "text-black font-semibold" : "hover:text-black"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
