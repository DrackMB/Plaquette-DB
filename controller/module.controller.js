const db = require("../models");
const Module = db.Module;

const moduleInitialise = (req) =>
  new Module({
    CodeECTS: req.body.CodeECTS,
    AncienCodeECTS: req.body.AncienCodeECTS,
    CourseName: req.body.CourseName,
    CreditsETCS: req.body.CreditsETCS,
    Semaistre: req.body.Semaistre,
    Duree: req.body.Duree,
  });

exports.create = (req, res) => {
  if (!req.body.CodeECTS) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Module
  const module = moduleInitialise(req);
  // Save Module in the database
  module
    .save(module)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the module.",
      });
    });
};

exports.findById = (req, res) => {
  Module.findById(req.params._id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findOne = (req, res) => {
  Module.findOne({ CodeECTS: req.params.CodeECTS })
    .then((data) => {
      res.send(data);
    })
    .catch((err) =>
      res.status(500).send({ message: err.message || "some errors" })
    );
};

exports.update = (req, res) => {
  const moduleTmp = moduleInitialise(req);
  console.log(moduleTmp);
  Module.findOneAndUpdate(
    { CodeECTS: moduleTmp.CodeECTS },
    {
        AncienCodeECTS: moduleTmp.AncienCodeECTS,
        CourseName: moduleTmp.CourseName,
        CreditsETCS: moduleTmp.CreditsETCS,
        Semaistre: moduleTmp.Semaistre,
        Duree: moduleTmp.Duree,
    },
    {
      returnNewDocument: true,
    },
    (err, data) => {
      if (err) console.log(err);
      else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Module.deleteOne({CodeECTS:req.params.CodeECTS},(err,data)=>{
   if(err) console.log(err);
   res.send(data);
  });
  
};

exports.deleteAll = (req, res) => {
  Module.deleteMany((err,data)=>{
    if(err) console.log(err);
    res.send(data)
  })
};

