const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);
const uri = "mongodb+srv://gpatin:auBwl5Y0VLhYWWii@cluster0.lftdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports.connect = async () => {
  try {
    await client.connect();
    return client;
  } catch (e) {
    console.error(e);
  }
};

module.exports.close = async () => {
  client.close();
};


