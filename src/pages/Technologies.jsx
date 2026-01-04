import Backend from "../assets/svg/server.svg?react";
import Frontend from "../assets/svg/screen.svg?react";
import Embedded from "../assets/svg/embedded.svg?react";
import Skills from "../components/Skills";
import Title from "../components/Title";

function Technologies() {
  const front_skills = {
    icon: <Frontend className="h-30 w-30 mx-auto  mb-4" />,
    title: "Front-end",
    stack:  ["HTML5", "CSS3", "JavaScript","React", "Vue", "Redux","TailwindCSS", "Streamlit", "Figma"],
    description:
      "Create responsive and user-friendly interfaces with React and TailwindCSS.\
       I am proficient in HTML5, CSS3, and JavaScript, which allows me to design visually engaging layouts that enhance user experience.\
       In addition, I have hands-on experience using Streamlit to develop quickly interactive web applications (notably for POC).",
  };
  const back_skills = {
    icon: <Backend className="h-30 w-30 mx-auto  mb-4" />,
    title: "Back-end",
    stack: [
      "Python",
      "SQLite",
      "SQLAlchemy",
      "Flask",
      "FastAPI",
      "Asyncio",
      "Docker" ,
      "Docker Compose",
      "Nginx",
      "MQTT",
      "FTP",
      "Avahi",
      "Zeroconf",
    ],
    description:
      "I use microservice-based systems using Docker Compose, ensuring consistent multi-service environments and smooth integration workflows on devices. \
       My primary backend language is Python, which I use to build efficient APIs which will constitute the services, and integrate multiple protocols to communicate between equipment (MQTT, FTP, SNMP).\
       I also work with databases such as SQLite (notably using SQLAlchemy), choosing compact and resource-friendly solutions well-suited for embedded systems.",
  };
  const embedded_skills = {
    icon: <Embedded className="h-30 w-30 mx-auto  mb-4" />,
    title: "Tools",
    stack: ["Jenkins", "SonarQube", "Nexus", "Git", "Github"],
    description:
    "I utilize automated CI/CD pipelines using Jenkins to streamline build, test, and deployment processes.\
    Integration tests are executed as part of these pipelines to ensure system stability and reliability before release.\
    Code quality and coverage are continuously monitored through SonarQube, helping maintain high development standards."
  };
  return (
    <div id="technologies">
      <Title title="Technologies" />
      <div className="mt-2 px-8 flex flex-wrap items-center justify-center gap-8">
        {[front_skills, back_skills, embedded_skills].map((skill) => (
          <Skills
            key={skill.title}
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
