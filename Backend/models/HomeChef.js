const mongoose = require("mongoose");

const homeChefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("HomeChef", homeChefSchema);
