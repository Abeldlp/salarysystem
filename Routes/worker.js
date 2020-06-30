const express = require("express");
//Importing worker schema
const Worker = require("../Models/Worker");
const { Router } = require("express");

//Setting the route middleware
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const worker = await Worker.find();
    res.json(worker);
  } catch (error) {
    res.json({ message: error });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    res.json(worker);
  } catch (error) {
    res.json({ message: error });
  }
});

route.post("/add", async (req, res) => {
  const newWorker = new Worker({
    surname: req.body.surname,
    name: req.body.name,
    month: req.body.month,
    year: req.body.year,
    income: req.body.income,
  });
  try {
    const savedWorker = await newWorker.save();
    res.json(
      `${savedWorker.name} ${savedWorker.surname} has been added correctly`
    );
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = route;
