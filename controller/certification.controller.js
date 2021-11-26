const db = require("../models");
var fs = require("fs");
var path = require("path");
const Certifications = db.Certifications;

var multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

const createNewCertification = (req) => {
  return new Certifications({
    Libelle: [req.body.Libelle],
    logo: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  });
};

exports.create = (req, res, next) => {
  Certifications.create(createNewCertification(req), (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.send(item);
    }
  });
};
