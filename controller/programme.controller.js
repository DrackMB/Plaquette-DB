const db = require("../models");
const Programme = db.Programme;
const Blocs = db.Blocs;

exports.create = (req, res) => {
  if (!req.body.libelle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Programme
  const programme = new Programme({
    libelle: req.body.libelle,
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
        path: "modules",
      },
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

exports.findOne = (req, res) => {
  Programme.findOne({ libelle: req.params.libelle }, (err, program) => {
    if (err) return handleError(err);
    res.send(program);
  });
};

const deleteBlocsFromProgrames = (programe, blocs, res) => {
  Blocs.find({ libelle: blocs }, (err, data) => {
    if (data.length > 0) {
      return Programme.findOneAndUpdate(
        { libelle: programe },
        {
          $pull: {
            blocs: data[0]._id,
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
};

exports.deleteBloc = (req, res) => {
  const programe = req.params.programe;
  const blocs = req.params.blocs;
  deleteBlocsFromProgrames(programe, blocs, res);
};
exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
