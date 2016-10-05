// 这个是导航栏登录设置的hover显示模块
define(['jquery'], function($) {
    var isDown = false;

    $('.change-skin-btn').click(function(event) {
        /* Act on the event */
        if (!isDown) {
            $('.skin-container').slideDown(400);
            isDown = true;
        }
    });
    $('.roll-up').click(function(event) {
        /* Act on the event */
        if (isDown) {
            $('.skin-container').slideUp(400);
            isDown = false;
        }

    });

    $('#main-wrap').click(function(event) {
        /* Act on the event */
        if (isDown) {
            $('.skin-container').slideUp(400);
            isDown = false;
        }

    });




});
