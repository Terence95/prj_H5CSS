// backTop js  控制返回顶部
define(['jquery'], function($) {

    $(document).ready(function() {
        $('#gototop').click(function(event) {
            /* Act on the event */
            $('body').animate({
                scrollTop: 0
            }, 800);
        });
    });

    $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop();
        // 获取滚动高度
        // console.log(scrollHeight);
        if (scrollHeight > 0) {
            // $(".backTop .back-arrow").fadeOut('slow');
            $(".back-arrow").show("fast");
        }
        if (scrollHeight === 0) {
            $(".back-arrow").hide('fast');
        }
    });


});
