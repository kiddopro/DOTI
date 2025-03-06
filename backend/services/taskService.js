import taskDAO from "../dao/taskDAO.js";

export default {
  async getAllTasks() {
    return await taskDAO.findAll();
  },

  async getTaskById(id) {
    if (!id) throw new Error("Id is required");
    return await taskDAO.findById(id);
  },

  async createTask(taskData) {
    if (!taskData) throw new Error("Task data is required");
    const { title, description } = taskData;
    if (!title) throw new Error("Title is required");
    if (!description) throw new Error("Description is required");
    return await taskDAO.create(taskData);
  },

  async updateTask(id, taskData) {
    if (!id) throw new Error("Id is required");
    if (!taskData) throw new Error("Task data is required");
    return await taskDAO.update(id, taskData);
  },

  async deleteTask(id) {
    if (!id) throw new Error("Id is required");
    return await taskDAO.delete(id);
  },
};
