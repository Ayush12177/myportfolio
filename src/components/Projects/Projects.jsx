import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectData";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;