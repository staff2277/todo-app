import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://todo-app-frontend-xeux.onrender.com",
      "https://todo-app-backend-6zsb.onrender.com",
    ],
  })
);
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

app.get("/", (req, res) => {
  res.json({
    message: "Todo API is running!",
    endpoints: ["/todos", "/health"],
    todos_count: todos.length,
  });
});

app.get("/todos", (req, res) => {
  console.log("GET /todos - returning", todos.length, "todos");
  res.json(todos);
});

app.post("/todos", (req, res) => {
  console.log("POST /todos - received:", req.body);
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...req.body,
  };
  todos.push(newTodo);
  saveTodos();
  console.log("Created new todo:", newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("PUT /todos/" + id, "- received:", req.body);
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...req.body } : todo
  );
  saveTodos();
  res.json({ message: "Todo updated" });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("DELETE /todos/" + id);
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  console.log("Deleted todo, remaining:", todos.length);
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Loaded", todos.length, "existing todos");
});
