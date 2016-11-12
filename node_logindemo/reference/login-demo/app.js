var express = require('express');
var path = require('path');
/*用于日志的模块*/
var logger = require('morgan');
/*重要的body-parser模块，用于解析post请求的内容*/
var bodyParser = require('body-parser');
/*express的session模块，用来设置session参数*/
var session=require('express-session');
/*重要的mysql模块，用来连接操作MySQL数据库*/
var mysql = require('mysql');

/*调用路由规则表*/
var routes = require('./routes/index');
var users = require('./routes/users');
/*实例化express*/
var app = express();

/*设置渲染引擎为ejs*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*设置服务端session的参数*/
app.use(session({
    key: 'session',
    secret: 'Keboard cat',
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    resave: false,
    saveUninitialized: true
}));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*加载静态文件（当访问/目录时，就相当于访问了/public目录）*/
app.use(express.static(path.join(__dirname, 'public')));



/*加载路由规则*/
app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/*监听8023端口*/
app.listen(8023, function() {
    console.log('server running at love ~~\\(^o^)/~~');
});

module.exports = app;
