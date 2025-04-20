const HomeChef = require("../models/HomeChef");

const submitChef = async (req, res) => {
  try {
    const chef = new HomeChef(req.body);
    await chef.save();
    res.status(201).json({ message: "Chef form submitted!" });
  } catch (err) {
    res.status(500).json({ error: "Chef form submission failed" });
  }
};

module.exports = { submitChef };
