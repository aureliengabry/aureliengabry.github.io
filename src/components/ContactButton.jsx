import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";

function ContactButton({ className = "" }) {
  const url = {
    github: "https://github.com/aureliengabry",
    linkedin: "https://www.linkedin.com/in/aurelien-gabry",
  };
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Github
        className="w-12 h-12 transition-transform hover:scale-110 duration-200 ease-in-out cursor-pointer"
        role="button"
        aria-label="Github profile"
        onClick={() => window.open(url.github, "_blank")}
      />
      <Linkedin
        className="w-12 h-12 transition-transform hover:scale-110 duration-200 ease-in-out cursor-pointer"
        role="button"
        aria-label="LinkedIn profile"
        onClick={() => window.open(url.linkedin, "_blank")}
      />
    </div>
  );
}

export default ContactButton;
