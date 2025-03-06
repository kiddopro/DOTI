import express from "express";
import cors from "cors";
import config from "./config/config.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const { port: PORT, hostname: HOSTNAME } = config;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/task", taskRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("User Management API - Navigate to /api/tasks to get started");
});

app.listen(PORT, () => {
  console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});
