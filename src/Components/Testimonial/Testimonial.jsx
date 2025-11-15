import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import testimonial1 from "../../assets/Images/testimonial1.png";
import testimonial2 from "../../assets/Images/testimonial2.png";
import testimonial3 from "../../assets/Images/testimonial3.png";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Frontend Developer (Peer)",
    image: testimonial1,
    text: "Raihan’s attention to detail in frontend development is excellent. His React and Tailwind designs are clean, modern, and efficient.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Team Project Partner",
    image: testimonial2,
    text: "Collaborating with Raihan on a full-stack project was a great experience. He writes structured, optimized, and readable code.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Instructor (Programming Hero)",
    image: testimonial3,
    text: "Raihan is a dedicated learner with solid problem-solving skills and creative design thinking. A great developer in progress.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  // Automatically switch testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Determine which 2 testimonials to show
  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
   <section
      id="testimonial"
      className="w-full flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 text-gray-700"
    >
      {/* === SECTION TITLE === */}
      <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">Testimonial</h2>
      <p className="text-gray-500 mb-12" data-aos="fade-up" data-aos-delay="100">
        What people are saying
      </p>

      {/* === TESTIMONIAL GRID === */}
      <div className="relative max-w-4xl w-full">
        <div
          key={current}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full transition-opacity duration-700 ease-in-out"
        >
          {visible.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              data-aos="fade-up" // Add animation for each testimonial
              data-aos-delay={`${t.id * 200}`} // Add slight delay based on the testimonial ID
            >
              <FaQuoteLeft className="text-indigo-500 text-xl mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  data-aos="fade-left" // Add animation for the image
                  data-aos-delay={`${t.id * 300}`} // Delay the image animation
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === DOT NAVIGATION === */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
