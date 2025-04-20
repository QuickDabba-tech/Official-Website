const express = require("express");
const router = express.Router();
const { submitChef } = require("../controllers/chefController");

router.post("/chefsubmit", submitChef);

module.exports = router;
