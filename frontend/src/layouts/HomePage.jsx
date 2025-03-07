import "../styles/home-page.css";
import SideBar from "../layouts/SideBar.jsx";
import Card from "../components/Card.jsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <SideBar />
      <div className="content">
        <Card
          title={"Task 1"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
