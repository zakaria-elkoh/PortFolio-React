import { useTranslation } from "react-i18next";
import "./Header.css";
import "../../index.css";
import LangSelect from "../lang-select/LangSelect";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = ({ isDardMode, setIsDarkMode }) => {
  const { t } = useTranslation("global");

  return (
    <div className="">
      <header id="home">
        <nav>
          <div className="wrapper container  bg-secondary dark:bg-primary">
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
                <input
                  onClick={() => {
                    setIsDarkMode(!isDardMode);
                    localStorage.setItem("isDarkMode", !isDardMode);
                  }}
                  className="dark-mode-toggle"
                  type="checkbox"
                />
              </li>
            </ul>
            <div>
              <Sheet>
                <SheetTrigger>
                  <i className="fa-solid fa-bars menu-icon"></i>
                </SheetTrigger>
                <SheetContent side={"left"} className="bg-white">
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
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
                <span> {t("firstName")}</span> {t("lastName")}
              </h1>
              <h4 className="capitalize">
                Full-Stack <span id="writer">{t("developer")}</span>
              </h4>
              <p>{t("header.description")}</p>
              {/* <!-- <a className='btn' href='./contact.html'>contact me</a> --> */}
              <a
                className="btn"
                download="Zakaria-Elkoh-CV"
                href="./imgs/docs/ZAKARIA_ELKOH_CV.pdf"
              >
                {t("download")} cv
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
