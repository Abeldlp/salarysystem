const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//Set up port
const PORT = process.env.PORT || 8000;

//Setting middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//Import route middlewares
const workerRoute = require("./Routes/worker");

//Requiring route middlewares
app.use("/workers", workerRoute);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
