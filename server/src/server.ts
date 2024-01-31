import express from "express";
import { routes } from "./route";
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://feedwidget-one.vercel.app', // Remova a barra no final
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}))
app.use(routes)


app.listen(process.env.PORT || 3333, () => {
  console.log("hi HTTP SERVER");
});

