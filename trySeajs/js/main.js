// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    require.async('jquery');
    console.log(1111);

    var index = require.async('index', function(index_callback) {
        console.log(index_callback);
    });

    // 通过 exports 对外提供接口
    // exports.doSomething = ...

    // 或者通过 module.exports 提供整个接口
    // module.exports = ...

});
