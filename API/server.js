const express = require("express");
const router = express.Router();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const tasks = [];

//GET /tasks - listar todas as tarefas
const getTasks = router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

//GET /tasks/:id - Buscar uma task por id
const getTaskId = router.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
});

//POST /tasks - Criar uma nova tarefa
const createTask = router.post("/tasks", (req, res) => {
  const task = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
  };

  tasks.push(task);

  res.status(201).json({ message: "Task create with successfully!", task });
});

//
const updateTask = router.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (!title && !description) {
    return res.status(400).json({ message: "Nothing to update" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description || tasks[taskIndex].description,
  };

  res.status(200).json({ message: "Task updated successfully!", task: tasks[taskIndex] });
});

// DELETE /tasks/:id - Excluir uma tarefa por ID
const deleteTask = router.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(taskIndex, 1);

  res.status(200).json({ message: "Task deleted successfully!" });
});

app.use(getTasks);
app.use(getTaskId);
app.use(createTask);
app.use(updateTask);
app.use(deleteTask);

app.listen(3000, () => {
  console.log("Server run with successfully ! http://localhost:3000");
});