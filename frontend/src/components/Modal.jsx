import React, { useState } from "react";
import useCreateTask from "../hooks/useCreateTask";
import "../styles/modal.css";

const Modal = ({ onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { create, loading, error } = useCreateTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await create({
        title: task.title,
        description: task.description,
      });
      alert("Task Created!");
      onClose();
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder="Enter task title"
          />
          <br />
          <textarea
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder="Enter task description"
          />
          <br />
          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Task"}
          </button>
        </form>
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default Modal;
