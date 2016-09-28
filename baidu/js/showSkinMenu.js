// 这个是导航栏登录设置的hover显示模块
define(['jquery'], function($) {
    $('.change-skin-btn').click(function(event) {
      /* Act on the event */
      $('.skin-container').slideDown(400);
    });
    $('.roll-up').click(function(event) {
      /* Act on the event */
      $('.skin-container').slideUp(400);
    });
    
});
