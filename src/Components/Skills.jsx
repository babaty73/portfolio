import { useEffect, useState } from "react";
import { FaHtml5,FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiTailwindcss } from "react-icons/si";

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    //eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
  }, []);

  const skills = [
    { name: "HTML / CSS / JavaScript", level: 97, icon: <FaHtml5 /> },
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "Node.js", level: 50, icon: <FaNodeJs /> },
    { name: "Git", level: 85, icon: <FaGitAlt /> },
    { name: "Python", level: 75, icon: <FaPython /> },
    { name: "C++", level: 90, icon: <SiCplusplus /> },
    { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      {/* Title */}
      <h2
        className={`text-4xl font-bold mb-12 border-b-2 transform transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Skills
      </h2>

      {/* Skills List */}
      <div
        className={`w-full max-w-2xl space-y-6 transform transition-all duration-1000 delay-300 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {skills.map((skill, idx) => (
          <div key={idx}>
            
            {/* Icon + Name */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl hover:scale-110 transition">
                {skill.icon}
              </span>
              <h3 className="text-xl">{skill.name}</h3>
            </div>

            {/* Progress Bar */}
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
