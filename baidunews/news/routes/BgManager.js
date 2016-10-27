var express = require('express');
// var app = express();
var router = express.Router();
var orm = require('orm');

var dbusername = 'root';
var dbpassword = '';
var dbname = 'baidunews2';

// 设置路由,请求的根目录
router.get('/', function(req, res, next) {
    res.render('BgManager', {});
});

// 数据查询
// news_recommend
router.use('/news_recommend', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_recommend = db.define("news_recommend", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));

router.get('/news_recommend', function(req, res, next) {
    req.models.news_recommend.find({}, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});

// add

// edit

// delete



/* news_baijia */
router.use('/news_baijia', orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
    define: function(db, models, next) {
        models.news_baijia = db.define("news_baijia", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_baijia', function(req, res, next) {
    req.models.news_baijia.find({}, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});



module.exports = router;
