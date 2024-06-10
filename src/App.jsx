import "./App.css";
import BackToTop from "./components/back-to-top/BackToTop";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainHeading from "./components/main-heading/MainHeading";
import About from "./components/sections/about/About";

function App() {
  return (
    <main className="">
      <Header />
      <MainHeading title="about" description="about me" />
      <About />
      <BackToTop />
      <Footer />
    </main>
  );
}

export default App;
