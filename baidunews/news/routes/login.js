var express = require('express');
var router = express.Router();
var app = express();

/* GET login listing. */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: '后台登录'
    });
});

// 前端login.js发送ajax到./doLogin这个请求路由进行处理
router.post('/doLogin', function(req, res, next) {
    var user = {
        username: 'admin',
        password: 'admin'
    };
    if (req.body.username === user.username && req.body.password === user.password) {
        res.send(true);
    } else {
        res.send(false);
    }
});

module.exports = router;
