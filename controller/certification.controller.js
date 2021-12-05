const { Certifications } = require("../models");

const createNewCertification = (req) => {
  return new Certifications({
    Libelle: req.body.libelle,
    logo: {
      data: req.file.filename,
      contentType: req.file.mimetype,
    },
  });
};

exports.create = (req, res) => {
  Certifications.create(createNewCertification(req), (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.send(item);
    }
  });
};

exports.delete = (req, res) => {
  Certifications.findOne(
    { Libelle: { $in: [req.params.libelle] } },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data.Libelle.length > 1) {
          Certifications.findOneAndUpdate(
            { _id: data._id },
            {
              $pull: {
                Libelle: req.params.libelle,
              },
            },
            { new: true, useFindAndModify: false },
            (err, dataU) => {
              if (err) console.log(err);
              else res.send(dataU);
            }
          );
        } else {
          Certifications.deleteOne({ _id: data._id }, (err, data) => {
            if (err) cosole.log(err);
            else res.send(data);
          });
        }
      }
    }
  );
};

exports.findAll = (req, res) => {
  Certifications.find((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  Certifications.delete((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};

exports.findByName = (req, res) => {
  Certifications.find({ Libelle: req.params }, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};
