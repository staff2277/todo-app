import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

//Handling the middleware to ensure the frontend can tall to the backend

app.use(cors());
app.use(express.json());
