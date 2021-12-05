const certification = require("../controller/certification.controller");
const express = require("express");
const router = express.Router();
var multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, "certification/"+file.fieldname + "-" + Date.now()+"."+ext);
  },
});

var upload = multer({ storage: storage });
router.post("/certification/add",upload.single('logo'), certification.create);
router.delete("/certification/delete/libelle/:libelle",certification.delete)
router.get("/certification/findAll",certification.findAll);
module.exports = router;
