import { useState, useEffect } from "react";
import { getTasks } from "../services/taskService.js";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return { tasks, loading, error };
};

export default useTasks;
