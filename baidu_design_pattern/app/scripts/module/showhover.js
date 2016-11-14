// 这个是导航栏登录设置的hover显示模块
define(['jquery'], function($) {
    
});

/**
 * js设计模式: 单例模式
 */
var settings_hover = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.settings = $('.settings');
    },
    bind: function() {
        var me = this;
        me.settings.mouseenter(function(event) {
            /* Act on the event */
            $('.setting-list').addClass('show-index');
        });
        me.settings.mouseleave(function(event) {
            /* Act on the event */
            $('.setting-list').removeClass('show-index');
        });
    }
};


/**
 * js设计模式：单例模式
 * 功能：login 的hover
 *
 */
var login_hover = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.login = $('.login');
    },
    bind: function() {
        var me = this;
        me.login.mouseenter(function() {
            $('.personal-list').addClass('show-index');
        });
        me.login.mouseleave(function() {
            $('.personal-list').removeClass('show-index');
        });
    }
};

/**
 * js设计模式：单例模式
 * 功能：更多产品的hover
 *
 */
var more_hover = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.more = $('.more');
    },
    bind: function() {
        var me = this;
        me.more.mouseenter(function() {
            $('.more-list').addClass('show-index').css({
                "height": $(window).height()
            });
        });
        me.more.mouseleave(function() {
            $('.more-list').removeClass('show-index');
        });
    }

};
