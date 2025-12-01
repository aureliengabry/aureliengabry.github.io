import Backend from "../assets/svg/server.svg?react";
import Frontend from "../assets/svg/screen.svg?react";
import Embedded from "../assets/svg/embedded.svg?react";
import Skills from "../components/Skills";
import Title from "../components/Title";


function  Technologies() {
  const front_skills = {
    icon: <Frontend className="h-30 w-30 mx-auto  mb-4" />,
    title: "Front-end",
    stack: ["React", "TailwindCSS", "HTML5", "CSS3", "JavaScript", "Streamlit"],
    description:
      "I excel in front-end development, crafting responsive and user-friendly interfaces using React and TailwindCSS. My expertise includes building dynamic web applications with a focus on performance and accessibility. I am proficient in HTML5, CSS3, and JavaScript, enabling me to create visually appealing designs that enhance user experience. Additionally, I have experience with Streamlit for developing interactive data applications quickly and efficiently.",
  };
  const back_skills = {
    icon: <Backend className="h-30 w-30 mx-auto  mb-4" />,
    title: "Back-end",
    stack: ["Python", "SQLite", "Flask", "FastAPI"],
    description:
      "I specialize in backend development for embedded equipment, focusing on lightweight, reliable, and maintainable architectures. I design and deploy microservice-based systems using Docker Compose, ensuring consistent multi-service environments and smooth integration workflows. My primary backend language is Python, which I use to build clean, efficient APIs and services. I also work with databases such as SQLite, choosing compact and resource-friendly solutions well-suited for embedded systems.",
  };
  const embedded_skills = {
    icon: <Embedded className="h-30 w-30 mx-auto  mb-4" />,
    title: "Tools",
    stack: ["Python", "SQLite", "Flask", "FastAPI"],
  };
  return (
    <div id="technologies">
      <Title title="Technologies" />
      <div className="mt-2 px-8 flex flex-wrap items-center justify-center gap-8">
        {[front_skills, back_skills, embedded_skills].map((skill) => (
          <Skills
            icon={skill.icon}
            title={skill.title}
            stack={skill.stack}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
