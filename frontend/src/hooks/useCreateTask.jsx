import { useState } from "react";
import { createTask } from "../services/taskService.js";

const useCreateTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (task) => {
    setLoading(true);
    try {
      const newTask = await createTask(task);
      return newTask;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { create, loading, error };
};

export default useCreateTask;
