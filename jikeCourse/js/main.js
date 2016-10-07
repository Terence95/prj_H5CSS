//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    // baseUrl: "js/lib",
    paths: {
        "jquery": "../js/lib/jquery.min",
        "bindHoverEffect": "../js/bindHoverEffect",
        "changeListType": "../js/changeListType",
        "backTop": "../js/backTop",
        "searchBoxEvent": "../js/searchBoxEvent"

    }
});

require(["jquery", "bindHoverEffect", "changeListType", "backTop", "searchBoxEvent"], function($, bindHoverEffect, changeListType, backTop, searchBoxEvent) {


});
