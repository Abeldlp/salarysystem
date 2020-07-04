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

//Get filtered names or surnames containing the input value
route.get("/filtered/:name", async (req, res) => {
  try {
    const filtername = req.params.name;
    const filtered = await Worker.find({
      $or: [
        { name: { $regex: ".*" + filtername + ".*" } },
        { surname: { $regex: ".*" + filtername + ".*" } },
      ],
    });
    res.json(filtered);
  } catch (error) {
    res.json({ message: error });
  }
});

//ROUTE TO GET A UNIQUE NAME
//!Not being used at the moment
route.get("/pername", async (req, res) => {
  try {
    const byname = await Worker.distinct("name");
    res.json(byname);
  } catch (error) {
    res.json({ message: error });
  }
});
//----------------------------

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

route.delete("/:id", async (req, res) => {
  try {
    const deletedWorker = await Worker.deleteOne({ _id: req.params.id });
    res.json(`${req.body.name} was deleted succesfully`);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update an existing worker

route.post("/update/:id", (req, res) => {
  Worker.findById(req.params.id).then((worker) => {
    (worker.surname = req.body.surname),
      (worker.name = req.body.name),
      (worker.month = req.body.month),
      (worker.year = req.body.year),
      (worker.income = req.body.income);

    worker
      .save()
      .then(() => {
        res.json(`${worker.name} ${worker.surname} has been updated`);
      })
      .catch((error) => {
        res.json({ message: error.reason });
      });
  });
});

module.exports = route;
