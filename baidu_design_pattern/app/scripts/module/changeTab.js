define(['jquery'], function($) {
    // $('.tab_menu').each(function(index, el) {
    //     var listNode = $(this);
    //     $(this).click(function(event) {
    //         /* Act on the event */
    //         // alert(this);
    //         $('.menu_hover').removeClass('menu_hover');
    //         listNode.addClass('menu_hover');
    //
    //         function change(i) {
    //             // change tab 核心就是点击时把main_content的children display设为none
    //             $('.main_content').children().css('display', 'none');
    //             // 根据index让对应的content显示
    //             $('#s_content_' + i).css('display', 'block');
    //         }
    //         if (index >= 0 && index < 5) {
    //             change(index);
    //         }
    //
    //     });
    // });
});


/**
 * js设计模式：单例模式
 * 功能：切换 关注 推荐 视频等tab
 */
var change_tab = {

    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.tabmenu = $('.tab_menu');
    },
    bind: function() {
        var me = this;
        me.tabmenu.each(function(index, el) {
            var listNode = $(this);
            $(this).click(function(event) {
                /* Act on the event */
                // alert(this);
                $('.menu_hover').removeClass('menu_hover');
                listNode.addClass('menu_hover');

                function change(i) {
                    // change tab 核心就是点击时把main_content的children display设为none
                    $('.main_content').children().css('display', 'none');
                    // 根据index让对应的content显示
                    $('#s_content_' + i).css('display', 'block');
                }
                if (index >= 0 && index < 5) {
                    change(index);
                }

            });
        });
    }
};
