var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var BlocsSchema = new mongoose.Schema({
  libelle: String,
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Modules" }],
});
BlocsSchema.plugin(AutoIncrement, {
  inc_field: "idbloc",
  reference_value: "Blocs",
});
var Blocs = mongoose.model("Blocs", BlocsSchema);
module.exports = Blocs;
