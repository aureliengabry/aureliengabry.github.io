import Title from "../components/Title";
import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";

function Contact() {
  return (
    <div className="max-h-[50vh]" id="contact">
      <Title title="Contact" />
      <div className="mt-20 flex flex-col items-center justify-center gap-4">
        <p className="text-lg">
          I'd love to hear from you! Whether you have a question, a project
          idea, or just want to connect, feel free to reach out.
        </p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <Github
            className="w-12 h-12 transition-transform hover:scale-110 duration-200 ease-in-out cursor-pointer"
            onClick={() =>
              window.open("https://github.com/aureliengabry", "_blank")
            }
          />
          <Linkedin
            className="w-16 h-16 transition-transform hover:scale-110 duration-200 ease-in-out cursor-pointer"
            onClick={() =>
              window.open("https://linkedin.com/in/aureliengabry", "_blank")
            }
          />

          <span className="border-2 h-12 items-center justify-center flex border-portfolio-text rounded-xl px-4 text-xl bg-portfolio-text font-bold text-portfolio-bg dark:bg-portfolio-text-dark dark:text-portfolio-text">
            <a href="mailto:your-email@example.com">Send me an email</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
