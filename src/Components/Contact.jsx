import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [animate, setAnimate] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const formRef = useRef();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1y8zfc",   // replace with your EmailJS service ID
        "template_p66xI2g",  // replace ith your EmailJS template ID
        formRef.current,
        "Knor1DI54HMQMvkb6"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
    console.log("SUCCESS:", result.text);
    setStatus("success");
  },
  (error) => {
    console.error("ERROR:", error.text);
    setStatus("error");
  }
);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-900 text-white"
    >
      <h2
        className={`text-4xl font-bold mb-4 transform transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Get in Touch
      </h2>

      <p
        className={`text-gray-400 mb-12 text-center max-w-xl transform transition-all duration-1000 delay-200 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        I’d love to hear from you! Whether you have a question, collaboration idea,
        or just want to say hi, feel free to reach out.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-1000 delay-400 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>

        {/* Success/Error Banner */}
        {status === "success" && (
          <p className="mt-4 text-green-400 font-semibold text-center animate-pulse">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 font-semibold text-center animate-pulse">
            ❌ Oops! Something went wrong.
          </p>
        )}
      </form>

      <div
        className={`flex space-x-6 transform transition-all duration-1000 delay-600 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/babaty73/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-3xl animate-float"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/babaty73"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-3xl animate-float"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:imranidris10999@gmail.com"
          className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-3xl animate-float"
        >
          <FaEnvelope />
        </a>
     <a
  href="https://t.me/babafootballeru"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-3xl animate-float"
>
  <FaTelegram />
</a>

      </div>
    </section>
  );
}

export default Contact;