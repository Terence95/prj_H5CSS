var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// 用于日志的模块
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// body-parser模块，用于解析post请求的内容
var bodyParser = require('body-parser');
// express的session模块，设置session参数
var session = require('express-session');
var mysql = require('mysql');

// 调用路由规则
var routes = require('./routes/index');
var users = require('./routes/users');

// 实例化express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 设置服务端session参数
app.use(session({
    key: 'session',
    secret: 'Keboard cat',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    resave: false,
    saveUninitialized: true
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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


module.exports = app;
