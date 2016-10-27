define(['findAll', 'findTableName'], function(findAll, findTableName) {
    return {
        // 左边点击添加focused类，刷新右边内容
        leftBarSelected: (
            $('.backendpanel').children('input').click(function(event) {
                /* Act on the event */
                // this就是当前被点击的那个
                var _this = $(this);
                _this.siblings().removeClass('focused');
                _this.addClass('focused');
                var leftListName = _this.next().text();
                // console.log(leftListName);
                var table = findTableName(leftListName);
                findAll(table);
                $(".selectedItemNum").text(0);

            })
        )
    };
});
