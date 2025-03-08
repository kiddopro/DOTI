import Card from "./Card.jsx";
import "../styles/task-list.css";
import ButtonAdd from "./ButtonAdd.jsx";
import { useModal } from "../contexts/ModalContext.jsx";

const TaskList = ({ tasks, loading, error }) => {
  const { openModal } = useModal();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Card key={index} task={task} />
      ))}
      <ButtonAdd onClick={openModal} />
    </div>
  );
};

export default TaskList;
