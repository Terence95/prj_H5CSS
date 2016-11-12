var express = require('express');
/*重要的mysql模块，用来连接操作MySQL数据库*/
var mysql = require('mysql');
/*=======================================*/
/*==============基本配置=================*/
/*=======================================*/

/*重要的body-parser模块，用于解析post请求的内容*/
var bodyParser = require('body-parser');
/*MD5加密模块*/
var crypto = require('crypto');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
/*设置mysql的链接参数，请在这里填上你相应的数据库信息*/
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hello',
    charset: 'UTF8_GENERAL_CI',
});
/*链接数据库*/
connection.connect();

/*=======================================*/
/*==============路由列表=================*/
/*=======================================*/


/*进入首页*/
router.get('/', function(req, res, next) {
    if (!req.session.user){
        res.render('index', {user:req.session.user,display: "你还木有登录啊骚年，登陆完唱首歌给你听😙" });
    }else{
    	var text="听我唱~老司机带带我，我是中学生😄";
    	res.render('index',{user:req.session.user,display:text});
    }
});


/*注册*/
router.get('/reg', function(req, res, next) {
    /*如果已经登录，立即跳转到首页*/
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('register');
    }
});
router.post('/reg', function(req, res, next) {
    var username = req.body.username,
        password = req.body.password;
    /*首先验证是否有用户名和密码，这一步表单验证工作可以由前端js来完成*/
    if (username == '' || password == '') {
        console.log('请正确输入用户名与密码');
        return res.redirect('/reg');
    } else {
        /*设置sql语句*/
        var sql = "SELECT * FROM users WHERE username='" + username + "'";
       /* 链接数据库进行检索，返回err(错误),rows(结果行-是个集合)，field(没去了解是什么鸟)*/
        connection.query(sql, function(err, rows, field) {
            if (err) throw err;
            /*判断是否有记录*/
            if (rows.length) {
                console.log("用户已存在");
                return res.redirect('/reg');
            } else {
                /*开始用md5对密码进行加密*/
                var md5 = crypto.createHash('md5'),
                    md5password = md5.update(password).digest('hex');
                /*插入新的用户数据*/
                var createAccount = "INSERT INTO users (username,password) VALUES ('" + username + "','" + md5password + "')";
                connection.query(createAccount, function(err, rows, filed) {
                    var user={
                    	username:username,
                    }
                    /*这里是有争议的，其实应该再查询数据库，将得到的新rows赋值给req.session.user*/
                    req.session.user=user;
                    res.redirect('/');
                });
            };
        });
    }
});

/*登录*/
router.get('/login', function(req, res, next) {
	if (req.session.user) {
		res.redirect('/');
	}else{
		res.render('login');
	}
});
router.post('/login',function(req,res,next){
	if (req.session.user) {
		res.redirect('/');
	}else{
        /*通过body-parser获取表单传递来的数据*/
		var username = req.body.username,
			password = req.body.password;
		if (username==''||password=='') {
			return res.redirect('/login');
		}else{
            /*将登陆的密码同样用md5转化，一并给数据库做检索*/
			var md5 = crypto.createHash('md5'),
                md5password = md5.update(password).digest('hex');
			var sql = "SELECT * FROM users WHERE username='" + username + "' AND password='"+md5password+"'";
			connection.query(sql,function(err,rows,filed){
				if (rows.length=='') {
                    /*没有用户记录*/
					console.log('用户名或密码错误');
					res.redirect('/login');
				}else{
                    /*有用户记录，则先将用户记录中的密码部分删除，再将整体给session*/
					rows[0].password=null;
					req.session.user=rows[0];
                    console.log('登录成功');
                    /*重定向回首页*/
					res.redirect('/');
				}
			});
		}
	}
});

/*退出登录*/
router.get('/logout',function(req,res,next){
    /*只要把req.session.user清空,就可以算是退出登陆了*/
	req.session.user = null;
	res.redirect('/');
});

/*忘记密码*/
router.get('/forget', function(req, res, next) {
    res.render('forget');
});

module.exports = router;
