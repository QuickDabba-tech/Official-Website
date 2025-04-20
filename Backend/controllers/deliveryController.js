const Delivery = require("../models/Delivery");

const submitDelivery = async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json({ message: "Delivery form submitted!" });
  } catch (err) {
    res.status(500).json({ error: "Delivery submission failed" });
  }
};

module.exports = { submitDelivery };
