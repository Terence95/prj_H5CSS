//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    // baseUrl: "js/lib",
    paths: {
        "jquery": "../js/lib/jquery.min",
        // "leoweather":"jquery.leoweather.min"

    }
});

require(["jquery"], function($) {


    imgLocation();
    // 实现滚动加载部分，首先监听鼠标滚动
    var dataImg = {
        "data": [{
            "src": "1.jpg"
        }, {
            "src": "2.png"
        }, {
            "src": "3.png"
        }, {
            "src": "4.png"
        }, {
            "src": "5.png"
        }, {
            "src": "6.png"
        }, {
            "src": "7.png"
        }]
    };
    window.onscroll = function() {
        // 以最后一张图片到达底部一半的时候进行加载
        if (scrollSide()) {
            // alert('a');
            $.each(dataImg.data, function(index, el) {
                // 动态创建div img
                var box = $("<div>").addClass('box').appendTo($(".container"));
                var content = $("<div>").addClass('content').appendTo(box);
                // console.log("images/"+$(el).attr("src"));
                var img = $("<img>").attr('src', "images/" + $(el).attr("src"));
                img.appendTo(content);
            });
            imgLocation();

        }
        toTop();
    };
});

function scrollSide() {
    // var box = $('.box');
    // 获取最后一张图片的高度
    // var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    // var documentHeight = $(document).height();
    // var scrollHeight = $(window).scrollTop();
    // return (lastboxHeight<scrollHeight+documentHeight)?true:false;
    var documentHeight = $(document).height(); //获取当前文档视口高度
    var windowHeight = $(window).height(); //获取窗口高度
    var scrollHeight = $(window).scrollTop(); //获取鼠标滚动的高度
    return windowHeight + scrollHeight >= documentHeight;

}

function imgLocation() {
    var box = $('.box');
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    // 遍历
    box.each(function(index, value) {
        // console.log(index + "--" + value);
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
            // console.log(boxHeight);
        } else {
            // 获取图片最小高度
            var minboxHeight = Math.min.apply(null, boxArr);
            // 获取位置
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            // console.log(minboxIndex);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}

//滚动条滑动高度大于100时，出现返回顶部按钮
function toTop() {
    var scrollHeight = $(window).scrollTop();
    if (scrollHeight > 100) {
        $(".goto-top").css("display", "block");
        // console.log(scrollHeight);
    } else {
        // console.log(scrollHeight);
        $(".goto-top").css("display", "none");
    }
}
