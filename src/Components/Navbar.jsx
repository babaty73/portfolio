function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white flex justify-center gap-8 py-4 z-50">
      <a href="#home" className="hover:text-gray-400 transition">Home</a>
      <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
      <a href="#skills" className="hover:text-gray-400 transition">Skills</a>
      <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
    </nav>
  );
}

export default Navbar;
