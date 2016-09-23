// 所有模块都通过 define 来定义 导出js
define(function(require, exports, module) {

  // 声明一个变量a 对象 作为导出接口的对象
  var a = {};
  a.doSomething = function () {
      console.log('my OK');
  };
  // 通过 exports 对外提供接口
  // exports.doSomething = ...
  a.doSomething2 = function () {
      console.log("my ok2");
  };


  // 或者通过 module.exports 提供整个接口
  // module.exports = ...
  module.exports = a;

});
