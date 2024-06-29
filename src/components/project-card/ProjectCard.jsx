import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="box">
      <div className="img-wrapper">
        <img src="./imgs/projects/dentelo.png" />
      </div>
      <div className="text">
        <h2>dental</h2>
        <h3>a dentist website</h3>
        <p>
          Dentelo is a multi pages website, it is responsive and contains light
          and dark mode.{" "}
        </p>
        <div className="technologies">
          <h3>technologies</h3>
          <span>html5</span>
          <span>css3</span>
          <span>JavaScript</span>
          <span>FontAwesome</span>
        </div>
        <div className="btns">
          <a href="https://denteloo.netlify.app/" target="_blank">
            live demo
          </a>
          <a href="#" className="ml-2">
            source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
