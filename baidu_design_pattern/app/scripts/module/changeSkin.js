// 更改皮肤效果
define(['jquery'], function($) {

});

/**
 *  js设计模式，单例模式
 *  功能：实现换肤功能
 */
var change_skin = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.skinimg_li = $(".skin-img li");
        me.listone_img = $('.list-one img');
    },
    bind: function() {
        var me = this;
        var i = 1;
        // 预览背景
        me.skinimg_li.hover(function() {
            i = $(this).index();
            // console.log(i);
            $(".bgimg-con").css("background", 'url(images/bg' + i + 's.jpg)');
            $(".bgimg-con").css("background-size", "264px 180px");
        });
        me.listone_img.click(function(event) {
            /* Act on the event */
            $('body').css('background', 'url(images/bg' + i + 's.jpg)');
            $('body').css('background-size', 'cover');
            $('body').css('background-attachment', 'fixed');
            save(i);
            // saveBg.setBg(i);
        });
    }


};


var curImg;


// 保存当前背景
function save(data) {
    localStorage.setItem('getImg', data);
}

// 
var loadBg = {
    init: function() {
        curImg = localStorage.getItem('getImg');
        console.log(curImg);
        $('body').css(
            "background", 'url(images/bg' + curImg + 's.jpg)'
        );
        $('body').css('background-size', 'cover');
        $('body').css('background-attachment', 'fixed');
    }
};
