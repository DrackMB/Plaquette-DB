const modules = require("../controller/module.controller");
const express = require("express");
const router = express.Router();

router.post("/module/", modules.create);
router.get("/module/:_id", modules.findById);
module.exports = router;
