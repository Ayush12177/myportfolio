import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-10 justify-center">
        <ProjectCard
          title="Kaamkaaj"
          main="Kaamkaaj is a blue-collar workforce platform designed to connect skilled and semi skilled workers with employers."
          demoLink="https://kaamkaaj-help.onrender.com/"
          codeLink="https://github.com/Ayush12177/Kaamkaaj"
        />
        <ProjectCard
          title="know-your-taste"
          main="The Food Reel Integration feature brings short video-based content into food delivery and restaurant apps."
          demoLink="#"
          codeLink="https://github.com/Ayush12177/know-your-taste"
        />
        <ProjectCard
          title="Netflix Clone"
          main="Built a static Netflix-inspired website using HTML and CSS, featuring a responsive layout, hero banner, and categorized content sections."
          demoLink="https://netflix-clone-rvk.vercel.app"
          codeLink="https://github.com/Ayush12177/Netflix-Clone"
        />
      </div>
    </div>
  );
};

export default Projects;