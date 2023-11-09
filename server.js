const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json);

//routes

app.get("/", (req, res) => {
  res.send("Hello from blackcoffer server");
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

mongoose
  .connect(
    "mongodb+srv://admin:12345admin@cluster0.ya7miun.mongodb.net/Blackcoffer?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
