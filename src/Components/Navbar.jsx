function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md text-white flex flex-wrap justify-center gap-3 sm:gap-8 py-3 sm:py-4 z-50 border-b border-gray-800">
      <a href="#home" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-3 py-1 text-sm sm:text-base">Home</a>
      <a href="#projects" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-3 py-1 text-sm sm:text-base">Projects</a>
      <a href="#skills" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-3 py-1 text-sm sm:text-base">Skills</a>
      <a href="#contact" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-3 py-1 text-sm sm:text-base">Contact</a>
    </nav>
  );
}

export default Navbar;
