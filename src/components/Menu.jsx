import { useState } from "react";
import { customScrollTo } from "../utils/customScrollTo";
import Moon from "../assets/svg/moon.svg?react";
import Light from "../assets/svg/sun.svg?react";

function Menu() {
  const items = ["Technologies", "Experiences", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (item) => {
    customScrollTo(item.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed z-10 top-0 right-0 left-0 font-semibold text-2xl bg-portfolio-bg dark:bg-portfolio-bg-dark flex items-center lg:h-[5rem] h-[3.5rem] shadow-lg/20 dark:shadow-portfolio-text-dark p-6">
      <Light
        className="ml-4 justify-self-start w-12 h-12 hidden dark:block cursor-pointer"
        role="button"
        aria-label="Swith to light mode"
        onClick={() => {
          document.documentElement.classList.remove("dark");
        }}
      />
      <Moon
        className="ml-4 justify-self-start w-10 h-10 block dark:hidden cursor-pointer"
        role="button"
        aria-label="Switch to dark mode"
        onClick={() => {
          document.documentElement.classList.add("dark");
        }}
      />
      {/* Custom Hamburger Button - for responsive part */}
      <button
        className="ml-auto md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span
          className={`block w-7 h-0.5 bg-portfolio-text dark:bg-portfolio-text-dark transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-portfolio-text dark:bg-portfolio-text-dark transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-portfolio-text dark:bg-portfolio-text-dark transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop Menu - horizontal */}
      <div className="justify-self-end ml-auto hidden md:flex items-center gap-4">
        {items.map((item, idx) => (
          <div
            key={item}
            className={`${
              idx !== items.length - 1
                ? " border-r border-r-4 border-gray-400 pr-4"
                : ""
            }
            hover:text-portfolio-theme transition-colors duration-200 transition-ease-in-out cursor-pointer     
          `}
            role="button"
            aria-label={`Navigate to ${item}`}
            onClick={() => handleNavigate(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Mobile Menu - vertical dropdown */}
      <div
        className={`absolute top-[5rem] left-0 right-0 bg-portfolio-bg dark:bg-portfolio-bg-dark shadow-lg md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={item}
              className="border-b border-gray-300 dark:border-gray-600 py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-portfolio-theme transition-colors duration-200 cursor-pointer"
              role="button"
              aria-label={`Navigate to ${item}`}
              onClick={() => handleNavigate(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
