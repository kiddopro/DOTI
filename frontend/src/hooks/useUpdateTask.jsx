import { useState } from "react";
import { updateTask } from "../services/taskService.js";

const useUpdateTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (task) => {
    setLoading(true);
    try {
      const updatedTask = await updateTask(task);
      return updatedTask;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error };
};

export default useUpdateTask;
