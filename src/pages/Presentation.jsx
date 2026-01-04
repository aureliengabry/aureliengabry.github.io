import { useState, useEffect } from "react";
import Arrow from "../assets/svg/double-arrow.svg?react";
import Profil from "../assets/images/profil.png?react";
import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";
import Background from "../assets/svg/prism.svg?react";
import { customScrollTo } from "../utils/customScrollTo";

function Presentation() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Check initial state
    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] bg-none font-bold shadow-lg/20">
      {/* Background Prism - only show when dark mode is active */}
      {!isDarkMode && <Background className="absolute top-0 left-0 w-full h-full z-0 opacity-60" />}
      <div className="flex flex-row flex-wrap items-center justify-center z-1">
        <img
          src={Profil}
          alt="Profil fullstack developer"
          className={`m-10 md:w-80 md:h-80 w-60 h-60 rounded-full object-cover border-portfolio-text justify-center block shadow-2xl ${isDarkMode ? "bg-gray-100 border-4 border-white" : ""}`}
        />

        <div className="flex flex-col md:ml-8 md:items-start items-center justify-center lg:mt-0 mt-8 z-1">
          <span className="md:text-5xl text-3xl text-portfolio-theme">
            Aurélien GABRY
          </span>
          <span className="md:text-6xl sm:text-4xl text-3xl mt-2 uppercase ">
            FullStack Developer
          </span>
          <span className="inline-flex gap-4 mt-2 items-center justify-center">
            <Github
              className="w-12 h-12 transition-transform hover:scale-110 duration-200 ease-in-out cursor-pointer"
              role="button"
              aria-label="Github profile"
              onClick={() =>
                window.open("https://github.com/aureliengabry", "_blank")
              }
            />
            <Linkedin
              className="w-12 h-12 transition-transform hover:scale-110 duration-200 ease-in-out cursor-pointer"
              role="button"
              aria-label="LinkedIn profile"
              onClick={() =>
                window.open("https://linkedin.com/in/aureliengabry", "_blank")
              }
            />
          </span>
        </div>
      </div>
      <div
        className="mt-48 z-1 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer animate-bounce"
        role="button"
        aria-label="Scroll to technologies"
        onClick={() => {
          customScrollTo("technologies");
        }}
      >
        <Arrow className="h-15 w-15 border-4 p-2 rounded-full" />
      </div>
    </div>
  );
}

export default Presentation;
