import React from 'react';
import { IoMdDownload } from 'react-icons/io';

const Infos = () => {
  return (
    <div className="text-center py-20 bg-gray-100">

      <h1 className="text-4xl font-bold mb-10">My Documents</h1>
      
      {/* Display and download CV */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">CV</h2>
        <div className="flex justify-center">
          <iframe
            src="/assets/CV_Diyar_Aydin.pdf"
            title="CV"
            className="w-full max-w-4xl h-96 border border-teal-500 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="/assets/CV_Diyar_Aydin.pdf"
          download
          className="mt-6 inline-flex items-center px-4 py-2 border border-teal-500 text-teal-500 rounded-lg transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          <IoMdDownload className="mr-2" /> Download
        </a>
      </div>

      {/* Display and download Urkunde */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Certificate of Graduation</h2>
        <div className="flex justify-center">
          <iframe
            src="/assets/Urkunde_Diyar_Aydin.pdf"
            title="Urkunde"
            className="w-full max-w-4xl h-96 border border-teal-500 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="/assets/Urkunde_Diyar_Aydin.pdf"
          download
          className="mt-6 inline-flex items-center px-4 py-2 border border-teal-500 text-teal-500 rounded-lg transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          <IoMdDownload className="mr-2" /> Download
        </a>
      </div>

      {/* Display and download Praktikumsvertrag */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Internship Agreement</h2>
        <div className="flex justify-center">
          <iframe
            src="/assets/PRX_Diyar_Aydin.pdf"
            title="Praktikumsvertrag"
            className="w-full max-w-4xl h-96 border border-teal-500 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="/assets/PRX_Diyar_Aydin.pdf"
          download
          className="mt-6 inline-flex items-center px-4 py-2 border border-teal-500 text-teal-500 rounded-lg transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          <IoMdDownload className="mr-2" /> Download
        </a>
      </div>
    </div>
  );
};

export default Infos;
