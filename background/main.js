const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 6969 || 8080;

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

mongoose.connect(
  "mongodb+srv://Master:Soren9029@portfoliodb.7r4no.mongodb.net/test",
  () => console.log("DB connected")
);

app.get("/get-user", (req, res) => {
  res.send({ msg: "linked" });
});

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
