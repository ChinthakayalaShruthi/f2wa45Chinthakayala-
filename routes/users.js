var express = require('express');
var router = express.Router();
var times;

/* GET users listing. */
router.get('/', function(req, res, next) {
  times=times+1;
  res.send('User accesses are: '+times);
});

module.exports = router;
