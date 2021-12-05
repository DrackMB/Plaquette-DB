var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var CompetenceSchema = new mongoose.Schema({
  annee: { libelle: String, discription: String },
  competences: [{ types: String, discription: String }],
});
CompetenceSchema.plugin(AutoIncrement, {
  inc_field: "idcompetences",
  reference_value: "Competences",
});
var competences = mongoose.model("Competences", CompetenceSchema);

module.exports = competences;
