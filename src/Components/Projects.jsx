import { useEffect, useState } from "react";

function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const projectList = [
    {
      title: "Lost and Found App",
      img: "/assets/lost-and-found.jpg",
      description: "A React app to manage lost items and find their owners.",
      link: "https://lost-and-found-six-theta.vercel.app/",
    },
    {
      title: "Personal Profile Manager",
      img: "/assets/personal-profile-manager.jpg",
      description: "Manage your personal info, skills, and projects in one place.",
      link: "https://personal-profile-manager.vercel.app/",
    },
    {
      title: "Mini Counter app",
      img: "/assets/mini-counter-app.jpg",
      description: "A simple counter app built with React.",
      link: "https://mini-counter-app-flame.vercel.app/",
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <h2 className={`text-4xl font-bold mb-12 transform transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Projects</h2>

      <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl transform transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {projectList.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
