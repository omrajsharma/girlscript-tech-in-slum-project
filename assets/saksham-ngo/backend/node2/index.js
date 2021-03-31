const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// app.get("/",function (req, res) {

// });
app.use(bodyParser.urlencoded({ extended: true }));
// arrow function
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  //   console.log(req.body.n1);
  var ans = parseInt(req.body.n1) + parseInt(req.body.n2);
  res.send(`the processed number is ${ans}`);
});

app.get("/result", (req, res) => {
  res.sendFile(__dirname + "/result.html");
});

app.listen(5000);
