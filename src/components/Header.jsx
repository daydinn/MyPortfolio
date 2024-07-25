import React from 'react';

const Header = () => {
  return (
    <div className="text-center py-20 bg-white">
      <h1 className="text-4xl font-bold">Hi, my name is <span className="text-teal-500">Diyar Aydin</span></h1>
      <h2 className="text-2xl mt-4">Web Developer</h2>
      <a href="http://www.linkedin.com/in/diyar-aydin-ab902224a" target="_blank" rel="noopener noreferrer">
        <button className="mt-6 px-4 py-2 border border-teal-500 text-teal-500 rounded transition duration-300 hover:bg-teal-500 hover:text-white">
          Know more
        </button>
      </a>
    </div>
  );
};

export default Header;
