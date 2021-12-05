const finances = require("../controller/finances.controller")
const express = require("express");
const router = express.Router();

router.post("/finances/add",finances.create)
router.get("/finances/",finances.findAll)
router.put("/finances/update/_id/:_id",finances.update)
router.delete("/finance/deleteAll",finances.deleteAll)
router.delete("/finance/delete/_id/:_id",finances.delete)

module.exports=router
