const express = require("express");
const Portifolio = require("../models/Portifolio");
const router = express();

//INDUCES
//SHOW INDEX CREATE DELETE UPDATE
//index
router.get("/", async (req, res) => {
  try {
    res.json(await Portifolio.find());
  } catch (error) {
    res.status(400).json(error);
  }
});
//Create
router.post("/", async (req, res) => {
  try {
    res.json(await Portifolio.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

//show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Portifolio.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Portifolio.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Portifolio.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
