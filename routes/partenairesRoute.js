const partenaires = require("../controller/partenaires.contoller");
const express = require("express");
const router = express.Router();
var multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, "partenaires/" + file.fieldname + "-" + Date.now() + "." + ext);
  },
});

var upload = multer({ storage: storage });

router.post("/partenaires/add",upload.single('logo'), partenaires.create);
router.get("/partenaires/", partenaires.findAll);
router.get("/partenaires/nom/:nom", partenaires.findByNom);
router.delete("/partenaire/delete/nom/:nom", partenaires.deleteByNom);
router.put("/partenaire/update/nom/:nom", partenaires.updateType);

module.exports = router;
