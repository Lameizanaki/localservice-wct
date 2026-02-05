const express = require("express");
const Service = require("../models/Service");

const router = express.Router();

// CREATE service
router.post("/", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ services (with optional category filter)
router.get("/", async (req, res) => {
  try {
    const { categoryId } = req.query;

    const filter = categoryId ? { categoryId } : {};
    const services = await Service.find(filter);

    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE service
router.put("/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE service
router.delete("/:id", async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
