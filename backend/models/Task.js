import supabase from "../config/supabase.js";

class Task {
  static async findAll() {
    const { data, error } = await supabase.from("task").select();
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase.from("task").select().eq("id", id);
    if (error) throw error;
    return data;
  }

  static async create(taskData) {
    const { data, error } = await supabase.from("task").insert(taskData);
    if (error) throw error;
    return { message: "Task created!" };
  }

  static async delete(id) {
    const { data, error } = await supabase.from("task").delete().eq("id", id);
    if (error) throw error;
    return { message: "Task deleted!" };
  }

  static async update(id, taskData) {
    const { data, error } = await supabase
      .from("task")
      .update(taskData)
      .eq("id", id);
    if (error) throw error;
    return { message: "Task updated!" };
  }
}

export default Task;
