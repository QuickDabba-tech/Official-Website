const express = require("express");
const router = express.Router();
const { submitDelivery } = require("../controllers/deliveryController");

router.post("/deliverysubmit", submitDelivery);

module.exports = router;
