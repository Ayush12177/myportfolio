import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-gray-900 text-white p-6 sm:p-8 md:p-12 items-center text-center md:text-left"
    >
      <div className="mb-6 md:mb-0">
        <h1 className="text-3xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-lg md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg">
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdOutlineEmail size={25} />
          <a href="mailto:ayushgupta96396@gmail.com">ayushgupta96396@gmail.com</a>
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start mt-2">
          <CiLinkedin size={25} />
         <a href="https://www.linkedin.com/in/ayushgupta2105/">https://www.linkedin.com/in/ayushgupta2105/</a>
        </li>
        <li className="flex gap-2 items-center  justify-center md:justify-start mt-2">
          <FaGithub size={25} />
          <a href="https://github.com/Ayush12177">https://github.com/Ayush12177</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;