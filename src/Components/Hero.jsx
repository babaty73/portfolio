import heroImage from "../assets/Prof.png";
import { useEffect, useState } from "react";
import { FaHtml5,FaCode, FaReact,FaCss3, FaPython ,FaNodeJs, FaGitAlt} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    //eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
    
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-16 gap-8"
    >
      {/* Left Text */}
      <div
        className={`flex-1 mb-24 transform transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-3xl mt-16 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Hi, I'm Imran
        </h1>

        <p className="text-base sm:text-lg mb-6">
          My Name is <strong>Imran Endris</strong>. I'm a 2nd year
          Student in Adama Science and Technology University (ASTU).
          I'm a skilled and Dedicated Front-end developer.
          I build clean and responsive web applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition text-center"
          >
            View Projects
          </a>

          <a
            href="/Imran_Idris_CV.pdf"
            download="Imran_Idris_CV.pdf"
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition text-center"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image with Floating Icons */}
      <div
        className={`flex-1 transform transition-all duration-1000 delay-300 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative w-full max-w-[320px] h-[386px]  aspect-square mx-auto mb-16 flex items-center justify-center">
          {/* Profile Image */}
          <img
            src={heroImage}
            alt="Hero"
            loading="lazy"
            className="rounded-full shadow-lg w-full h-full object-cover"
          />


        </div>
      </div>
    </section>
  );
}

export default Hero;