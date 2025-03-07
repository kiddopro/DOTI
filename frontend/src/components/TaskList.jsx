import Card from "./Card.jsx";
import "../styles/task-list.css";
import useTasks from "../hooks/useTasks.jsx";
import ButtonAdd from "./ButtonAdd.jsx";
import { useModal } from "../contexts/ModalContext.jsx";
const TaskList = () => {
  const { tasks, loading, error } = useTasks();
  const { openModal } = useModal();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Card key={index} title={task.title} description={task.description} />
      ))}
      <ButtonAdd onClick={openModal} />
    </div>
  );
};

export default TaskList;
