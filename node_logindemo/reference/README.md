# 【学习笔记】NodeJS之Express框架小demo(二)--用户登录验证 #

## ##
## 前言 ##
###回顾###
很高兴又和大家见面了，撒花~
不知道上一期的demo中，大家是否了解到了express的基础文档结构和路由基础了呢？

上一期的github：**[NodeJS之Express框架小demo(一)--理解express结构与路由基础](https://github.com/CaptainNyquist/expressDemo1)**

上一期的极客问答区：[http://jiuye.jikexueyuan.com/topic/1226](http://jiuye.jikexueyuan.com/topic/1226)

=============================================
###本期内容提要###
本期主要实现的是一个用户登录验证的小demo.

**github:**[https://github.com/CaptainNyquist/expressDemo2](https://github.com/CaptainNyquist/expressDemo2)

使用的数据库为mysql(为什么不用mongodb?---因为萌新有很多都是从xampp开始嘛)

**keyword:** 

1. NodeJS
2. express
3. 表单验证
4. mysql
5. session
6. 爱

## 如何启动该demo ##

###1.你得安装了mysql
本例中使用的数据库是mysql，所以啦，作为萌新可以安装xampp，通过xampp来开启mysql，用phpAdmin 来导入.sql文件（demo中有一个hello.mysql文件）。

**如何建立本例中的数据库**？

在mysql中新建一个名叫 hello 的数据库（**记得指定字符集为UTF-8，排序规则为utf-8-general-ci**），连接数据库，并选择“执行SQL文件，”就可以导入本例的数据库了。

备注：数据库用户名是root，密码是空，也就是''。可以查看demo文件来看具体配置哈。

###2.下载项目、安装依赖并启动####

在这一个例子中，我们将实现用户的注册，登录，退出等最基础的操作。
在下载好demo文件夹后，请cd到文件夹根目录，然后使用

    npm install

来安装项目依赖，并通过

	node app.js

启动项目。

启动成功后，终端会提示

	server running at love ~

此后，在浏览器(最好还是chrome)输入localhost:8023，就可以体验到这个demo啦。撒花~


## 实现原理 ##
###需要准备的页面###
想想我们是怎么进行用户登录操作的：我们先进行了注册，再进行了登录，登录完还可以退出。

you know,要实现完整的登录的话，我们要准备：

1. 首页  "/"
2. 用户登录页面"/login"
3. 用户注册页面"/reg"
4. 用户退出"/logout"（退出要什么页面嘛，摸头）

这里要注意的是，登录和注册除了两个给用户填表格的页面，还要有2个路由来处理这两个表单呢，下头讲解。

###用什么来提交表单进行前后端信息交互？###
回答是:express通过**body-paser**模块来处理表单内容。例如下方

    <form action='/hello' method='post'>
		<input type='text' name="username"/>
		<input type"submit" value="提交">
	<form/>

这是前段的一个常见的表单，我们来分析一下。

1. 表单提交的路由地址是"/hello",也就是说，这个请求会交个/hello处理
2. 请求的方法是post,也就是说，这个请求是**post方法**

穿插一句：**我们常见的请求方法有get,post,delete,put**,其中：

get方法：获取一个文档。用于获取资源，我们最常用
post方法：发送数据至服务器，最常见的形式就是表单提交
delete用于删除资源，put用于推资源到某个url。相对前两个少用，这里不多提。

**如果你想深入了解客户端与服务端的交互行为，建议看看朴灵大神的《深入浅出NodeJS》**

差点跑题，我们来看看服务端应该怎么处理这个表单

	router.post('/hello',function(req,res,next){
		var name = req.body.username;
	});
我们可以关注到：

1.路由的方法是post,如果你看过上一期的demo,肯定对`router.get() `
有印象，那就是用处理get方法的请求。

2.这个请求处理的路径是'/hello'，和前端表单传来的一致。

3.我们用req.body.username获取到了表单提交过来的参数（你得首先调用body-parser模块并做好相关配置）

这里的username，就是

	<input type='text' name="username"/>

里的**name="username"**,也就是这个**input里的内容会被req.body.username捕获到**。

由此，便是本例中我们前后端传递信息的开端。

###用什么来储存用户登录信息识别用户登录？###
答案是session——回话控制。

Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。————度娘

相对session,还有cookie，但cookie并不适合保存用户信息，因为cookie保存在客户端，可以被篡改，而session保存在服务端，不易被篡改，故适合用来保存用户重要信息。

假想，倘若一个网站用cookie的isVIP字段标识用户是否是VIP,如果用户篡改cookie，就可以轻易获得VIP资格了ohyeah.

**那么，登录验证怎么利用起session呢？**

**过程是这样的（重点）：**


1. 登录过程：用户在登录成功后，我们将用户信息记录在**req.session.user**中，在访问其他页面时，通过判断是否有注册了req.session.user，来决定下一步操作；
2. 注册过程：用户在提交注册用户成功后，我们将用户信息记录在**req.session.user**中，在访问其他页面时，通过判断是否有注册了req.session.user，来决定下一步操作（当然注册也可以不马上登录）。
3. 登出过程：通过把req.session.user清空，来表示用户退出登录，例如`req.session.user=null;`
4. 这样我们就实现了整个用户注册、登录、登出的过程了。

聪明的你理清楚思路了吗？手动滑稽

**好了各位客官久等。现在，我们进入demo，一步一步从注册到登录，再到登录，了解下这个小例子。**

##进入demo跟着感觉走###

###进入首页注册###
进入首页就懵逼了，网站老板居然说“你还木有登录啊骚年，登陆完唱首歌给你听”。那就登录呗。不过，我木有账号啊，那我就先注册个吧。所以就click了一下“register按钮”。

你应该要留意到——**register按钮其实是一个a标签，它跳转到了"/reg",a标签默认是get方法**

那么服务端对get请求做了啥事儿？

    router.get('/reg', function(req, res, next) {
	    if (req.session.user) {
	    res.redirect('/');
	    } else {
	    res.render('register');
	    }
    });
这里做了个判断，如果已经登录了，我还不让你注册了呢，如果没登录的话，就用register模板渲染页面返回给前端（这个过程上一期已经讲过，默认客官您已经懂了）。
您也一定发现了index.js里头有这么个东西

	router.post('/reg',function(req,res,next){
		TODO;
	});
**什么鬼，同样的url，为啥写了两次？**

细心的你可能发现了，**是方法不一样，一个是get,一个是post**。

那这个用post方法请求的/reg是哪儿来的呢？**是注册页面里的表单**.

`action="/reg",method="post"`

soga,看看对注册我们进行了哪些处理

我们先用

	var username = req.body.username,
	password = req.body.password;
获取了表单提交的用户名和密码，然后验证了下密码是不是空。

**强烈高能提醒**：

**这是demo啊才这么搞啊word天，实际中，在前端你该先在用js写正则进行表单输入验证，在后端你应该对输入的内容进行转义等处理防止XSS攻击。**

当输入无误的时候，因为是注册嘛，我们就先构造了个SQL去查询数据库里是否有这条信息

    var sql = "SELECT * FROM users WHERE username='" + username + "'";
熟悉SQL的你肯定了解它的含义。

接下来呢，我们用connection.query()方法来访问mysql.那这个connection哪儿来的？

1. 首先我们`var mysql = require('mysql');`引入了mysql模块。
2. 我们`var connection = mysql.createConnection({});`来进行了数据库的配置，你可以看看里头的信息。
3. `connection.query(sql,function(err,rows,field){})；`里头，sql是我们SQL语句，回调函数中，err就是错误信息。

rows就是我们用sql查询到的结果（如果已有用户，那么rows.length就是1，否则是0)。

field我没去看是什么鬼哈哈哈哈。

那么，这时候我们就得到SQL查询的结果了，如果有，就返回说，咱们有这个号啦，你再换个呗。如果没有的话，就写个新的sql来插入信息，这里不用再多解释吧？

不过应该提一下就是：**我们用md5来处理了表单传来的密码。为啥？因为如果我们直接把用户的密码放到数据库中，那么数据库管理员就可能很鸡贼地窃取了用户的密码，拿走屠农宝刀。加密后，管理员也是看到一堆乱七八糟的，我们的屠农宝刀就相对安全了。**

**前方高能：**

**要记住，再次插入的connection.query要在上一个connection.query的回调函数中写，咱们的node可是异步的喂。**

插入数据以后呢，为了提高用户体验，我们可以直接登录。

啥叫直接登录？就是**为req.session.user赋值**

	var user={
       username:username,
    }
	req.session.user=user;
	res.redirect('/');
我们设置好了session后就跳转到了首页"/"。

####首页做了啥？####

	if (!req.session.user){
        TODO;
    }else{
    	res.render('index',{user:req.session.user,display:text});
    }
本例中，登录完以后就会跳到首页，也就是说，进首页的时候，我们判断是否有req.session.user，也就是是否登录，没登录的话怎样怎样，登录的话，就怎样怎样。

这里，还将req.session.user赋值给了user传递给了index渲染模板。（这部分内容也在上一期讲过哈。）

**由此我们就完成了一个注册的流程，大致就是如此，具体不懂还可以看看代码里的注释。**

###登录流程###
跟注册部分的原理是相似的，这里就仅说说流程，代码就不扑上来细说了日后补充。

登录的话，提交表的过程和注册一致（你可以看到界面几乎都是一样的）。提交表单后，我们要做的就是通过SQL

来判断是不是有一条记录用户名和密码都符合（密码要先经过crypto处理，因为我们当时保存在数据库里的就是处理过的）。如果没有，就是用户名或者密码错误，如果有记录，就是登录成功，设置req.session.user，然后跳转到首页。
###登出流程###
我该怎么说呢，把req.session.user设置为null就可以啦。我们是以它界定用户是否登录了的。

##后记补充
1. Q：这尼玛，老板，我要是有非常多的路由，是不是每一个都要判断是不是登录了呢？累成狗咯。

A：在express中，有个叫做“中间件(middleware)”的宝贝，它可以在特定的条件下总是执行。客官可以上express官网看看大概是怎么回事儿。

对于这个问题，一个不是很严谨的解决方案就是：写一个中间件，在每一个请求发起的时候都进行判断用户是否登录，如果登录了，就交给下一个中间件执行，没登录的话，就跳转到"/login"，当然要排除掉"/login"这个路由。**中间件写在app.js里头哟！**

大概是这个样子：

	app.use(function(req,res,next){
		TODO;
	});
往后我会补充的。这是个好宝贝来的。

2.Q： 这尼玛，老板，你的几个ejs模板长得好像啊，你这样一个页面重复写，是不是有点问题哩？

A：真聪明。讲道理的话，我们可以把模板使用include来引入相同的部分而修改不同的部分。赶紧度娘起来，我这里是偷懒直接ctrl+C/V的。

3.Q:这尼玛，老板，我可不可以登录以后跳转到用户个人界面呢？比如"/users/David"或者"/users/Windy"
。

A：cool。这种情况下我们可以写路由如

	app.get("/users/:username",function(req,res,next){
		TODO;
	});
来进行处理，我们可以用**req.params.username**来获取url中的这个**:username**

聪明的你一定已经知道该怎么做啦~、

**前方高能：**

**对于users这一类路由，我们可以到"/routes/users.js"里写路由，我们加载了这个模块呢，发现了莫？**

**这样我们就可以方便快捷又有条理地管理我们的路由了不用全写在index.js里头**

4.XXXXX

###我就先写到这儿啦，写的不对的地方还望指正，但求不会误人子弟啊。###
sombre1320@163.com / 476779870@qq.com    ---sombre
