import React from 'react';

const Header = () => {
  const handleKnowMoreClick = () => {
    window.open('/infos', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="text-center py-20 bg-white">
      <h1 className="text-4xl font-bold">Hi, my name is <span className="text-teal-500">Diyar Aydin</span></h1>
      <h2 className="text-2xl mt-4">Computer Science graduate</h2>
      

      {/* Know more Button */}
      <div className="mt-6">
        <button
          onClick={handleKnowMoreClick}
          className="inline-block px-4 py-2 border border-teal-500 text-teal-500 rounded transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          My Documents
        </button>
      </div>
    </div>
  );
};

export default Header;
