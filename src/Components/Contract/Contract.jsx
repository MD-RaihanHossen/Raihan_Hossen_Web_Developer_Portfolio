import { FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaPaperPlane } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ng5baa8",          // Correct Service ID: `service_ng5baa8`
      "template_ldnqgl7",         // Template ID: `template_ldnqgl7`
      formRef.current,            // The actual form element
      "BAAtu4Sg15cQc2rVz"         // Your Public Key
    )
      .then(() => {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          icon: "success",
          confirmButtonColor: "#4F46E5"
        });

        e.target.reset(); // Reset form after successful submission
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#EF4444"
        });
      });
  };

  return (
    <section
      id="contact"
      className=" py-16 px-6 md:px-12 lg:px-20 pt-20 pb-10  md:py-28 md:pb-18  text-gray-700"
    >
      {/* === Section Title === */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p className="text-gray-500">Let's connect and build something great</p>
      </div>

      {/* === Contact Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* --- Left Side: Contact Options --- */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-sm text-gray-500">raihanhossen.work@gmail.com</p>
              <a
                href="mailto:user@gmail.com"
                className="text-sm text-indigo-600 hover:underline flex items-center gap-1 mt-1"
              >
                Write me →
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
              <FaWhatsapp size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">WhatsApp</h4>
              <p className="text-sm text-gray-500">+8801787227342</p>
              <a
                href="https://wa.me/8801787227342?text=Hi%20Raihan!%20I%20saw%20your%20portfolio%20and%20want%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:underline flex items-center gap-1 mt-1"
              >
                Chat me →
              </a>
            </div>
          </div>

          {/* Messenger */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
              <FaFacebookMessenger size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Messenger</h4>
              <p className="text-sm text-gray-500">raihan.hossen.538543</p>
              <a
                href="https://m.me/raihan.hossen.538543"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1"
              >
                Message me →
              </a>
            </div>
          </div>
        </div>

        {/* --- Right Side: Contact Form --- */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Insert your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Insert your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
          >
            Send Message <FaPaperPlane className="text-sm" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
