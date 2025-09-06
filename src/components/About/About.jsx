import React from "react";
import AboutImg from "../../assets/about.webp";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-2xl mx-0 md:mx-20 bg-opacity-50 rounded-2xl p-12 border-2 border-gray-700"
    >
      <div>
        <h2 className="text-2xl md:text-5xl font-bold item-right text-center md:text-left">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-center gap-15 md:gap-20 py-10">
          <img className="md:h-96 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg" src={AboutImg} alt="About img " style={{opacity: 0.6}} />

          <div className="w-full md:w-96 mt-8 md:mt-0">
            <p className="text-sm md:text-lg leading-relaxed text-gray-300">
              I'm a passionate and results-driven developer with a knack for creating dynamic and user-friendly web applications. My journey in tech started with a fascination for how things work, and it has evolved into a career where I can build and create.
            </p>
            <p className="text-sm md:text-lg leading-relaxed mt-6  text-gray-300">
              I specialize in Frontend development, but I also have experience with Backend and Databases. I'm always eager to learn new technologies and take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;