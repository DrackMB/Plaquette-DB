const blocs = require("../controller/blocs.controller");
const express = require("express");
const router = express.Router();
router.post("/blocs/", blocs.create);
router.post("/blocs/:_id", blocs.addModule);
router.delete("/blocs/:_id", blocs.deleteModule);
module.exports = router;
