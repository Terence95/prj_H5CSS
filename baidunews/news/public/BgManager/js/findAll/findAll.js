define(['jquery', 'createInnerBoxFragment', 'calculateSelectedNum'], function($, createInnerBoxFragment, calculateSelectedNum) {
    function findAll(table) {
        $.ajax({
            url: '/BgManager/' + table,
            type: 'get',
            async: false,

            success: function(data) {
                // 请求数据
                // console.log(data);
                // console.log(data);
                // createInnerBoxFragment 方法拿到数据之后生成对应的数据
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
