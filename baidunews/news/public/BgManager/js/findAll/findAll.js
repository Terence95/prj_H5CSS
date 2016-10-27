define(['jquery','createInnerBoxFragment'], function($,createInnerBoxFragment) {
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
                console.log(data);
            }
        });


    }
    return findAll;
});
