var express = require('express');
var router = express.Router();
var orm = require('orm');
// 配置数据库用户名密码等
var dbpath = require('../config/dbconfig');
// console.log(dbpath);
// db info

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

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
            news_type: String,
        });
        next();
    }
}));

router.post('/news_list', function(req, res, next) {
    //    console.log(req.query.findNum);
    // var findNum = req.query.findNum;
    var findNum = req.body.findNum;
    //    console.log(req.query.offset);
    // var offset = req.query.offset;

    req.models.news_list.find({
        news_type: req.body.table
    }, {
        offset: req.body.offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});

module.exports = router;
