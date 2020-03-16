var express = require('express');
var router = express.Router();
const Temp= require('../models/temperature')
require('../config')

/* GET home page. */
router.get('/', async function(req, res, next) {
  var menu = await Temp.find()
  res.render('index',{root:ROOT_URL});
});

module.exports = router;
