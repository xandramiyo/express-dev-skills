var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

module.exports = router;
