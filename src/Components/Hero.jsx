import heroImage from "../assets/Prof.png";
import { useEffect, useState } from "react";
import { FaHtml5, FaReact,FaCss3, FaPython ,FaNodeJs, FaGitAlt} from "react-icons/fa";
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
      className="h-screen flex flex-col md:flex-row items-center justify-center
       text-center md:text-left px-4 md:px-16 gap-8"
    >
      {/* Left Text */}
      <div
        className={`flex-1 mb-24 transform transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl font-bold mt-40 mb-8">
          Hi, I'm Imran
        </h1>

        <p className="text-lg mb-6">
          My Name is <strong>Imran Endris</strong>. I'm a 2nd year
          Student in Adama Science and Technology University (ASTU).
          I'm a skilled and Dedicated Front-end developer.
          I build clean and responsive web applications.
        </p>

        <a
          href="#projects"
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300
           transition"
        >
          View Projects
        </a>

        <a
          href="/Imran_Iddris_CV.docx"
          download="Imran_Idris_CV.docx"
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300
           transition ml-4"
        >
          Download CV
        </a>
      </div>

      {/* Right Image with Floating Icons */}
      <div
        className={`flex-1 transform transition-all duration-1000 delay-300 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative w-[360px] h-[360px] mx-auto mb-16 
        flex items-center justify-center">



          {/* Profile Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-full shadow-lg w-full max-w-sm  object-cover"
          />

        
        </div>
      </div>
    </section>
  );
}

export default Hero;