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
  className="rounded-full shadow-lg w-full max-w-sm mx-auto object-cover h-90 md:h-96 p-16"
/>

      </div >
      <div>
        <h1 className=" flex justify-start font-extrabold text-[42px]">Hi there</h1>
           <p className=" bg-gray-800 h-auto w-full border-2 border-gray-500 rounded-md p-8 mb-6">
        My Name is <strong>Imran Endris </strong>I'm a 2nd year Civil Engineering
        Student in Adama Science and Technology University (ASTU)
        I'm a skilled and Dedicated Front-end developer 
        I build clean and responsive web applications. 
    </p>
        <a
          href="#projects"
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View Projects
        </a>
        </div>
      </div>

      
    </section>
  );
}

export default Hero;
