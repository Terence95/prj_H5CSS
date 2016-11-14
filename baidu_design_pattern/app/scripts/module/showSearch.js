// 显示顶部搜索栏
define(['jquery'], function($) {
    showSeach();
});

var showSeach = function() {
    $(window).scroll(function() {
        var showScrollHeight = $(window).scrollTop();
        console.log(showScrollHeight);
        var searchHeight = $('#wrapper').height() - $('#header').height() * 2;
        // console.log(searchHeight);
        // if (showScrollHeight > searchHeight) {
        //     $('.hide-search').slideDown(400);
        // } else {
        //     $('.hide-search').hide();
        // }
        if ($(window).scrollTop() > 0) {
            $('.hide-search').slideDown(400);
        } else {
            $('.hide-search').slideUp(100);
        }
    });
};
