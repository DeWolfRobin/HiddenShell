var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/', function(req, res, next) {
  res.render('home/terminal', {
    title: 'terminal'
  });
});

router.post('/', function(req, res, next) {
  if (!req.body.cmd) {
    return res.redirect('/terminal?error=nocommand');
  }
  shell.exec(req.body.cmd, function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
    res.render('home/terminal', {
      title: 'terminal',
      output: stdout
    });
  });
});

module.exports = router;
