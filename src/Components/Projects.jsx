import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    //eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
  }, []);

  const projectList = [
    {
      title: "Bloom Care",
      img: "/assets/bloom-care-screenshot.png",
      description: "A healthcare app for finding pharmacies and medicines nearby.",
      demo: "https://bloom-cares.vercel.app/",
      github: "https://github.com/babaty73/bloom-care",
      tech: ["React", "Tailwind", "Typescript"],
    },
    {
      title: "Lost and Found App",
      img: "/assets/lost-and-found.jpg",
      description: "App that helps to manage lost items and find their owners.",
      demo: "https://lost-and-found-six-theta.vercel.app/",
      github: "https://github.com/babaty73/lost-and-found",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Personal Profile Manager",
      img: "/assets/personal-profile-manager.jpg",
      description: "Manage your personal info, skills, and projects in one place.",
      demo: "https://personal-profile-manager.vercel.app/",
      github: "https://github.com/babaty73/personal-profile-manager",
      tech: ["React", "CSS", "JavaScript"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <h2 className={`text-4xl font-bold mb-14 mt-0 border-b-2 transform transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} `}>Projects</h2>

      <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl transform transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 hover:bg-gray-700 transition-transform duration-300 flex flex-col"
          >
            {/* Image (click to open modal) */}
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="w-full h-48 bg-black/5 overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                    Live Demo <FiExternalLink />
                  </a>
                )}

                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded hover:border-gray-400 transition text-gray-200">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for screenshot/details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full h-full max-h-[90vh] overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-800 gap-4">
              <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-300 px-3 py-1 rounded hover:bg-gray-800">Close</button>
            </div>
            <img src={selectedProject.img} alt={selectedProject.title} loading="lazy" className="w-full max-h-[55vh] object-cover" />
            <div className="p-6">
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded">
                    Open Demo <FiExternalLink />
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-600 px-4 py-2 rounded text-gray-200">
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
