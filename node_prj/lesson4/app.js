// 此次不一样的地方在于，我们需要去除每个主题的第一条评论，就要求我们对每个主题的链接发起请求，并
// 用cheerio去取其中第一条评论
// 使用eventproxy控制并发
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
// url模块是node.js标准库里面的
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';
superagent.get(cnodeUrl).end(function(err, res) {
    if (err) {
        return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);

    // 获取首页所有连接
    $('#topic_list .topic_title').each(function(index, el) {
        // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
        // 我们用 url.resolve 来自动推断出完整 url，变成
        // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
        // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
        var $element = $(el);
        var href = url.resolve(cnodeUrl, $element.attr('href'));
        topicUrls.push(href);
    });

    // 得到长度为40的topicUrls数组
    // console.log(topicUrls);
    // 得到一个eventproxy实例
    var ep = new eventproxy();
    // console.log(topicUrls.length);
    // 命令ep重复监听topicUrls.length次，‘topic.html’事件启动
    ep.after('topic.html', 2, function(topics) {
        // topics是个数组，包含40次ep.emit('topic_html', pair)的pair
        // dosth
        // console.log(topicUrls.length);
        topics = topics.map(function(topicPair) {
            var topicUrl = topicPair[0];
            var topicHtml = topicPair[1];
            var $ = cheerio.load(topicHtml);
            return ({
                title: $('.topic_full_title').text().trim(),
                href: topicUrl,
                comment1: $('.reply_content').eq(0).text().trim(),
            });
        });

        console.log('final:');
        console.log(topics);
    });
    topicUrls.forEach(function(topicUrl) {
        superagent.get(topicUrl)
            .end(function(err, res) {
                console.log('fetch ' + topicUrl + ' successful');
                ep.emit('topic_html', [topicUrl, res.text]);
            });
    });
});
