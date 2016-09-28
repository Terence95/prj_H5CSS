// 皮肤预览效果

define(['jquery'], function($) {
    var i = 1;
    $(".skin-img li").hover(function() {
        i = $(this).index();
        console.log(i);
        $(".bgimg-con").css("background", 'url(images/bg' + i + 's.jpg)');
        $(".bgimg-con").css("background-size", "264px 180px");

    });
    // $(".bgcon img").click(function() {
    //     $("body").css("background", 'url(images/bg' + i + '.jpg)');
    // });
});
