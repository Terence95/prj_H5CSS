require.config({
    baseUrl: 'js',
    paths: {
        bg_main: 'bg_main',
        jquery: 'lib/jquery.min',
        findTableName: 'basic/findTableName',
        findRightItem: 'basic/findRightItem',
        calculateSelectedNum: 'basic/calculateSelectedNum',
        convertToTable: 'basic/convertToTable',
        convertToSelected: 'basic/convertToSelected',

        findAll: 'findAll/findAll',
        createInnerBoxFragment: 'findAll/createInnerBoxFragment',

        leftBarSelected: 'basic/leftBarSelected'
    }
});

requirejs(['jquery', 'findAll', 'leftBarSelected', 'createInnerBoxFragment', 'findRightItem', 'findTableName'], function($, findAll, leftBarSelected, createInnerBoxFragment, findRightItem, findTableName) {

    // 初始默认展示news_recommend的数据
    $(document).ready(function() {
        var table = "news_recommend";
        // 测试百家请求
        // var table = "news_baijia";
        // find 开启 ajax 请求 /BgManager/+table名
        
        findAll(table);
    });

});
