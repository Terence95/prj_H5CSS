//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    // baseUrl: "js/lib",

    paths: {
        "jquery": "../js/lib/jquery.min",
        "showhover": "showhover",
        "showSkinMenu": "showSkinMenu",
        "previewSkin": "previewSkin",
        "changeSkin":"changeSkin"

    }
});

require(["jquery", "showhover", "showSkinMenu", "previewSkin","changeSkin"], function($, showhover, showSkinMenu, previewSkin,changeSkin) {

    load();
    // $('.login').mouseenter(function() {
    //     $('.personal-list').addClass('show-index');
    // });
    // $('.login').mouseleave(function() {
    //     $('.personal-list').removeClass('show-index');
    // });
    // $('.settings').mouseenter(function() {
    //     $('.setting-list').addClass('show-index');
    // });
    // $('.settings').mouseleave(function() {
    //     $('.setting-list').removeClass('show-index');
    // });
    // $('.more').mouseenter(function() {
    //     $('.more-list').addClass('show-index').css({
    //         "height": $(window).height()
    //     });
    // });
    // $('.more').mouseleave(function() {
    //     $('.more-list').removeClass('show-index');
    // });

});
