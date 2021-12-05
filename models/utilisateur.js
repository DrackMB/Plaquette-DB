var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

var UtilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  mdp: String,
  role: String,
});
UtilisateurSchema.plugin(AutoIncrement, {
  inc_field: "idUser",
  reference_value: "Utilisateur",
});
var Utilisateur = mongoose.model("Utilisateur", UtilisateurSchema);
module.exports = Utilisateur;
