import "../styles/card.css";
import useDeleteTask from "../hooks/useDeleteTask.jsx";
import { useModal } from "../contexts/ModalContext.jsx";
import useUpdateTask from "../hooks/useUpdateTask.jsx";

const Card = ({ task }) => {
  const { title, description, done, id, archived } = task;
  const completed = done ? "completed" : "incompleted";

  const { remove } = useDeleteTask();
  const { update } = useUpdateTask();
  const { openModal } = useModal();

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      const response = await remove(id);
      alert("Task deleted!");
      return response;
    }
  };

  return (
    <div className="card">
      <div className="main-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <footer>
        <span
          className={completed}
          style={{
            color: "#fff",
            backgroundColor: done ? "green" : "orange",
            padding: "3px 10px",
            borderRadius: "12px",
          }}
        >
          {completed}
        </span>
        <div className="icons">
          <i
            class="fa-solid fa-box-archive"
            title={archived ? "Unarchive" : "Archive"}
            onClick={() => update({ id, archived: !archived })}
          ></i>
          <i
            class="fa-solid fa-trash"
            title="Delete"
            onClick={() => handleDelete(id)}
          ></i>
          <i
            class="fa-solid fa-ellipsis-vertical"
            title="Edit"
            onClick={() => openModal(task)}
          ></i>
        </div>
      </footer>
    </div>
  );
};

export default Card;
