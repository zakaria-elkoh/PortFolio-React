import "./MainHeading.css";

const MainHeading = ({ title, description }) => {
  return (
    <div className="main-heading">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default MainHeading;
