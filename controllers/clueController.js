const Clues = require('../models/clueModel');
const config = require('../config');

const VALUES = [];

module.exports = {
  getClues: (req, res) => {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit);

    Clues.find()
      .skip(offset)
      .limit(limit)
      .exec((err, clues) => {
        if (err) throw err;
        res.send(clues);
      });
  },

  getRandom: (req, res) => {
    const value = `\$${req.query.value}`;
    const limit = req.query.limit ? Number(req.query.limit) : 1;

    Clues.count({'Value': value}).exec((err, count) => {
      let random = Math.floor((Math.random() * count) - limit);
      if (random < 0) random = 0;

      Clues.find({'Value': value}).skip(random).limit(limit).exec((err, clues) => {
        if (err) throw err;
        res.send(clues);
      })
    });
  }
};