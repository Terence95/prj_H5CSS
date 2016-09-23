//my/shirt.js now does setup work
//before returning its module definition.
define(['require','index'],function (require) {
    //Do setup work here
    var index = {};
    index = {
        init: function() {
            console.log("index init");
        },
        index_fun1:function(){
            console.log("index fun1");
        }
    };
    return index;
});
