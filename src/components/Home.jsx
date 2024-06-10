import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
