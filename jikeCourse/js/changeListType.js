define(['jquery'], function($) {


    $(document).ready(function() {
        bindHover();
        $('.kuai-icon').click(function(event) {
            /* Act on the event */
            if ($('#changeid').hasClass('lesson-list2')) {
                $('#changeid').removeClass('lesson-list2');
                $('#changeid').addClass('lesson-list');
                // list1 = true;
                // 点击kuai-icon 绑定对应hover
                bindHover();
            }

        });
        $('.list-icon').click(function(event) {
            /* Act on the event */
            if ($('#changeid').hasClass('lesson-list')) {
                $('#changeid').removeClass('lesson-list');
                $('#changeid').addClass('lesson-list2');
                $('.lesson-infor p').removeAttr('style');

                // list1 = false;
                // 切换listType时解除li上绑定的事件
                $('#changeid ul li').unbind();
                // 重新绑定另外的事件
                bindList2();

            }
        });
    });
});
var getListType = function () {
    if ($('#changeid').hasClass('lesson-list')) {
      return true;
    }else {
      return false;
    }
};
