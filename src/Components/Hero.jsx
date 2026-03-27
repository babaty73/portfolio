import heroImage from "../assets/Prof.jpg"; 

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-16 gap-8"
    >
      {/* Left Text */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Imran
        </h1>
        {/* Right Image */}
      <div className="flex-1">
        <img
  src={heroImage}
  alt="Hero"
  className="rounded-xl shadow-lg w-full max-w-sm mx-auto object-cover h-64 md:h-96"
/>

      </div>
        <p className="text-gray-400 text-lg mb-6 max-w-xl">
          Front-end developer building clean and responsive web applications.
        </p>
        <a
          href="#projects"
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View Projects
        </a>
      </div>

      
    </section>
  );
}

export default Hero;
