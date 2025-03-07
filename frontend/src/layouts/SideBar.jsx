import "../styles/sidebar.css";
import Button from "../components/Button.jsx";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <h2>Task - App</h2>
      <div className="buttonSection">
        <Button value="Add new task" />
      </div>
      <div className="links">
        <a className="active" href="">
          All tasks
        </a>
        <a href="">Archived Tasks</a>
        <a href="">Completed Tasks</a>
        <a href="">Incompleted Tasks</a>
      </div>
    </aside>
  );
};

export default SideBar;
