var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var PartenairesSchema = new mongoose.Schema({
  nom: String,
  logo: String,
  type:String,
});
PartenairesSchema.plugin(AutoIncrement, {
  inc_field: "idPartenaires",
  reference_value: "Partenaires",
});
var Partenaires = mongoose.model("Partenaires", PartenairesSchema);

module.exports= Partenaires;