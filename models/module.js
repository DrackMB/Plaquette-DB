var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var ModuleSchema = new mongoose.Schema({
  CodeECTS: String,
  AncienCodeECTS: String,
  CourseName: String,
  CreditsETCS: Number,
  Semaistre: Number,
  Duree: Number,
});
ModuleSchema.plugin(AutoIncrement, {
  inc_field: "idmodule",
  reference_value: "Modules",
});
var modules = mongoose.model("Modules", ModuleSchema);

module.exports = modules;
