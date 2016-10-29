1. 进入bin目录下命令行输入：node www启动服务进程 
	- 后台登录url ： localhost:3001/login  (账号：admin 密码：admin)
    - 手机端百度新闻 ：localhost:3001/index
    - 数据库相关信息配置在：/routes/BgManager.js  还有 /routes/index.js 里面

存在的问题：

1. 同时删除多条数据功能会报错，但是去数据库看数据又是被删除了的

		- 错误信息(/Users/terence/Desktop/任务/第九周/baidunews/news/node_modules/mysql/lib/		protocol/Parser.js:78
        throw err; // Rethrow non-MySQL errors
        ^
		Error: Can't set headers after they are sent.)


2. 没有对sql注入进行处理，有没有类似于像php那样 htmlspecialchars() 类似的方法进行处理呢？