const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index");
const uri =
  "mongodb://localhost:27017/EstiamDB?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

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
app.use("/", routes.ModuleRoute);
app.use("/", routes.ProgrammeRoute);
app.use("/", routes.BlocsRoute);
app.use("/", routes.Certification);


module.exports = app;
