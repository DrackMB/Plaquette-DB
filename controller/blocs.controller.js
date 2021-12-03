const db = require("../models");
const Module = db.Module;
const Blocs = db.Blocs;

const createNewModule = (req) => {
  return new Module({
    CodeECTS: req.body.CodeECTS,
    AncienCodeECTS: req.body.AncienCodeECTS,
    CourseName: req.body.CourseName,
    CreditsETCS: req.body.CreditsETCS,
    Semaistre: req.body.Semaistre,
    Duree: req.body.Duree,
  });
};

exports.create = (req, res) => {
  if (!req.body.libelle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const blocs = new Blocs({
    libelle: req.body.libelle,
    modules: req.body.modules._id,
  });

  blocs
    .save(blocs)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error .",
      });
    });
};

const addModuleInBlocs = function (blocID, modules, res) {
  Blocs.find({ _id: blocID }, (err, data) => {
    if (data.length > 0) {
      console.log("first data ", data);
      Module.find({ CodeECTS: modules.CodeECTS }, (err, data) => {
        if (data.length > 0) {
          return Blocs.findByIdAndUpdate(
            blocID,
            {
              $push: {
                modules: data[0]._id,
              },
            },
            { new: true, useFindAndModify: false },
            (err, doc) => {
              if (err) console.log(err);
              else res.send(doc);
            }
          );
        } else {
          console.log("\n>> suivant:\n", modules);
          return modules
            .save(modules)
            .then((data) => {
              return Blocs.findByIdAndUpdate(
                blocID,
                {
                  $push: {
                    modules: data._id,
                  },
                },
                { new: true, useFindAndModify: false },
                (err, doc) => {
                  if (err) console.log(err);
                  else res.send(doc);
                }
              );
            })
            .catch((err) => console.log(err));
        }
      });
    }
    return -1;
  });
};

exports.addModule = (req, res) => {
  if (!req.body.CodeECTS) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const blocsId = req.params._id;
  addModuleInBlocs(blocsId, createNewModule(req), res);
};

const deleteModuleFromBlocs = (blocID, modules, res) => {
  Blocs.find({ _id: blocID }, (err, data) => {
    if (data.length > 0) {
      Module.find({ CodeECTS: modules.CodeECTS }, (err, data) => {
        if (data.length > 0) {
          return Blocs.findByIdAndUpdate(
            blocID,
            {
              $pull: {
                modules: data[0]._id,
              },
            },
            { new: true, useFindAndModify: false },
            (err, doc) => {
              if (err) console.log(err);
              else res.send(doc);
            }
          );
        }

        if (err) console.log(err);
      });
    }
    if (err) console.log(err);
  });
};
// delete module from blocs with name
exports.deleteModule = (req, res) => {
  if (!req.body.CodeECTS) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const blocsId = req.params._id;
  deleteModuleFromBlocs(blocsId, createNewModule(req), res);
};

exports.update = (req, res) => {
  Blocs.updateOne({ libelle: req.params.libelle }, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  Blocs.deleteMany((err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
};

exports.delete = (req,res)=>{
  Blocs.deleteOne({libelle:req.params.libelle},(err,data)=>{
    if(err) console.log(err)
    res.send(data);
  })
}
