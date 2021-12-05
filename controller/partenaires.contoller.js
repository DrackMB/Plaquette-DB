const { Partenaires } = require("../models");

const createNewPartenaires = (req) => {
  return Partenaires({
    nom: req.body.nom,
    logo: req.file.filename,
    type: req.body.type,
  });
};

exports.create = (req, res) => {
  Partenaires.create(createNewPartenaires(req), (err, item) => {
    if (err) console.log(err);
    else res.send(item);
  });
};

exports.findByNom = (req, res) => {
  Partenaires.find({ nom: req.params.nom }, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
};

exports.updateType = (req, res) => {
  Partenaires.findOneAndUpdate(
    { nom: req.params.nom },
    { type: req.body.type },
    (err, data) => {
      if (err) console.log(err);
      else res.send(data);
    }
  );
};

exports.deleteByNom = (req, res) => {
  Partenaires.deleteOne({ nom: req.params.nom }, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Partenaires.find((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};
