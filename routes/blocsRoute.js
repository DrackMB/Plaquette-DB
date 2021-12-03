const blocs = require("../controller/blocs.controller");
const express = require("express");
const router = express.Router();
router.post("/blocs/", blocs.create);
router.post("/blocs/addModule/:_id", blocs.addModule);
router.delete("/blocs/deleteModule/:_id", blocs.deleteModule);
router.delete("/blocs/delete/libelle/:libelle", blocs.delete);
router.delete("/blocs/deleteAll/", blocs.deleteAll);
module.exports = router;
