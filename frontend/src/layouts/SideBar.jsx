import "../styles/sidebar.css";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import { useState } from "react";

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <aside className="sidebar">
      <h2>Task - App</h2>
      <div className="buttonSection">
        <Button onClick={handleButtonClick} value="Add new task" />
      </div>
      <div className="links">
        <a className="active" href="">
          All tasks
        </a>
        <a href="">Archived Tasks</a>
        <a href="">Completed Tasks</a>
        <a href="">Incompleted Tasks</a>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </aside>
  );
};

export default SideBar;
