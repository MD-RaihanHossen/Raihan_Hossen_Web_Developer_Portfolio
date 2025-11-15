import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { BsCalendar } from "react-icons/bs";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="qualification"
      className="w-full flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 text-gray-700"
    >
      {/* === SECTION TITLE === */}
      <h2 className="text-3xl font-bold mb-2" >Qualification</h2>
      <p className="text-gray-500 mb-12" >My personal journey</p>

      {/* === TABS === */}
      <div className="flex items-center justify-center gap-8 mb-12">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 text-lg font-medium transition ${
            activeTab === "education"
              ? "text-indigo-600"
              : "text-gray-500 hover:text-indigo-600"
          }`}
           // Add animation to the Education tab
        >
          <FaGraduationCap />
          Education
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 text-lg font-medium transition ${
            activeTab === "experience"
              ? "text-indigo-600"
              : "text-gray-500 hover:text-indigo-600"
          }`}
          
        >
          <FaBriefcase />
          Experience
        </button>
      </div>

      {/* === TIMELINE === */}
      <div className="relative max-w-3xl w-full">
        {/* vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        {activeTab === "education" && (
          <div className="flex flex-col gap-10">
            {/* --- ITEM 1 --- */}
            <div className="flex justify-between items-center w-full">
              <div className="w-1/2 text-right pr-8">
                <h3 className="font-semibold text-lg">Web Development Course</h3>
                <p className="text-gray-500">Programming Hero - Online</p>
                <p className="flex items-center gap-2 text-sm text-gray-500 justify-end">
                  <BsCalendar /> 2024 - 2025
                </p>
              </div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>

            {/* --- ITEM 2 --- */}
            <div className="flex justify-between items-center w-full" >
              <div className="w-1/2"></div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-semibold text-lg">Self Learning</h3>
                <p className="text-gray-500">YouTube, Docs, and Practice Projects</p>
                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <BsCalendar /> 2023 - Present
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="flex flex-col gap-10">
            {/* --- ITEM 1 --- */}
            <div className="flex justify-between items-center w-full">
              <div className="w-1/2 text-right pr-8">
                <h3 className="font-semibold text-lg">Frontend Developer</h3>
                <p className="text-gray-500">Personal Projects</p>
                <p className="flex items-center gap-2 text-sm text-gray-500 justify-end">
                  <BsCalendar /> 2023 - Present
                </p>
              </div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>

            {/* --- ITEM 2 --- */}
            <div className="flex justify-between items-center w-full">
              <div className="w-1/2"></div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-semibold text-lg">MERN Stack Practice</h3>
                <p className="text-gray-500">Building Full-Stack Projects</p>
                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <BsCalendar /> 2024 - Present
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;
