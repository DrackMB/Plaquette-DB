const db = require("../models");
const modules = require("../models/module");
const Programme = db.Programme;
const Module = db.Module;

exports.create = (req, res) => {
  if (!req.body.Semaistre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Programme
  const programme = new Programme({
    Semaistre: req.body.Semaistre,
    UniteDenseignement: req.body.UniteDenseignement,
    blocs: req.body.blocs._id,
  });

  // Save Programme in the database
  programme
    .save(programme)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error .",
      });
    });
};

exports.findAll = (req, res) => {
  Programme.find({})
    .populate({
      path: "blocs",
      populate: {
        path: 'modules',
      }
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error .",
      });
    });
};

const addModuleInPrograme = function (programmeID, modules) {
  console.log("\n>> Add:\n", modules, programmeID);
  const moduless = new Module({
    CodeECTS: modules.CodeECTS,
    CourseName: modules.CourseName,
    ETCS: modules.ETCS,
    Semaistre: modules.Semaistre,
    Duree: modules.Duree,
  });
  return moduless
    .save(moduless)
    .then((data) => {
      return Programme.findByIdAndUpdate(
        programmeID,
        {
          $push: {
            modules: data._id,
          },
        },
        { new: true, useFindAndModify: false },
        (err, doc) => {
          if (err) console.log(err);
          else console.log(doc);
        }
      );
    })
    .catch((err) => console.log(err));
};

exports.addModule = (req, res) => {
  const programeID = req.params._id;
  const module = new Module({
    CodeECTS: req.body.CodeECTS,
    CourseName: req.body.CourseName,
    ETCS: req.body.ETCS,
    Semaistre: req.body.Semaistre,
    Duree: req.body.Duree,
  });
  addModuleInPrograme(programeID, module);
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
