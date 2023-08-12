const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formData = new Schema({
  username: { type: String },
  password: { type: String },
  ip: { type: String },
});

const jeffWork = mongoose.model("jeffworks", formData);
module.exports = jeffWork;
