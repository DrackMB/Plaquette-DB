var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var ProgrammeSchema = new mongoose.Schema({
  Annee: String,
  UniteDenseignement: String,
  blocs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blocs" }],
});
ProgrammeSchema.plugin(AutoIncrement, {
  inc_field: "idProgramme",
  reference_value: "Programme",
});
var Programme = mongoose.model("Programme", ProgrammeSchema);

module.exports = Programme;
