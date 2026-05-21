import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPython, FaGithub } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const stacks = [
  {
    title: "Front-end",
    items: [
      { name: "HTML",       icon: <FaHtml5 />,      color: "text-orange-500" },
      { name: "CSS",        icon: <FaCss3Alt />,     color: "text-blue-500" },
      { name: "JavaScript", icon: <SiJavascript />,  color: "text-yellow-400" },
      { name: "React",      icon: <FaReact />,       color: "text-cyan-400" },
      { name: "Tailwind",   icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "TypeScript", icon: <SiTypescript />,  color: "text-blue-600" },
    ],
    cols: "grid-cols-3",
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js",    icon: <FaNodeJs />,   color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />,  color: "text-gray-400" },
    ],
    cols: "grid-cols-2",
  },
  {
    title: "Competitive Programming",
    items: [
      { name: "Python", icon: <FaPython />,    color: "text-blue-400" },
      { name: "C++",    icon: <SiCplusplus />, color: "text-blue-700" },
    ],
    cols: "grid-cols-2",
  },
  {
    title: "Version Control",
    items: [
      { name: "Git",    icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    ],
    cols: "grid-cols-2",
  },
];

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
    >
      {/* Header */}
      <div
        className={`text-center mb-10 transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <p className="text-[11px] tracking-[0.18em] uppercase text-gray-500 mb-1">
          What I work with
        </p>
        <h2 className="text-4xl font-bold text-white">
          Technical <span className="text-gray-500">Skills</span>
        </h2>
      </div>

      {/* Fixed-size category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacks.map((stack, idx) => (
          <div
            key={idx}
            style={{ width: "360px", animationDelay: `${idx * 0.1}s` }}
            className={`bg-gray-900 border border-gray-800 rounded-2xl p-5 transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                {stack.title}
              </h3>
            </div>

            {/* Icon cards — responsive columns */}
            <div className={`grid gap-4 ${stack.cols} sm:${stack.cols}`}>
              {stack.items.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="flex flex-col items-center gap-1.5 py-3 px-2
                             bg-gray-800 border border-gray-700 rounded-xl
                             hover:bg-gray-700 hover:border-gray-600
                             transition-colors duration-150 cursor-default"
                >
                  <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                  <span className="text-[10px] font-medium text-gray-400 text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;