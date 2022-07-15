var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');

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


router.get('/col-colegiatura', function(req, res, next) {
  res.render('col-colegiatura');
});
router.get('/pago', function(req, res, next) {
  res.render('pago');
});

router.post('/index2', function(req, res, next) {
  email=req.body.email;
  password=req.body.password;
  console.log(email);
  dbConn.query("SELECT * FROM users WHERE email='"+email+"' AND password='"+password+"'",function(err,rows){
    if(err){
      req.flash('error',err);
      console.log(err);
    }else{
      if(rows.length){
        console.log(rows);
        req.session.idu=rows[0]["id"];
        req.session.email=rows[0]["email"];
        req.session.loggedin = true;
        res.redirect('/main');
      }else{
        
        res.redirect('/login');
      }
    }
  });

  
});

router.get('/main', function(req, res, next) {
  
    res.locals.idu=req.session.idu;
    res.locals.email=req.session.email;
    res.locals.loggedin=req.session.loggedin;    
      res.render('index2',);
    });
    
  


router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect("/");
});


module.exports = router;
