import MainHeading from "@/components/main-heading/MainHeading";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation("global");
  return (
    <section className="experience section" id="experience">
      <MainHeading title={t("experience")} description={t("my experience")} />

      <div className="exp-boxes container">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experience;
