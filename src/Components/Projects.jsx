function Projects() {
  const projectList = [
    {
      title: "Lost and Found App",
      description: "A React app to manage lost items and find their owners.",
      link: "https://lost-and-found-six-theta.vercel.app/",
    },
    {
      title: "Personal Profile Manager",
      description: "Manage your personal info, skills, and projects in one place.",
      link: "https://personal-profile-manager.vercel.app/",
    },
    {
      title: "Mini Counter app",
      description: "A simple counter app built with React.",
      link: "https://mini-counter-app-flame.vercel.app/",
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projectList.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="bg-gray-800 rounded-lg p-6 hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
