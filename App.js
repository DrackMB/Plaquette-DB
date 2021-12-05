const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const {
  ModuleRoute,
  ProgrammeRoute,
  BlocsRoute,
  Certification,
  Finances,
  Utilisateur,
  Partenaires,
  Competences,
} = require("./routes/index");

const uri =
"mongodb+srv://dbMB:PsCC2014MB@cluster0.zmhvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.error(error);
}

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", ModuleRoute);
app.use("/", ProgrammeRoute);
app.use("/", BlocsRoute);
app.use("/", Certification);
app.use("/", Finances);
app.use("/", Utilisateur);
app.use("/", Partenaires);
app.use("/", Competences);

module.exports = app;
