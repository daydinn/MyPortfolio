import React, { useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import profilePic from "../assets/profile picture.jpeg";
import stone1 from "../assets/stone1.png";
import stone2 from "../assets/stone2.png";
import stone3 from "../assets/stone3.png";
import stone5 from "../assets/stone5.png";
import stone6 from "../assets/stone6.png";
import stone7 from "../assets/stone7.png";
import stone9 from "../assets/stone9.png";
import stone10 from "../assets/stone10.png";
import stone11 from "../assets/stone11.png";
import stone12 from "../assets/stone12.png";
import stone13 from "../assets/stone13.png";
import stone14 from "../assets/stone14.png";
import stone15 from "../assets/stone15.png";
import stone16 from "../assets/stone16.png";
import stone17 from "../assets/stone17.png";
import stone18 from "../assets/stone18.png";
import stone19 from "../assets/stone19.png";
import stone20 from "../assets/stone21.png";
import realtor1 from "../assets/realtor1.png";
import realtor2 from "../assets/realtor2.png";
import realtor3 from "../assets/realtor3.png";
import realtor4 from "../assets/realtor4.png";
import realtor5 from "../assets/realtor5.png";
import realtor6 from "../assets/realtor6.png";
import realtor7 from "../assets/realtor7.png";
import recipe1 from "../assets/recipe1.png";
import recipe2 from "../assets/recipe2.png";
import recipe3 from "../assets/recipe3.png";
import recipe4 from "../assets/recipe4.png";
import recipe5 from "../assets/recipe5.png";
import recipe6 from "../assets/recipe6.png";
import recipe7 from "../assets/recipe7.png";
import recipe8 from "../assets/recipe8.png";
import recipe9 from "../assets/recipe9.png";
import recipe10 from "../assets/recipe10.png";
import recipe11 from "../assets/recipe11.png";
import selfoptimierung1 from "../assets/selfoptimierung1.png";
import selfoptimierung2 from "../assets/selfoptimierung2.png";
import selfoptimierung3 from "../assets/selfoptimierung3.png";
import selfoptimierung4 from "../assets/selfoptimierung4.png";
import selfoptimierung5 from "../assets/selfoptimierung5.png";
import selfoptimierung6 from "../assets/selfoptimierung6.png";
import selfoptimierung7 from "../assets/selfoptimierung7.png";
import selfoptimierung8 from "../assets/selfoptimierung8.png";
import selfoptimierung9 from "../assets/selfoptimierung9.png";
import selfoptimierung12 from "../assets/selfoptimierung12.png";
import selfoptimierung13 from "../assets/selfoptimierung13.png";
import eshop1 from "../assets/eshop1.png";
import eshop2 from "../assets/eshop2.png";
import eshop3 from "../assets/eshop3.png";
import eshop4 from "../assets/eshop4.png";
import eshop5 from "../assets/eshop5.png";
import eshop6 from "../assets/eshop6.png";
import eshop7 from "../assets/eshop7.png";
import eshop8 from "../assets/eshop8.png";
import eshop9 from "../assets/eshop9.png";
import eshop10 from "../assets/eshop10.png";
import eshop11 from "../assets/eshop11.png";
import eshop12 from "../assets/eshop12.png";
import eshop13 from "../assets/eshop13.png";

const projects = [
  {
    title: "Gem Stone React Application",
    description:
      "I developed a stone collection application for crystal enthusiasts who want to explore, catalog, and learn more about various crystals and their properties. The app features a comprehensive crystal database with detailed information on characteristics, chakras, elements, zodiac signs, and planetary associations. Users can create and edit their own crystal collections, mark favorites, maintain a wishlist, and update their profile information and picture. It also includes user authentication for personalized profiles and offers an interactive, responsive UI. The application is built using React, Tailwind CSS for styling, GitHub for version control, and Firebase for authentication, database, and storage.",
    images: [
      stone1,
      stone2,
      stone3,
      stone5,
      stone6,
      stone7,
      stone9,
      stone10,
      stone11,
      stone12,
      stone13,
      stone14,
      stone15,
      stone16,
      stone17,
      stone18,
      stone19,
      stone20,
    ],
    liveLink: "https://stones-app-react.vercel.app/",
    sourceLink: "https://github.com/daydinn/stones-app-react",
  },
  {
    title: "Realtor Clone React Application ",
    description:
      "In this project, I developed a real estate application using React, Firebase, and Tailwind CSS. The app includes user authentication with Firebase Auth, allowing sign-up/in with username/password and Google OAuth. Users can reset their passwords and manage their profiles. Data is stored and fetched using Firebase Firestore, enabling full CRUD operations. The application features a modern UI with Tailwind CSS, a map integration using Leaflet, and an image slider with Swiper JS. Additional functionalities include private routes, custom hooks, notifications with React Toastify, and deployment to Vercel. Throughout the project, I utilized React hooks like useState and useEffect, React Router for navigation, and created reusable components such as listing cards.",
    images: [
      realtor1,
      realtor2,
      realtor3,
      realtor4,
      realtor5,
      realtor6,
      realtor7,
    ],
    liveLink: "https://realtor-clone-react-woad.vercel.app/",
    sourceLink: "https://github.com/daydinn/realtor-clone-react",
  },
  {
    title: "Self Optimization Angular Application",
    description:
      "I developed a mobile first web application as an MVP for my bachelor's thesis to enhance users' quality of life through a modular design, featuring a Home component for personalized greetings, a To-Do List for task management, a Moods component for mood tracking and suggestions, an Activity component for categorizing and adding activities, a Scores component for displaying progress, and a User Progress component for detailed activity and mood tracking, all built using HTML, CSS, TypeScript, and Angular, with data persistence managed by LocalStorage and a responsive design implemented with Bootstrap.",
    images: [
      selfoptimierung1,
      selfoptimierung2,
      selfoptimierung12,
      selfoptimierung13,
      selfoptimierung3,
      selfoptimierung4,
      selfoptimierung5,
      selfoptimierung7,
      selfoptimierung8,
      selfoptimierung9,
    ],
    liveLink: "https://daydinn.github.io/#/home",
    sourceLink: "https://github.com/daydinn/daydinn.github.io",
  },
  {
    title: "Recipe Management Android App",
    description:
      "As part of my 'Mobile Computing' course, I developed an Android app to search, save, and manage cooking recipes using Java in IntelliJ IDEA with Android Studio. I focused on creating a user-friendly experience, allowing users to search for recipes by name, ingredients, and dietary preferences, view detailed recipe information, and save favorite recipes to a personal cookbook . I integrated the Spoonacular API for recipe data and used SQLite for offline storage. The app features a dynamic UI with activities and fragments, data transfer through intents, and comprehensive search filters. It supports both online and offline modes, allowing users to access their saved recipes anytime. You can check out the project on my GitHub and explore code and functionalities in detail.",
    images: [
      recipe1,
      recipe2,
      recipe3,
      recipe4,
      recipe5,
      recipe6,
      recipe8,
      recipe9,
      recipe10,
      recipe11,
    ],
    sourceLink: "https://github.com/daydinn/MobiComp",
  },
  {
    title: "eShop Java GUI Application",
    description:
      "eShop is my first Java application, designed to simulate an online shopping platform. The app includes functionalities for managing articles and a shopping cart, along with features for generating invoices. The implemented components include the ability to create articles, clear the shopping cart, and generate invoices. However, there are several features that are yet to be completed, including customer and employee management, logging in and out, sorting articles by number or description, updating the quantity of items in the cart, purchasing articles, and a changelog for tracking updates. Key completed features include creating articles, clearing the shopping cart, generating invoices, and maintaining the shopping cart. The application aims to provide a foundational framework for a fully functional e-commerce platform and serves as a significant learning project in Java development. ",
    images: [
      eshop1,
      eshop2,
      eshop3,
      eshop4,
      eshop5,
      eshop6,
      eshop8,
      eshop9,
      eshop10,
      eshop11,
      eshop12,
      eshop13,
    ],
    sourceLink: "https://github.com/daydinn/prog2",
  },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleNextImage = (projectIndex, images) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [projectIndex]:
        prevState[projectIndex] !== undefined
          ? (prevState[projectIndex] + 1) % images.length
          : 0,
    }));
  };

  const handlePrevImage = (projectIndex, images) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [projectIndex]:
        prevState[projectIndex] !== undefined
          ? (prevState[projectIndex] - 1 + images.length) % images.length
          : images.length - 1,
    }));
  };

  const handleFullScreenNextImage = () => {
    setFullScreenImage((prevState) => ({
      ...prevState,
      index: (prevState.index + 1) % prevState.images.length,
    }));
  };

  const handleFullScreenPrevImage = () => {
    setFullScreenImage((prevState) => ({
      ...prevState,
      index:
        (prevState.index - 1 + prevState.images.length) %
        prevState.images.length,
    }));
  };

  const handleImageClick = (projectIndex, image, images) => {
    setFullScreenImage({ index: 0, images });
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto w-full lg:w-3/6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="flex flex-col gap-10 items-center">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full border border-gray-200"
            >
              <div className="relative">
                <div className="w-full h-[48rem] flex justify-center items-center">
                  <img
                    src={project.images[currentImageIndex[projectIndex] || 0]}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain select-none outline-none cursor-pointer"
                    onClick={() =>
                      handleImageClick(
                        projectIndex,
                        project.images[currentImageIndex[projectIndex] || 0],
                        project.images,
                      )
                    }
                    style={{
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  />
                </div>
                <MdOutlineNavigateBefore
                  className="absolute inset-y-1/2 left-2 text-6xl text-cyan-500 cursor-pointer transform -translate-y-1/2"
                  onClick={() => handlePrevImage(projectIndex, project.images)}
                />
                <MdOutlineNavigateNext
                  className="absolute inset-y-1/2 right-2 text-6xl text-cyan-500 cursor-pointer transform -translate-y-1/2"
                  onClick={() => handleNextImage(projectIndex, project.images)}
                />
              </div>
              <div className="text-center text-gray-700 mt-2">
                {currentImageIndex[projectIndex] !== undefined
                  ? currentImageIndex[projectIndex] + 1
                  : 1}{" "}
                / {project.images.length}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-start">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 text-white rounded mr-4 transition duration-300 hover:bg-teal-700"
                  >
                    See Live
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-500 text-white rounded transition duration-300 hover:bg-gray-700"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center">
          <MdOutlineNavigateBefore
            className="absolute inset-y-1/2 left-2 text-6xl text-cyan-500 cursor-pointer transform -translate-y-1/2"
            onClick={handleFullScreenPrevImage}
          />
          <img
            src={fullScreenImage.images[fullScreenImage.index]}
            alt="Full Screen"
            className="max-w-full max-h-full object-contain select-none outline-none"
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          />
          <MdOutlineNavigateNext
            className="absolute inset-y-1/2 right-2 text-6xl text-cyan-500 cursor-pointer transform -translate-y-1/2"
            onClick={handleFullScreenNextImage}
          />
          <IoIosCloseCircleOutline
            className="absolute top-4 right-4 text-6xl text-white cursor-pointer"
            onClick={closeFullScreen}
          />
          <div className="absolute bottom-4 text-white text-xl">
            {fullScreenImage.index + 1} / {fullScreenImage.images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
