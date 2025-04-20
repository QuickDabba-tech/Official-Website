const Contact = require("../models/Contact");

const submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact form submitted!" });
  } catch (err) {
    res.status(500).json({ error: "Contact submission failed" });
  }
};

module.exports = { submitContact };
