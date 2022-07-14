var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/buscar', function(req, res, next) {
  res.render('buscar');
});
router.get('/colegiate', function(req, res, next) {
  res.render('colegiate');
});

router.get('/crear', function(req, res, next) {
  res.render('crear');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/colegiatura', function(req, res, next) {
  res.render('colegiatura');
});

router.get('/index2', function(req, res, next) {
  res.render('index2');
});
router.get('/col-colegiatura', function(req, res, next) {
  res.render('col-colegiatura');
});
router.get('/pago', function(req, res, next) {
  res.render('pago');
});
module.exports = router;
