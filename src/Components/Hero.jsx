import heroImage from "../assets/Prof.png"; 
import { useEffect, useState } from "react";

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    //eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-16 gap-8"
    >
      {/* Left Text */}
      <div className={`flex-1 transform transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl font-bold mb-4">
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
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View Projects
        </a>
      </div>

      {/* Right Image */}
      <div className={`flex-1 transform transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <img
          src={heroImage}
          alt="Hero"
          className="rounded-full shadow-lg w-full max-w-sm mx-auto object-cover h-90 md:h-96"
        />
      </div>
    </section>
  );
}

export default Hero;
