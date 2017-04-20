const express = require('express');
const bodyParser = require('body-parser');
const clueController = require('../controllers/clueController');

module.exports = () => {
  const router = express.Router();
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({extended: true}));

  router.get('/', clueController.getClues);
  router.get('/random', clueController.getRandom);

  return router;
};