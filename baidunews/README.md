- 后台登录url ： localhost:3000  (账号：admin 密码：admin)
- 手机端百度新闻 ：localhost:3000/index

#### 安全性相关的http头
 * 增加helmet包，开启相关http头，例如：
    * ```X-XSS-Protection```:开启大多现代浏览器内建的对于跨站脚本攻击（XSS）的过滤功能。

#### 对存储型XSS的防御

 * 使用htmlspecialchars.js，针对input框的输入进行转义
 

#### 对sql注入的防御

 * 服务器的数据库链接使用的是ORM的方式，框架本身对于SQL注入提高了难度。但是经过测试sql注入仍然有可能造成风险，于是通过htmlspecialchars.js对特殊字符进行转义之后，将转义过后的字符存入数据库，以防御sql注入
 
 
第三版，将项目改为可以运行的了


