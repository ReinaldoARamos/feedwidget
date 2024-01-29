import express from "express";
import { routes } from "./route";
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://localhost:3000'
}))
app.use(routes)


app.listen(3333, () => {
  console.log("hi HTTP SERVER");
});

