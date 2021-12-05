const competences = require("../controller/competences.controller");
const express = require("express");
const router = express.Router();

router.post("/competences/add", competences.create);
router.get("/competences/getAll", competences.findAll);
router.delete("/competences/delete/id/:_id",competences.delete)

module.exports = router;
