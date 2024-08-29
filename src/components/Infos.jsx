import React from 'react';
import { IoMdDownload } from 'react-icons/io';

const Infos = () => {
  return (
    <div className="text-center pb-20 bg-gray-100">

      
      {/* Display and download CV */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">CV</h2>
        <div className="flex justify-center">
          <iframe
            src="/assets/CV_Diyar_Aydin1.pdf"
            title="CV"
            className="w-full max-w-4xl h-96 border border-teal-500 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="/assets/CV_Diyar_Aydin1.pdf"
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
            src="/assets/Praktikumsvertag_Diyar_Aydin.pdf"
            title="Praktikumsvertrag"
            className="w-full max-w-4xl h-96 border border-teal-500 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="/assets/Praktikumsvertag_Diyar_Aydin.pdf"
          download
          className="mt-6 inline-flex items-center px-4 py-2 border border-teal-500 text-teal-500 rounded-lg transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          <IoMdDownload className="mr-2" /> Download
        </a>
      </div>

       {/* Display and download Semester Learning Agreement */}
       <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Exchange Semester in Netherlands</h2>
        <div className="flex justify-center">
          <iframe
            src="/assets/Learning Agreement_Diyar Aydin.pdf"
            title="Learning Agreement"
            className="w-full max-w-4xl h-96 border border-teal-500 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <a
          href="/assets/Learning Agreement_Diyar Aydin.pdf"
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
