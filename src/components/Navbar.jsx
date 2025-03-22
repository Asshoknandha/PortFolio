import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { TbBrandLinkedin } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='text-white text-3xl font-bold'>ANY</h2>
      </div>
      <div>
        <a 
          href="/resume.pdf" 
          download 
          className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition"
        >
          Download Resume
        </a>
      </div>

      <div className='m-8 flex items-center justify-center gap-6 text-white text-3xl'>
        <a href="https://www.linkedin.com/in/ashoknandha-yanamadala-b26b34323" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <TbBrandLinkedin />
        </a>
        <a href="https://github.com/Asshoknandha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IoLogoGithub />
        </a>
        <a href="https://www.instagram.com/the_yanamadala" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
