var express = require('express');


// mysql模块，用来连接操作mysql数据库
var mysql = require('mysql');

/*基本配置*/

// body-parser模块，用来解析post请求的内容
var bodyParser = require('bodyParser');

// crypto md5加密模块

var crypto = require('crypto');


var router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

// 设置mysql连接参数，填上数据库信息
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hello',
    charset: 'UTF8_GENERAL_CI'
});

// 连接数据库
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
