import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://github.com/zakaria-elkoh" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/zakaria-elkoh/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/elkoh00/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <hr className="container" />
      <p>2024 &copy; All Right Reserved</p>
    </footer>
  );
};

export default Footer;
