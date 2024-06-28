import MainHeading from "@/components/main-heading/MainHeading";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation("global");
  return (
    <section className="experience section" id="education">
      <MainHeading title={t("education")} description={t("my education")} />

      <div className="exp-boxes container">
        <div className="exp-box">
          <div className="date">Sep 2023 - Now</div>
          <div className="text">
            <h3>First year Full-stack developer at YouCode-UM6P</h3>
            <p>
              YouCode is a programming school offering training programs in
              software development, web development. YouCode focuses on
              practical and concrete learning.
            </p>
            <span>- Yousoufia, Morocco</span>
          </div>
        </div>
      </div>

      <div className="exp-boxes container">
        <div className="exp-box">
          <div className="date">Sep 2019 - Jun 2021</div>
          <div className="text">
            <h3>Diploma in Tourist Animation (ISTHA)</h3>
            <p>
              D.T.A was a versatile experience and Management Skills and Event
              Planning and Intercultural Communication, followed by a Practical
              Internship solving problems and guaranteeing customer
              satisfaction.
            </p>
            <span>- Agadir, Morocco</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
