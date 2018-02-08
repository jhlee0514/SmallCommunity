var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next ) {
    res.render('board', {});
});

router.post('/', function(req, res, next) {
    res.render('board', { currentDatetime: new Date().getTime() });
});

module.exports = router;