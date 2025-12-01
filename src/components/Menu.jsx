import { customScrollTo } from "../utils/customScrollTo";
import Moon from "../assets/svg/moon.svg?react";
import Light from "../assets/svg/sun.svg?react";

function Menu() {
  const items = ["Technologies", "Experiences", "Contact"];
  return (
    <div className="fixed z-10 top-0 right-0 left-0 font-semibold text-2xl bg-portfolio-bg dark:bg-portfolio-bg-dark flex items-center h-[5rem]  shadow-lg/20 dark:shadow-portfolio-text-dark p-6">
      <Light
        className="ml-4 justify-self-start w-12 h-12 hidden dark:block cursor-pointer"
        onClick={() => {
          document.documentElement.classList.remove("dark");
        }}
      />
      <Moon
        className="ml-4 justify-self-start w-10 h-10 block dark:hidden cursor-pointer"
        onClick={() => {
          document.documentElement.classList.add("dark");
        }}
      />
      <div className="justify-self-end ml-auto flex items-center gap-4">
        {items.map((item, idx) => (
          <div
            className={`${
              idx !== items.length - 1
                ? " border-r border-r-4 border-gray-400 pr-4"
                : ""
            }
            hover:text-portfolio-theme transition-colors duration-200 transition-ease-in-out cursor-pointer     
          `}
            key={item}
            onClick={() => customScrollTo(item.toLowerCase())}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
