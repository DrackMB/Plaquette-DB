var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var FinancesSchema = new mongoose.Schema({
  libelle: String,
  Frais_Hors_AlternanceAvant: Number,
  Frais_Hors_AlternanceApres: Number,
  Frais_En_Alternance: Number,
});
FinancesSchema.plugin(AutoIncrement, {
  inc_field: "idFinances",
  reference_value: "Finances",
});
var Finances = mongoose.model("Finances", FinancesSchema);

module.exports= Finances;
