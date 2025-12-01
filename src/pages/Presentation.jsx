import Logo from "../assets/svg/developer.svg?react";
import Arrow from "../assets/svg/double-arrow.svg?react";
import { customScrollTo } from "../utils/customScrollTo";

function Presentation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] font-bold shadow-lg/20">
      <span className="text-4xl ">
        I'm <span className="text-portfolio-theme text-6xl">Aurélien</span>
      </span>
      <span className="text-4xl mt-2 uppercase">FullStack Developer</span>

      <Logo className="mt-10 w-[75%]" />
      <div
        className="mt-48 z-1 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer animate-bounce"
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