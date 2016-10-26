var express = require('express');
var app = express();
var router = express.Router();



// 设置路由
router.get('/', function (req, res, next) {
    res.render('BgManager',{});
});

module.exports = router;
