// 更改皮肤效果
define(['jquery'], function($) {
    var i = 1;
    $(".skin-img li").hover(function() {
        i = $(this).index();
        console.log(i);
        $(".bgimg-con").css("background", 'url(images/bg' + i + 's.jpg)');
        $(".bgimg-con").css("background-size", "264px 180px");
    });
    $('.list-one img').click(function(event) {
        /* Act on the event */
        $('body').css('background', 'url(images/bg' + i + 's.jpg)');
        $('body').css('background-size', 'cover');
        save(i);
    });
    // $(".bgcon img").click(function() {
    //     $("body").css("background", 'url(images/bg' + i + '.jpg)');
    // });
});

var curImg;

function save(data) {
    localStorage.setItem('getImg', data);
}

function load() {
    curImg = localStorage.getItem('getImg');
    $('body').css(
        "background", 'url(images/bg' + curImg + 's.jpg)'
    );
    $('body').css('background-size', 'cover');
}
