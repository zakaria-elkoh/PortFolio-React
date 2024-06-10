import "./About.css";

const About = () => {
  return (
    <section className="about-section section" id="about">
      <div className="about container">
        <div className="img">
          <img
            src="../../../../public/images/svg/undraw_feeling_proud_qne1.svg"
            alt=""
          />
        </div>

        <div className="content">
          <h3>about me</h3>
          <h5>
            Hello, My name is Zakaria Elkoh and I am a Full-Stack developer
          </h5>
          <p>
            I initially started coding as a hobby, but quickly realized that it
            was something I was truly passionate about and decided to pursue a
            career change. It was a good decision, and I am excited to be able
            to do what I love and help others in the process.
          </p>
          <h3>Languages:</h3>
          <div className="skills">
            <span>JavaScript</span>
            <span>Node JS</span>
            <span>PHP</span>
          </div>
          <h3>Frameworks:</h3>
          <div className="skills">
            <span>React JS</span>
            <span>Express JS</span>
            <span>Laravel</span>
            <span>Tailwind CSS</span>
            <span>Bootstrap</span>
          </div>
          <h3>Version Control System And Other Technologies:</h3>
          <div className="skills">
            <span>Git</span>
            <span>Github</span>
            <span>Redux</span>
            <span>React Query</span>
            <span>REST APIs</span>
            <span>JWT</span>
            <span>Axios</span>
            <span>Postman</span>
            <span>HTML</span>
            <span>MUI</span>
            <span>shadci/ui</span>
            <span>CSS</span>
          </div>
          <h3>SGBD:</h3>
          <div className="skills">
            <span>MySql</span>
            <span>MongoDB</span>
          </div>
          <h3>Methode Agile:</h3>
          <div className="skills">
            <span>Scrum</span>
          </div>
          {/* <!-- <h3>
                work process
            </h3>
            <div className="work-process">
                <span data-num="#1" >Research</span>
                <span data-num="#2">Design</span>
                <span data-num="#3">Coding</span>
                <span data-num="#4">Launch</span>
            </div> --> */}
        </div>
      </div>
    </section>
  );
};

export default About;
