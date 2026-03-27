function Skills() {
  const skills = [
    { name: "HTML / CSS/JavaScript", level: 97 },
    { name: "React", level: 93 },
    { name: "Node.js", level: 50 },
    { name: "Git", level: 85},
    { name: "Python", level: 75 },
    { name: "C++", level: 90 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Time Management", level: 95 },
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
