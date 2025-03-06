import Task from "../models/Task.js";

export default {
  async findAll() {
    return await Task.findAll();
  },

  async findById(id) {
    return await Task.findById(id);
  },

  async create(taskData) {
    return await Task.create(taskData);
  },

  async update(id, taskData) {
    return await Task.update(id, taskData);
  },

  async delete(id) {
    return await Task.delete(id);
  },
};
