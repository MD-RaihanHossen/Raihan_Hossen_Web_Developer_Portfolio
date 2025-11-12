import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import profileImg from "../../assets/Images/profileImg.jpg"; // <-- replace with your image path


const About = () => {

    return (
        <section
            id="about"
            className="w-full flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 md:px-12 lg:px-20 pt-20 pb-10  md:py-28 md:pb-18  text-gray-700"
        >
            {/* LEFT SIDE - IMAGE */}
            <div data-aos="fade-right" className="md:w-1/3 w-64">
                <img
                    src={profileImg}
                    alt="About"
                    className="rounded-2xl shadow-lg object-cover"
                />
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div
                data-aos="fade-left"
                className="md:w-2/3 flex flex-col items-start text-left max-w-xl"
            >
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                <p className="text-gray-500 mb-6">My introduction</p>

                {/* CARDS */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-32">
                        <FaAward className="text-2xl text-indigo-600 mb-2" />
                        <h5 className="font-semibold">Experience</h5>
                        <small>1+ Year (Personal Projects)</small>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-32">
                        <VscFolderLibrary className="text-2xl text-indigo-600 mb-2" />
                        <h5 className="font-semibold">Completed</h5>
                        <small>5+ Personal Projects</small>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-32">
                        <BiSupport className="text-2xl text-indigo-600 mb-2" />
                        <h5 className="font-semibold">Support</h5>
                        <small>Online 24/7</small>
                    </div>
                </div>

                {/* TEXT */}
                <p className="text-gray-600 mb-6 justify-center">
                    I’m a Frontend Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. I’ve also explored backend tools like Express.js, MongoDB, Firebase, and JWT. After completing a web development course from Programming Hero, I’m now focusing on frontend development and eager to start my professional career.
                </p>

                {/* BUTTON */}
                <a
                    href="/resume-raihan.pdf"
                    download
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all"
                >
                    Download CV <FiDownload />
                </a>
            </div>
        </section>
    );
};

export default About;