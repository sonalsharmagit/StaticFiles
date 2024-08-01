// --------------SERVER.JS FIRST CLASS ----------
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);




