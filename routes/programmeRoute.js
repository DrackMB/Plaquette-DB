const programme = require("../controller/programme.controller");
const express = require("express");
const router = express.Router();
router.post("/programme/", programme.create);
router.get("/programme/", programme.findAll);
router.post("/program/:_id", programme.addModule);

module.exports = router;
