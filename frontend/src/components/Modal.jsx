import React, { useState, useEffect } from "react";
import useCreateTask from "../hooks/useCreateTask";
import useUpdateTask from "../hooks/useUpdateTask";
import "../styles/modal.css";

const Modal = ({ onClose, info }) => {
  const hasInfo = info.title !== undefined;

  const [task, setTask] = useState({
    title: hasInfo ? info.title : "",
    description: hasInfo ? info.description : "",
  });

  useEffect(() => {
    if (hasInfo) {
      setTask({
        title: info.title,
        description: info.description,
      });
    }
  }, [info]);

  const { create, loading, error } = useCreateTask();
  const {
    update,
    loading: updateLoading,
    error: updateError,
  } = useUpdateTask();

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = await update({
        id: info.id,
        title: task.title,
        description: task.description,
      });
      alert("Task Updated!");
      onClose();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form onSubmit={hasInfo ? handleUpdate : handleSubmit}>
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
          {hasInfo ? (
            <button type="submit" disabled={updateLoading}>
              {updateLoading ? "Updating..." : "Update Task"}
            </button>
          ) : (
            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Task"}
            </button>
          )}
        </form>
        {error && <p>Error: {error.message}</p>}
        {updateError && <p>Error: {updateError.message}</p>}
      </div>
    </div>
  );
};

export default Modal;
