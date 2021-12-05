const { Competences } = require("../models");

const createNewCompetences = (req) => {
  if (req.body.competences.length == 1) {
    return new Competences({
      annee: {
        libelle: req.body.annee.libelle,
        discription: req.body.annee.discription,
      },
      competences: req.body.competences,
    });
  } else {
  }
};

exports.create = (req, res) => {
  Competences.create(req.body, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
};
exports.findAll = (req, res) => {
  Competences.find((err, data) => {
    if (err) console.log(err);
    else {
      res.send(data);
    }
  });
};
exports.delete = (req,res)=>{
    Competences.deleteOne({_id:req.params._id},(err,data)=>{
        if(err)console.log(err)
        else res.send(data)
    })
}

exports.update = (req,res)=>{

}
