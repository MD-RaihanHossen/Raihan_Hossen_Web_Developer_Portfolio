import { BsPatchCheckFill } from "react-icons/bs"; // Skill check icon

// Skills Component
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 text-gray-700"
    >
      {/* === SECTION TITLE === */}
      <h2 className="text-3xl font-bold mb-2">Skills</h2>
      <p className="text-gray-500 mb-12">My technical level</p>

      {/* === SKILLS CONTAINER === */}
      {/* Uses flex for layout — stacks on mobile, side-by-side on larger screens */}
      <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-5xl">
        
        {/* === FRONTEND CARD === */}
        <div className="bg-white shadow-md rounded-2xl p-8 flex-1">
          <h3 className="text-xl font-semibold text-center mb-6">
            Frontend Developer
          </h3>

          {/* Grid layout for skills inside this card */}
          <div className="grid grid-cols-2 gap-4">
            {/* Each skill has an icon + name + level */}
            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">HTML</h4>
                <small className="text-gray-500 text-sm">Advanced</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">CSS</h4>
                <small className="text-gray-500 text-sm">Advanced</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">JavaScript</h4>
                <small className="text-gray-500 text-sm">Intermediate</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">React</h4>
                <small className="text-gray-500 text-sm">Intermediate</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">Tailwind CSS</h4>
                <small className="text-gray-500 text-sm">Intermediate</small>
              </div>
            </div>
          </div>
        </div>

        {/* === BACKEND CARD === */}
        <div className="bg-white shadow-md rounded-2xl p-8 flex-1">
          <h3 className="text-xl font-semibold text-center mb-6">
            Backend & Tools
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">Express.js</h4>
                <small className="text-gray-500 text-sm">Intermediate</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">MongoDB</h4>
                <small className="text-gray-500 text-sm">Intermediate</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">Firebase</h4>
                <small className="text-gray-500 text-sm">Intermediate</small>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BsPatchCheckFill className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-medium">JWT Authentication</h4>
                <small className="text-gray-500 text-sm">Basic</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
