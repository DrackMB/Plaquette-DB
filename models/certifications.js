var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var CertificationSchema = new mongoose.Schema({
  Libelle: [String],
  logo: { data: String, contentType: String },
});
CertificationSchema.plugin(AutoIncrement, {
  inc_field: "idCertification",
  reference_value: "Certification",
});
var Certification = mongoose.model("Certification", CertificationSchema);

module.exports = Certification;
