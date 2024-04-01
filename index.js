require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Virennn_R");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/chai", (req, res) => {
  res.send("<h2>Chai and code backend</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
