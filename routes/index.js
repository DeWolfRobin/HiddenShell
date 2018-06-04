var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.user) {
    res.render('index', {
      title: 'TP-LINK'
    });
  } else {
    res.redirect('/home');
  }

});

module.exports = router;
