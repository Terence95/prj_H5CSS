// 后台服务端部分，接收前端请求启动爬虫，完成信息爬取之后返回给前端，后台服务使用express
var cheerio = require('cheerio');
var async = require('async');
var url = require('url');
var superagent = require('superagent');
var express = require('express');
var app = express();

var eventproxy = require('eventproxy');
var ep = eventproxy();

var baseUrl = 'https://cnodejs.org/';



app.get('/', function(req, res, next) {
    // superagent抓取https://cnodejs.org/
    superagent.get(baseUrl).end(function(err, sres) {
        // 常规错误处理
        if (err) {
            return next(err);
        }
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list .topic_title').each(function(index, el) {
            var $element = $(el);
            items.push({
                title:$element.attr('title'),
                href:$element.attr('href')
            });
        });
        res.send(items);
    });
});
app.listen(3000, function(req, res) {
    console.log('app is running at port 3000');
});
