const { Finances } = require("../models");

const createNewFinance = (req) => {
  return new Finances({
    libelle: req.body.libelle,
    Frais_Hors_AlternanceAvant: req.body.Frais_Hors_AlternanceAvant,
    Frais_Hors_AlternanceApres: req.body.Frais_Hors_AlternanceApres,
    Frais_En_Alternance: req.body.Frais_En_Alternance,
  });
};

exports.create = (req, res) => {
  Finances.create(createNewFinance(req), (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Finances.find((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.update = (req, res) => {
  Finances.findByIdAndUpdate(
    { _id: req.params._id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, data) => {
      if (err) console.log(err);
      else res.send(data);
    }
  );
};

exports.deleteAll = (req, res) => {
  Finances.deleteMany((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  Finances.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};
