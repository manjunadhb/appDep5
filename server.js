const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "./client/build")));

mongoose.connect(
  "mongodb+srv://manjunadhb:manjunadhb@mycluster.7yvwlgc.mongodb.net/users?retryWrites=true&w=majority"
);

app.get("/asianCountries", (req, res) => {
  res.json(["India", "Pakistan", "Bangladesh"]);
});

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  batchId: Number,
  studentId: Number,
  gender: String,
});

let User = new mongoose.model("students", userSchema);

app.get("/getStudents", async (req, res) => {
  let students = await User.find();
  res.json(students);
});

app.listen(1234, () => {
  console.log("Listening to port 1234");
});
