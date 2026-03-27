function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 60 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="w-full max-w-2xl space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="text-xl mb-2">{skill.name}</h3>
            <div className="bg-gray-800 rounded-full h-4 w-full">
              <div
                className="bg-white h-4 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
