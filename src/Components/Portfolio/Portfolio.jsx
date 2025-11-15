import { useState } from "react";

// Import your images
import work1 from "../../assets/Images/work1.jpg";
import work2 from "../../assets/Images/work2.jpg";
import work3 from "../../assets/Images/work3.jpg";
import work4 from "../../assets/Images/work4.jpg";
import work5 from "../../assets/Images/work5.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web",
      image: work1,
      demo: "#",
    },
    {
      id: 2,
      title: "E-Commerce Homepage",
      category: "Web",
      image: work2,
      demo: "#",
    },
    {
      id: 3,
      title: "Creative Landing Page",
      category: "Web",
      image: work3,
      demo: "#",
    },
    {
      id: 4,
      title: "UI Design Mockup",
      category: "Design",
      image: work4,
      demo: "#",
    },
    {
      id: 5,
      title: "Product Showcase Page",
      category: "Web",
      image: work5,
      demo: "#",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="portfolio"
      className="w-full flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 pt-20 pb-10 md:py-28 md:pb-18 text-gray-700"
    >
      {/* === SECTION TITLE === */}
      <h2 className="text-3xl font-bold mb-2" >Portfolio</h2>
      <p className="text-gray-500 mb-10">
        Most recent work
      </p>

      {/* === FILTER BUTTONS === */}
      <div className="flex items-center justify-center gap-4 mb-10 flex-wrap" >
        {["All", "Web", "Design"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-300
              ${filter === cat ? "bg-gray-800 text-white border-gray-800" : "bg-white text-indigo-600 border-gray-300 hover:bg-gray-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* === PROJECT GRID === */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            data-aos="fade-up" // Apply fade-up animation for each project
            data-aos-delay={`${project.id * 100}`} // Delay for each project based on its ID
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.category}</p>
              </div>
              <a
                href={project.demo}
                className="text-indigo-600 font-medium text-sm hover:underline mt-auto"
              >
                Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
