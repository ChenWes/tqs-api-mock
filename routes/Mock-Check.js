var express = require('express');
var router = express.Router();
var mockdata = require('../mock-data');

/* GET home page. */
router.get('/check/mock/:type', function (req, res, next) {
  var checktype = req.params.type;
  var newmockdata = mockdata(checktype);
  res.render('checkMock', { title: checktype + ' Check Data Mock', mockdata: JSON.stringify(newmockdata) });
});

module.exports = router;
