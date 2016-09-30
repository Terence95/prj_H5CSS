//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    // baseUrl: "js/lib",
    shim: {
        'jquery.leoweather.min': {
            deps: ['jquery'],
            exports: 'weather'
        }
    },
    paths: {
        "jquery": "../js/lib/jquery.min",
        "showhover": "showhover",
        "showSkinMenu": "showSkinMenu",
        "previewSkin": "previewSkin",
        "changeSkin": "changeSkin",
        "changeTab": "changeTab"
            // "leoweather":"jquery.leoweather.min"

    }
});

require(["jquery", "showhover", "showSkinMenu", "previewSkin", "changeSkin", "jquery.leoweather.min", "changeTab"], function($, showhover, showSkinMenu, previewSkin, changeSkin, changeTab) {

    load();
    showSearch();


    // localStorage.clear();
    // $('#temp').leoweather({
    //     format: '<em>{天气} {白天气温} </em>'
    // });
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

function showSearch() {
    $(window).scroll(function() {
        var showScrollHeight = $(window).scrollTop();
        console.log(showScrollHeight);
        var searchHeight = $('#wrapper').height() - $('#header').height() * 2;
        // console.log(searchHeight);
        if (showScrollHeight > searchHeight) {
            $('.hide-search').slideDown(400);
        } else {
            $('.hide-search').hide();
        }
    });
}
