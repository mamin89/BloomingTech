const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema({
  title: String,
  date: { type: Date, default: Date.now },
  notes: String,
  url: String,
  challenges: String,
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
