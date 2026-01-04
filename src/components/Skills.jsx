function Skills({ icon, title, stack, description }) {
  return (
    <div className="xl:min-h-[40rem] md:min-h-[45rem] sm:min-h-[30rem] xl:w-[30%] md:w-[45%] sm:w-[90%] bg-portfolio-white dark:bg-portfolio-bg-dark shadow-xl/30 dark:shadow-portfolio-text-dark rounded-lg p-8">
      {icon}
      <h1 className="text-2xl capitalize text-center font-bold mb-4">
        {title}
      </h1>
      <span className="block h-1 w-[50%] bg-portfolio-text dark:bg-portfolio-text-dark mx-auto mb-6 rounded-full"/>
      <p className="text-justify">{description}</p>
      <div className="flex  flex-wrap items-center gap-2 mt-8">
       <span className="text-2xl font-semibold">Skills :</span> {stack.map((tech) => (
          <div
            className="px-3 capitalize h-10 bg-portfolio-theme text-white border-b-1 border-r-1 border-portfolio-bg flex items-center justify-center rounded-full shadow-lg/20 dark:shadow-portfolio-text-dark"
            key={tech}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;