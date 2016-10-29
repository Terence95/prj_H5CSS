define(['jquery', 'createInnerBoxFragment', 'calculateSelectedNum'], function($, createInnerBoxFragment, calculateSelectedNum) {
    function findAll(table) {
        $.ajax({
            // url: '/BgManager/' + table,
            url:'/BgManager/news_list',
            type: 'post',
            async: false,
            data:{
                "table": table
            },

            success: function(data) {
                // 请求数据
                // console.log(data);
                // console.log(data);
                // createI nnerBoxFragment 方法拿到数据之后生成对应的数据
                // data.forEach(function (e) {
                //     console.log(e);
                // });
                // console.log(data);
                createInnerBoxFragment(data, table);
                // console.log(data);
            }
        });

        // 给新闻id添加点击 标记事件
        // 这个是动态添加的类，需要同步ajax, 之后抛出它的选择器事件
        var contentitemid = $('.content-item-id').click(function(event) {
            /* Act on the event */
            var _this = $(this);
            _this.toggleClass('selected');
            calculateSelectedNum();
        });
        return contentitemid;
    }
    return findAll;
});
