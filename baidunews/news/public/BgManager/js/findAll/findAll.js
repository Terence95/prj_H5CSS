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
                createInnerBoxFragment(data, table);
            }
        });


    }
    return findAll;
});
