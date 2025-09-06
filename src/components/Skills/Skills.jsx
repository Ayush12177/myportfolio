import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
  ];

  return (
    <div
      id="Skills"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-2xl mx-0 md:mx-20 bg-opacity-50 rounded-2xl p-12 border-2 border-gray-700 mt-10 mb-10"
    >
      <div>
        <h2 className="text-3xl md:text-5xl font-bold item-right text-center md:text-left">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8 py-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="h-16 w-16"
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;