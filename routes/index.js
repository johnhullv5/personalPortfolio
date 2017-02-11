let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index');
});


/* GET about page. */
router.get('/about', (req, res, next) =>{
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', (req, res, next) =>{
  res.render('contact');
});

/* GET project page. */
router.get('/project', (req, res, next) =>{
  res.render('project');
});

/* GET about page. */
router.get('/service', (req, res, next) =>{
  res.render('service');
});

/* GET about page. */
router.get('/trading', (req, res, next) =>{
  res.render('tradingResult');
});

module.exports = router;
