import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const teste = {
  name: "Reinaldo",
  email: "Gamersolitavi4l@gmail.com",
  phone: "4899123133",
};

app.get("/users", (req, res) => {
  return res.json(teste);
});

app.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  return res.status(201).json(feedback);
});


app.listen(3333, () => {
  console.log("hi HTTP SERVER");
});
