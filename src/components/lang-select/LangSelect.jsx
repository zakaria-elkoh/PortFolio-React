import { useTranslation } from "react-i18next";
import "./LangSelect.css";

const LangSelect = () => {
  const { t, i18n } = useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    // <div className="nav-wrapper">
    //   <div className="sl-nav">
    //     Lang:
    //     <ul>
    //       <li>
    //         <b>Deutsch</b>{" "}
    //         <i className="fa fa-angle-down" aria-hidden="true"></i>
    //         <div className="triangle"></div>
    //         <ul>
    //           <li>
    //             <i className="sl-flag flag-usa">
    //               <div id="germany"></div>
    //             </i>{" "}
    //             <span className="active">English</span>
    //           </li>
    //           <li>
    //             <i className="sl-flag flag-de">
    //               <div id="germany"></div>
    //             </i>{" "}
    //             <span>Spanish</span>
    //           </li>
    //           <li>
    //             <i className="sl-flag flag-ge">
    //               <div id="germany"></div>
    //             </i>{" "}
    //             <span>Arabic</span>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div>
      <select name="" id="" onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default LangSelect;
