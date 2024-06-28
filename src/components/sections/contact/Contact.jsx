import MainHeading from "@/components/main-heading/MainHeading";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <section className="contact section bg-red-200" id="contact">
      <MainHeading title={t("contact")} description={t("my contact")} />
      <div className="container contact-content">
        <form
          action="https://formspree.io/f/xrgvwpkw"
          method="POST"
          id="my-form"
        >
          <h3>send me a message:</h3>
          <input type="text" placeholder="Your Name" name="name" /> <br />
          <input type="email" placeholder="Your Email" name="email" /> <br />
          <textarea placeholder="Message" id="" name="message"></textarea>
          <button className="btn" id="form-btn">
            Send
          </button>
          <div className="submition-alert">
            <p id="my-form-status">form been sent and thank you</p>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </form>

        <div className="info">
          <h3>get in touch:</h3>
          <div className="name">
            <i className="fa-solid fa-user"></i> name <br />
            <p> Zakaria Elkoh </p>
          </div>
          <div className="email">
            <i className="fa-solid fa-envelope"></i> email <br />
            <a href="mailto:zakaria.elkoh10@gmail.com">
              zakaria.elkoh10@gmail.com
            </a>
          </div>
          <div className="email">
            <i className="fa-brands fa-linkedin-in"></i> linkedin <br />
            <a href="https://www.linkedin.com/in/zakaria-elkoh" target="_blank">
              zakaria-elkoh
            </a>
          </div>
          <div className="number">
            <i className="fa-solid fa-phone"></i> phone <br />
            <a href="tel:0705074846">+2127 0507-4846 </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
