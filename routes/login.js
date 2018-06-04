var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.redirect('/?error=nousernameorpassword');
  }
  if ((req.body.username == "admin") && (req.body.password = "admin")) {
    var user = "admin";
    req.session.user = user;
    res.locals.user = user;
    return res.redirect('/?success');
  } else {
    return res.redirect('/?error=invalidcredentials');
  }
});

module.exports = router;
