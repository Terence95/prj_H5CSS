define(['jquery', 'findAll', 'convertToTable'], function($, findAll, convertToTable) {
    // TODO:
    return {
        showBox: (
            $('.additems').click(function(event) {
                /* Act on the event */
                // console.log('add click');
                $('.mask').css('display', 'block');
                $('.masktoadditems').css('display', 'block');
                // 拿到左边列表对应的 名，比如推荐
                var leftitems = $('.backendpanel').children('.focused').next().text();
                // console.log(leftitems);
                // 将它设置给添加 添加新闻 to： 后面这里
                $('.masktoadditems').find('.innerHdItemsName').text(leftitems);

                var timenow = new Date();
                var string = timenow.getFullYear() + "-" + (timenow.getMonth() + 1) + "-" + timenow.getDate() + " " + timenow.getHours() + ":" + timenow.getMinutes() + ":" + timenow.getSeconds();
                console.log(string);
                $('#title').val("");
                $('#img_url').val("");
                $('#content').val("");
                $('#time').val(string);
                $('#from').val("");
                // $('')
            })
        ),
        closeBox: (
            $('.inner-close').click(function(event) {
                /* Act on the event */
                $('.mask').css('display', 'none');
                $('.masktoadditems').css('display', 'none');
            })
        ),
        submitConfirm: (
            // 提交添加的新闻
            $('#submitOfAddItems').click(function(event) {
                /* Act on the event */
                // 拿到表名，比如 news_recommend
                var tablename = convertToTable();
                var title = $('#title').val();
                var img_url = $('#img_url').val();
                var content = $('#content').val();
                var time = $('#time').val();
                var from = $('#from').val();

                if (title === "" || title === "undefined" ||
                    img_url === "" || img_url === "undefined" ||
                    content === "" || content === "undefined" ||
                    time === "" || time === "undefined" ||
                    from === "" || from === "undefined"
                ) {
                    $('.addConfirm').text('所填内容不能为空');
                    setTimeout(function() {
                        $('.addConfirm').text('');
                    }, 1000);
                    return;
                }

            })
        )

    };
});
