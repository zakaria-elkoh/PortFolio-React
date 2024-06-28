import BackToTop from "@/components/back-to-top/BackToTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import {
  Experience,
  Contact,
  Projects,
  About,
  Education,
} from "@/components/sections/index";

const Home = ({ isDardMode, setIsDarkMode }) => {
  return (
    <>
      <Header isDardMode={isDardMode} setIsDarkMode={setIsDarkMode} />
      <About />
      <BackToTop />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
