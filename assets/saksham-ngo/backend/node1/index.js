const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/temp", function (req, res) {
  res.send("Hello temp");
});

app.listen(5000);
