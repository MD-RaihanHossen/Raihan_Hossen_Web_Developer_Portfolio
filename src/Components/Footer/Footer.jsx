import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full py-10  text-gray-700 text-center border-t">
            {/* === NAME === */}
            <h2 data-aos="fade-up" className="text-2xl font-bold mb-4 text-gray-700">Raihan Hossen</h2>

            {/* === NAV LINKS === */}
            {/* === NAV LINKS === */}
            <ul
                className="flex justify-center gap-6 mb-6 text-sm font-medium"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <li>
                    <a
                        href="#about"
                        className="hover:text-indigo-600 transition-colors"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        className="hover:text-indigo-600 transition-colors"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="hover:text-indigo-600 transition-colors"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* === SOCIAL ICONS === */}
            <div  className="flex justify-center gap-5 mb-6">
                <a
                    href="https://www.facebook.com/raihan.hossen.538543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-indigo-600 transition"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.linkedin.com/in/raihan-hossen-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-indigo-600 transition"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/MD-RaihanHossen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-indigo-600 transition"
                >
                    <FaGithub />
                </a>
            </div>

            {/* === COPYRIGHT === */}
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Raihan Hossen. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
