import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let todos = [];
try {
  const data = fs.readFileSync("todos.json", "utf-8");
  todos = JSON.parse(data);
} catch (error) {
  console.log("No todos.json found, starting fresh");
  todos = [];
}

function saveTodos() {
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...req.body,
  };
  todos.push(newTodo);
  saveTodos();
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...req.body } : todo
  );
  saveTodos();
  res.json({ message: "Todo updated" });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
