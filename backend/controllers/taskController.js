import taskService from "../services/taskService.js";

export default {
  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getTaskById(req, res) {
    try {
      const task = await taskService.getTaskById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createTask(req, res) {
    try {
      const newTask = await taskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updateTask(req, res) {
    try {
      const newTask = await taskService.updateTask(req.params.id, req.body);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteTask(req, res) {
    try {
      const newTask = await taskService.deleteTask(req.params.id);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
