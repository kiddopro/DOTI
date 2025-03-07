import Card from "./Card.jsx";
import "../styles/task-list.css";
import useTasks from "../hooks/useTasks.jsx";

const TaskList = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Card key={index} title={task.title} description={task.description} />
      ))}
    </div>
  );
};

export default TaskList;
