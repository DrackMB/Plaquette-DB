const utilisateur = require("../controller/utilisateur.controller")
const express = require("express");
const router = express.Router();

router.post("/utilisateur/add",utilisateur.create)
router.get("/utilisateur/",utilisateur.findAll)
router.put("/utilisateur/type",utilisateur.update)
router.delete("/utilisateur/",utilisateur.delete)

module.exports = router;