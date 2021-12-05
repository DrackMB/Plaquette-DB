const { Utilisateur } = require("../models");

const creatNewUtilisateur = (req) => {
  return Utilisateur({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    mdp: req.body.mdp,
    role: req.body.role,
  });
};

exports.create = (req, res) => {
  Utilisateur.findOne({ email: req.body.email }, (err, data) => {
    if (err) console.log(err);
    else {
      if ((data.length = 0)) {
        Utilisateur.create(creatNewUtilisateur(req), (err, data) => {
          if (err) console.log(err);
          else res.send(data);
        });
      } else res.send("email existe");
    }
  });
};

exports.login = (req, res) => {
  Utilisateur.findOne({ email: req.body.email }, (err, data) => {
    if (err) console.log(err);
    else {
      if (data) {
        if (data.mdp == req.body.mdp) {
          res.send("true");
        } else res.send("false");
      }
    }
  });
};

exports.delete = (req, res) => {
  Utilisateur.deleteOne({ email: req.body.email }, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.update = (req, res) => {
  Utilisateur.findOneAndUpdate(
    { email: req.body.email },
    { type: req.body.type },
    (err, data) => {
      if (err) console.log(err);
      else res.send(data);
    }
  );
};

exports.findAll = (req, res) => {
  Utilisateur.find((err, res) => {
    if (err) console.log(err);
    else res.send(data);
  });
};
