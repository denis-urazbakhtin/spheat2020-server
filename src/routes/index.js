var express = require('express');
var router = express.Router();
const Temp= require('../models/temperature')
/* GET home page. */
router.get('/', async function(req, res, next) {
  var menu = await Temp.find()
  res.render('index');
});

module.exports = router;
