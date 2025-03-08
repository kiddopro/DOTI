import "../styles/home-page.css";
import { useState } from "react";
import SideBar from "../layouts/SideBar.jsx";
import TaskList from "../components/TaskList.jsx";
import Header from "./Header.jsx";
import useTasks from "../hooks/useTasks.jsx";

const HomePage = () => {
  const { tasks, loading, error } = useTasks();
  const [activeLink, setActiveLink] = useState("all");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeLink === "all") return true;
    if (activeLink === "archived") return task.archived;
    if (activeLink === "completed") return task.done && !task.archived;
    if (activeLink === "incompleted") return !task.done && !task.archived;
    return true;
  });

  return (
    <div className="home-page">
      <SideBar activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="content">
        <Header />
        <TaskList tasks={filteredTasks} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default HomePage;
