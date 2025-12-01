import Title from "../components/Title";

function Experiences() {
  const experience = [
    {
      date: "2022 - Present",
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      description:
        " Developing scalable web applications and services using modern frameworks and technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      date: "2020 - 2022",
      role: "Junior Developer",
      company: "Web Innovations LLC",
      description:
        " Assisted in the development and maintenance of client websites and applications. Gained experience in front-end and back-end technologies, contributing to various projects and improving coding skills.",
    },
  ];
  return (
    <div
      className="min-h-[100vh] shadow-lg/20 dark:shadow-portfolio-text-dark"
      id="experiences"
    >
      <Title title="Experiences" />
      <div className="relative w-11/12 md:w-3/4 mx-auto py-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 rounded-lg bg-gray-300 h-full"></div>

        {experience.map((event, i) => (
          <div
            key={i}
            className={`relative w-full md:w-1/2 py-6 px-4 ${
              i % 2 === 0
                ? "md:pr-12 md:text-right md:left-0"
                : "md:pl-12 md:left-1/2"
            }`}
          >
            {/* Dot on vertical line */}
            <div
              className={`absolute top-8 w-5 h-5 bg-portfolio-theme border-4 border-white rounded-full shadow-md 
            ${i % 2 === 0 ? "md:right-[-10px]" : "md:left-[-10px]"}
          `}
            ></div>

            {/* Card */}
            <div className="bg-portfolio-white  shadow-xl/30 dark:shadow-portfolio-text-dark rounded-lg dark:bg-portfolio-bg-dark dark:border-portfolio-text-dark p-4">
              <h3 className="text-xl font-bold text-portfolio-theme">{event.date}</h3>
              <p className="text-portfolio-text dark:text-portfolio-text-dark">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
