const programme = require("../controller/programme.controller");
const express = require("express");
const router = express.Router();
router.post("/programme/", programme.create);
router.get("/programme/", programme.findAll);
router.get("/program/libelle/:libelle",programme.findOne)
router.delete("/program/delete/programe/:programe/blocs/:blocs",programme.deleteBloc)

module.exports = router;
