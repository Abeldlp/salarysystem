const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
  surname: String,
  name: String,
  month: Number,
  year: Number,
  income: Number,
});

module.exports = mongoose.model("Worker", workerSchema);
