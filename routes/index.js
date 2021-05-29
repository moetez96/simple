var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexSocket');
});

router.get('/chat', function(req, res, next) {
  res.render('notif');
});


module.exports = router;
