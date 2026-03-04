import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me</h1><p>Email : ahmadzipur@gmail.com</p>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.get("/user/ahmad", (req, res) => {
  res.sendStatus(200);
});

app.put("/user/ahmad", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/ahmad", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/ahmad", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});