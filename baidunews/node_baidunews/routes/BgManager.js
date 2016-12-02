var express = require('express');
var cookieParser = require('cookie-parser');
// var csrf = require('csurf');
var bodyParser = require('body-parser');
// var app = express();
var router = express.Router();
var orm = require('orm');
var dbpath = require('../config/dbconfig');

var csurf = require('csurf');

var parseForm = bodyParser.urlencoded({
    extended: false
});
router.use(cookieParser());

// router.use(csurf({
//     cookie: true
// }));
// console.log(dbpath);
router.use(bodyParser.json());

// var dbusername = 'root';
// var dbpassword = '';
// var dbname = 'baidunews_v2';
// var path = "mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname;

// console.log(URL);
// console.log(req.originalUrl);

// 设置路由,请求的根目录


// router.get('/', function(req, res, next) {
//     if (!req.session.user) {
//         // 默认在显示login页面
//         res.render('login', {
//             user: req.session.user,
//             // display: "你还木有登录啊骚年，登陆完唱首歌给你听😙"
//             csrfToken: req.session.token
//             // access_token:req.session.token
//         });
//
//     } else {
//         // var text = "听我唱~老司机带带我，我是中学生😄";
//         res.render('BgManager', {
//             user: req.session.user,
//             // display: text
//             access_token:req.session.token
//             // access_token: req.csrfToken()
//         });
//     }
//     // console.log(req.session.token);
// });

// 数据查询

router.use('/news_list', orm.express(dbpath.dbconfig(), {
    define: function(db, models, next) {
        models.news_list = db.define("news_list", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String,
            news_type: String
        });
        next();
    }
}));

router.post('/news_list', checkToken, function(req, res, next) {

    req.models.news_list.find({
        news_type: req.body.table,
    }, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });

});

router.post('/news_list/add', function(req, res, next) {
    req.models.news_list.create({
        title: req.body.title,
        img_url: req.body.img_url,
        content: req.body.content,
        from: req.body.from,
        time: req.body.time,
        news_type: req.body.table
    }, function(err, news) {
        if (req.session.token === req.body.access_token) {
            // console.log(req.session.token);
            res.status(200);
            res.json(news);
        }

    });

});

router.post('/news_list/edit', function(req, res, next) {
    req.models.news_list.get(req.body.id, function(err, item) {
        item.save({
            title: req.body.title,
            img_url: req.body.img_url,
            content: req.body.content,
            from: req.body.from,
            time: req.body.time,
            type: req.body.table
        }, function(err) {
            console.log(req.body.id + "保存成功！");
            res.status(200);
            res.send(true);
        });
    });
});

// news_recommend elete
router.post('/news_list/delete', function(req, res, next) {
    var deleteid = req.body.idsDel.split(',');
    for (var i = 0; i < deleteid.length; i++) {
        req.models.news_list.get(deleteid[i], function(err, item) {
            item.remove(function(err) {});
        });
    }
    console.log("删除成功");
    res.status(200);
    res.send(true);

});

function checkToken(req, res, next) {
    if (req.session.token === req.body.access_token) {
        // console.log("aaaaa");
        next();
    }
}

module.exports = router;
