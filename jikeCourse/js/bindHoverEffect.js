
define(['jquery', 'changeListType'], function($, changeListType) {

});
// 绑定课程部分hover事件
var bindHover = function() {
    $('#changeid ul li').each(function(index) {
        var listLesson = $(this);
        var i = 0;
        i = index;
        if ($('#changeid').is('.lesson-list')) {
            console.log(1);
            listLesson.hover(
                function() {
                    $('.lesson-infor').eq(i).stop().animate({
                        "height": "175px"
                    }, 300);
                    $('.lesson-infor p').eq(i).stop().animate({
                        "height": "52px",
                        "opacity": "1"
                    }, 300, function() {
                        // body...
                        $('.lesson-infor p').eq(i).stop().show();

                    });
                    $('.zhongji').eq(i).stop().css('display', 'block');
                    $('.learn-number').eq(i).stop().slideDown();

                    // 播放按钮显示
                    $('.lessonplay').eq(i).stop().animate({
                        "opacity": "1"
                    }, 300);
                    $('.lesson-shoucang').eq(i).stop().animate({
                        // "display": "block",
                        // "opacity":"1"
                    }, 300, function() {
                        $('.lesson-shoucang').eq(i).stop().show();
                    });

                },
                function() {
                    $('.lesson-infor').eq(i).stop().animate({
                        "height": "88px"
                    }, 300);
                    $('.lesson-infor p').eq(i).stop().animate({
                        "height": "0px",
                        "opacity": "0"
                    }, 300, function() {
                        $('.lesson-infor p').eq(i).stop().hide();
                    });
                    $('.zhongji').eq(i).stop().css('display', 'none');
                    $('.learn-number').eq(i).stop().slideUp();
                    $('.lessonplay').eq(i).stop().animate({
                        opacity: "0"
                    }, 300);

                    $('.lesson-shoucang').eq(i).stop().animate({
                        // "display": "block",
                        // "opacity":"0"
                    }, 300, function() {
                        $('.lesson-shoucang').eq(i).stop().hide();
                    });
                }
            );
        }
    });
};

//  当lesson-list2情况下绑定不同的事件
var bindList2 = function() {
    $('#changeid ul li').each(function(index, el) {
        var listLesson = $(this);
        var i = 0;
        i = index;
        listLesson.hover(function() {
            /* Stuff to do when the mouse enters the element */
            $('.lessonplay').eq(i).animate({
                "opacity": "1"
            }, 200, function () {
              $('.lesson-shoucang').eq(i).show();
            });
            console.log("in");
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            $('.lessonplay').eq(i).animate({
                "opacity": "0"
            }, 200, function () {
                $('.lesson-shoucang').eq(i).hide();
                console.log(this);
            });

        });
    });
};
