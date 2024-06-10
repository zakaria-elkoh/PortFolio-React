import { useTranslation } from "react-i18next";
import "./Header.css";
import LangSelect from "../lang-select/LangSelect";

const Header = () => {
  const { t } = useTranslation("global");

  return (
    <div className="">
      <header id="home">
        <nav>
          <div className="wrapper container">
            <a className="logo py-6" href="/">
              <img src="./imgs/logo/logo-orange.png" id="logo" />
            </a>
            <ul>
              <li id="tohome" className="active">
                <a href="#home">home</a>
              </li>
              <li id="toabout">
                <a href="#about">about </a>
              </li>
              <li id="toprojects">
                <a href="#projects">projects</a>
              </li>
              {/* <!-- <li id="toservices"><a href="#services">Services</a></li> --> */}
              <li id="toexperience">
                <a href="#experience">Experience</a>
              </li>
              <li id="toeducation">
                <a href="#education">Education</a>
              </li>
              {/* <!-- <li><a href="#">portfolio</a></li> --> */}
              <li id="tocontact">
                <a href="#contact">contact</a>
              </li>
              <li>
                <input className="dark-mode-toggle" type="checkbox" />
              </li>
            </ul>
            <i className="fa-solid fa-bars menu-icon"></i>
            <LangSelect />
          </div>
        </nav>
        <section className="section" id="home">
          <div className="header-section container">
            <div className="content">
              <h4>
                {/* Hi There, <span style="color: #ea4020;">I'm</span>{" "} */}
                Hi There, <span className="color-[#ea4020]">I'm</span>
              </h4>
              <h1>
                {" "}
                <span>Zakaria</span> Elkoh
              </h1>
              <h4>
                Full-Stack <span id="writer">Developer</span>
              </h4>
              <p>{t("header.description")}</p>
              {/* <!-- <a className='btn' href='./contact.html'>contact me</a> --> */}
              <a
                className="btn"
                download="Zakaria-Elkoh-CV"
                href="./imgs/docs/ZAKARIA_ELKOH_CV.pdf"
              >
                download cv
              </a>
            </div>
            <div className="img-and-icons">
              <div className="img-wrapper">
                <div className="img">
                  <img
                    src="../../../public/images/svg/undraw_programming_re_kg9v (1).svg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
