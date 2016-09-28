// 这个是导航栏登录设置的hover显示模块
define(['jquery'], function($) {
    $('.login').mouseenter(function() {
        $('.personal-list').addClass('show-index');
    });
    $('.login').mouseleave(function() {
        $('.personal-list').removeClass('show-index');
    });
    $('.settings').mouseenter(function() {
        $('.setting-list').addClass('show-index');
    });
    $('.settings').mouseleave(function() {
        $('.setting-list').removeClass('show-index');
    });
    $('.more').mouseenter(function() {
        $('.more-list').addClass('show-index').css({
            "height": $(window).height()
        });
    });
    $('.more').mouseleave(function() {
        $('.more-list').removeClass('show-index');
    });
});
