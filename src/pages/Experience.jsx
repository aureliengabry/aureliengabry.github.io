import Title from "../components/Title";

function Experiences() {
  const experience = [
    {
      date: "September 2021 - Present",
      role: "Software Engineer",
      company: "Arrive, Besançon, France",
      description:
        "Ticketing project for public transportation systems.\
        Developed backend services in Python to manage ticket validation and user data.\
        Implemented Docker-based microservices for scalable deployment on embedded hardware (being conform to ITxPT normes). \
        Using protocols such as MQTT, SNMP and FTP for communication between devices and central servers.\
        And develop the user interface using React for configuration and monitoring purposes.",
    },
    {
      date: "September 2021",
      role: "Graduate from Master in Embedded Systems and IoT",
      company: "Université de Science et Technologie, Besançon, France",
      description:
        "Completed a Master's degree specializing in Embedded Systems.\
        Gained in-depth knowledge of embedded system design, real-time operating systems, and low-level protocols.\
        Developed skills in programming languages such as C, and Python, along with hands-on experience in hardware interfacing and network communication.",
    },
    {
      date: "February 2021 - August 2021",
      role: "Intern Developer",
      company: "Expleo, Lyon, France",
      description:
        "Designed and implemented an indoor/outdoor geolocation system leveraging Raspberry Pi devices.\
        Developed Python-based firmware with MQTT communication for data transmission, and created a real-time monitoring interface using ThingsBoard.",
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
              <h4 className="text-lg font-semibold text-portfolio-text dark:text-portfolio-text-dark">
                {event.role} - {event.company}
              </h4>
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
