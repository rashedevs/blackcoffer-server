const express = require("express");
const app = express();

//routes

app.get("/", (req, res) => {
  res.send("Hello blackcoffer server");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
