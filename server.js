const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//Set up port
const PORT = process.env.PORT || 8000;

//Setting middlewares
app.use(bodyParser.json());

//Not sure about this one
app.use(bodyParser.urlencoded({ extended: false }));
//-----------------------
app.use(cors());
app.use(morgan("dev"));

//Send static files
app.use(express.static(path.join(__dirname, "client/build")));

//Import route middlewares
const workerRoute = require("./Routes/worker");

//Requiring route middlewares
app.use("/workers", workerRoute);

//Database connection
mongoose.connect(
  "mongodb://localhost:27017/worker",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected");
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
