// 控制顶部搜索动画的事件
define(['jquery'], function($) {

    $('#search-btn').click(function(event) {
      /* Act on the event */
      // 点击添加scale类，实现动画
      $('#searchbox').addClass('scale');
    });

    $('#close-btn').click(function(event) {
      /* Act on the event */
      $('#searchbox').removeClass('scale');
    });

});
