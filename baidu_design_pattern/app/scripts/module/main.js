//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    // baseUrl: "js/lib",
    shim: {
        'jquery.leoweather.min': {
            deps: ['jquery'],
            exports: 'weather'
        }
    },
    paths: {
        "jquery": "../lib/jquery.min",
        "showhover": "showhover",
        "showSkinMenu": "showSkinMenu",
        "changeSkin": "changeSkin",
        "changeTab": "changeTab",
        "showSearch": "showSearch"
            // "leoweather":"jquery.leoweather.min"

    }
});

require(["jquery", "showhover", "showSkinMenu", "changeSkin", "jquery.leoweather.min", "changeTab", "showSearch"], function($, showhover, showSkinMenu, changeSkin, changeTab, showSearch) {

    // load(); // 加载在localStorage内的背景
    var start = (function() {
        loadBg.init();
        change_skin.init();
        change_tab.init();
        more_hover.init();
        login_hover.init();
        settings_hover.init();
        show_SkinMenu.init();
    })();
    // showSearch();

});
