import "../styles/home-page.css";
import SideBar from "../layouts/SideBar.jsx";
import TaskList from "../components/TaskList.jsx";
import Header from "./Header.jsx";
const HomePage = () => {
  return (
    <div className="home-page">
      <SideBar />
      <div className="content">
        <Header />
        <TaskList />
      </div>
    </div>
  );
};

export default HomePage;
