var express = require('express');

var router = express.Router();

var x = Math.random();

var y = Math.random();

var val1="Math.atan(x) applied to "+ x + " is "+Math.cos(x) 

var val2="Math.exp() applied to "+ x +"and"+ y +" is "+ Math.asin(x) 

var val3= "Math.expm1() applied to "+ x + " is "+ Math.asinh();

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('computation', { title:'Shruthi Chinthakayala ',value1: val1, value2:vasl2, value3:val3 });

});

module.exports = router;