import React from 'react';
import profilePic from '../assets/pp4.png'; // Update with actual path
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const About = () => {
  return (
    <div className="relative bg-teal-500 text-white py-20 px-10">
      <div className="flex flex-col items-center">
      <img src={profilePic} alt="Profile" className="w-52 h-52 rounded-full object-cover mb-6"/>
      <p className="max-w-2xl text-center">I am a passionate programmer with extensive experience in building awesome websites and applications. My skills include frontend technologies like HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Java as well as frameworks and libraries such as Angular and React. Additionally, I am proficient in design tools like Figma and Adobe XD. On a personal level, I am self-driven and hardworking, able to set high goals and work diligently to achieve them. I am also communicative, able to quickly adapt to new environments and teams, and I value the exchange with colleagues.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '70px' }}>
        <svg className="relative block w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
        </svg>
      </div>
      <div className="flex justify-center items-center space-x-8 mb-10 mt-10">
        <a href="http://www.linkedin.com/in/diyar-aydin-ab902224a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl text-white transition duration-300 hover:text-teal-700" />
        </a>
        <a href="https://github.com/daydinn" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-white transition duration-300 hover:text-teal-700" />
        </a>
      </div>
    </div>
  );
};

export default About; 
