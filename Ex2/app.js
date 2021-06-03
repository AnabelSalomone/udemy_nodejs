const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Second middleware");
  res.send("<h1>Hello from the Users page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("First middleware");
  res.send("<h1>Hello from the Main page!</h1>");
});

app.listen(3000);
