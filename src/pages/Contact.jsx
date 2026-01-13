import Title from "../components/Title";
import ContactButton from "../components/ContactButton";

function Contact() {
  return (
    <div className="max-h-[50vh]" id="contact">
      <Title title="Contact" />
      <div className="mt-20 flex flex-col items-center justify-center gap-4">
        <p className="text-lg px-4">
          I'd love to hear from you! Feel free to reach me via GitHub, LinkedIn, or
          email :
        </p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <ContactButton className="gap-6"/>
          <span className="border-2 h-12 items-center justify-center flex border-portfolio-text rounded-xl px-4 text-xl bg-portfolio-text font-bold text-portfolio-bg dark:bg-portfolio-text-dark dark:text-portfolio-text">
            <a href="mailto:aureliengabry@gmail.com">Send me an email</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
