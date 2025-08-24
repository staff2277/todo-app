import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

//Handling middleware to ensure that the front end is able to talk with the backend

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn Node basics", completed: false },
  { id: 2, task: "Build CRUD API", completed: false },
];

app.get("/", (req, res) => {
  res.json({ message: "This a message that is running in the backend" });
});

//Starting the server
app.listen(PORT, () => {
  console.log("The server is up and running");
});
