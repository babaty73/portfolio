function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white flex justify-center gap-16 py-4 z-50">
      <a href="#home" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-2 py-0.5">Home</a>
      <a href="#projects" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-2 py-0.5">Projects</a>
      <a href="#skills" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-2 py-0.5">Skills</a>
      <a href="#contact" className="hover:bg-gray-600 transition border-2 border-gray-500 rounded-md bg-gray px-2 py-0.5">Contact</a>
    </nav>
  );
}

export default Navbar;
