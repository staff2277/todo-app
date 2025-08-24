import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

//Handling the middleware to ensure the frontend can talk to the backend without interuptions

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Im in the home route and this is running on the sever");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
