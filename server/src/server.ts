import express from "express";

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

app.post("/feedback", (req, res) => {
    console.log(req.body);
  return res.send("Hi");

});

app.listen(3333, () => {
  console.log("hi HTTP SERVER");
});
