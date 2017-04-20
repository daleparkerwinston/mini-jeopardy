const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;

const clueSchema = new Schema({
  "Show Number": Number,
  "Air Date": String,
  "Round": String,
  "Category": String,
  "Value": String,
  "Question": String,
  "Answer": String
});

const Clues = mongoose.model('Clues', clueSchema);

module.exports = Clues;