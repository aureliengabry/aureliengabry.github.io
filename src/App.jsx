import Menu from "./components/Menu.jsx";
import Presentation from "./pages/Presentation.jsx";
import Technologies from "./pages/Technologies.jsx";
import Experiences from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-roboto bg-portfolio-bg dark:bg-portfolio-bg-dark text-portfolio-text dark:text-portfolio-text-dark transition-colors duration-500 ease-in-out">
      <Menu />
      <Presentation />
      <Technologies />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
