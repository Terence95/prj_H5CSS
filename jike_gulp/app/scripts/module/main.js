//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    // baseUrl: "js/lib",
    paths: {
        "jquery": "../lib/jquery.min",
        "backTop": "backTop",
        "searchBoxEvent": "searchBoxEvent"

    }
});

require(["jquery","backTop", "searchBoxEvent"], function($, backTop, searchBoxEvent) {


});
