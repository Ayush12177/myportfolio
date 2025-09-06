import React from "react";
import avatarImg from "../../assets/home.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-6 sm:p-8 md:p-12 gap-10 md:gap-0">
      <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-lg md:text-4xl font-bold flex leading-normal tracking-tighter justify-center md:justify-start">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl tracking-tight ">
          I am a 3rd-year Computer Science Engineering student with a strong interest in full-stack development, problem-solving, and emerging technologies.I actively practice coding on platforms like LeetCode, HackerRank, and Codeforces to strengthen my programming skills.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
         
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Hire Me
          </button>
         
          <a href="#" download>
            <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div>
        <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-full mx-auto md:mx-0" src={avatarImg} alt="" style={{opacity: 0.25}} />
      </div>
    </div>
  );
};

export default Home;