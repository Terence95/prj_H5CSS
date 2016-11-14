// 换肤面板
define(['jquery'], function($) {
    // var isDown = false;
    //
    // $('.change-skin-btn').click(function(event) {
    //     /* Act on the event */
    //     if (!isDown) {
    //         $('.skin-container').slideDown(400);
    //         isDown = true;
    //     }
    // });
    // $('.roll-up').click(function(event) {
    //     /* Act on the event */
    //     if (isDown) {
    //         $('.skin-container').slideUp(400);
    //         isDown = false;
    //     }
    //
    // });
    //
    // $('#main-wrap').click(function(event) {
    //     /* Act on the event */
    //     if (isDown) {
    //         $('.skin-container').slideUp(400);
    //         isDown = false;
    //     }
    //
    // });
});

var show_SkinMenu = {
    // var isDown = false,
    // isDown: false,

    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.change_skin_btn = $('.change-skin-btn');
        me.roll_up = $('.roll-up');
        me.main_wrap = $('#main-wrap');
    },
    bind: function() {
        var me = this;
        var isDown = false;
        me.change_skin_btn.click(function(event) {
            /* Act on the event */
            if (!isDown) {
                $('.skin-container').slideDown(400);
                isDown = true;
            }
        });
        me.roll_up.click(function(event) {
            /* Act on the event */
            if (isDown) {
                $('.skin-container').slideUp(400);
                isDown = false;
            }
        });
        me.main_wrap.click(function(event) {
            /* Act on the event */
            if (isDown) {
                $('.skin-container').slideUp(400);
                isDown = false;
            }

        });
    }
};
