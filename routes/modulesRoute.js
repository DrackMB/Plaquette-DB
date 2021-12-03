const modules = require("../controller/module.controller");
const express = require("express");
const router = express.Router();

router.post("/module/", modules.create);
router.get("/module/:_id", modules.findById);
router.put("/module/update/", modules.update);
router.delete("/module/delete/CodeECTS/:CodeECTS", modules.delete);
router.delete("/module/deleteAll/", modules.deleteAll);
module.exports = router;
