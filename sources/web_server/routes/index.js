var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var databaseConfig = require('../configs/database');

/* GET home page. */
router.get('/', function(req, res, next) {

  var connection = mysql.createConnection(databaseConfig);

  connection.connect();

  connection.query('Select sysdate() AS currentDatetime', function(err, rows, field) {
    if (err) throw err;
    res.render('index', { currentDatetime: rows[0].currentDatetime });      
  });

  
});

module.exports = router;
