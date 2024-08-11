import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {

  return (
    <div className="text-center py-20 bg-white">
      <h1 className="text-4xl font-bold">Hi, my name is <span className="text-teal-500">Diyar Aydin</span></h1>
      <h2 className="text-2xl mt-4">Computer Science graduate</h2>
      

      {/* Download CV Button */}
      <div className="mt-6">
        <a
  href="/assets/CV_Diyar_Aydin.pdf"
  download
          className="inline-block px-4 py-2 border border-teal-500 text-teal-500 rounded transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Header;
