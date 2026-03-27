import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl">Contact</h1>
      </section>
    </div>
  );
}

export default App;
