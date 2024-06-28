import ProjectCard from "@/components/project-card/ProjectCard";
import "./Projects";
import MainHeading from "@/components/main-heading/MainHeading";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");

  return (
    <section className="section" id="projects">
      <MainHeading title={t("projects")} description={t("my projects")} />

      <div className="projects container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <div>
          <a className="btn" href="./projects.html">
            see more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
