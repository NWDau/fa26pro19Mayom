console.log("My Pick.js file is loading")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("PICK ROUTE WAS CALLED")
  res.send('Pick Route is working');
});

module.exports = router;
