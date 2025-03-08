import "../styles/sidebar.css";
import Button from "../components/Button.jsx";
import { useModal } from "../contexts/ModalContext.jsx";

const SideBar = ({ activeLink, onLinkClick }) => {
  const { openModal } = useModal();

  return (
    <aside className="sidebar">
      <h2>Task - App</h2>
      <div className="buttonSection">
        <Button onClick={openModal} value="Add new task" />
      </div>
      <div className="links">
        <a
          className={activeLink === "all" ? "active" : ""}
          href="#"
          onClick={() => onLinkClick("all")}
        >
          All tasks
        </a>
        <a
          className={activeLink === "archived" ? "active" : ""}
          href="#"
          onClick={() => onLinkClick("archived")}
        >
          Archived Tasks
        </a>
        <a
          className={activeLink === "completed" ? "active" : ""}
          href="#"
          onClick={() => onLinkClick("completed")}
        >
          Completed Tasks
        </a>
        <a
          className={activeLink === "incompleted" ? "active" : ""}
          href="#"
          onClick={() => onLinkClick("incompleted")}
        >
          Incompleted Tasks
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
