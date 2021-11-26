const db = require("../models");
const Module = db.Module;

exports.create = (req, res) => {
    if (!req.body.CodeECTS) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
      // Create a Tutorial
      const module = new Module({
        CodeECTS: req.body.CodeECTS,
        AncienCodeECTS:req.body.AncienCodeECTS,
        CourseName: req.body.CourseName,
        CreditsETCS: req.body.CreditsETCS,
        Semaistre: req.body.Semaistre,
        Duree: req.body.Duree
      });
    
      // Save Tutorial in the database
      module
        .save(module)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the module."
          });
        });
};

exports.findById = (req, res) => {
  Module.findById(req.params._id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
};


exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};