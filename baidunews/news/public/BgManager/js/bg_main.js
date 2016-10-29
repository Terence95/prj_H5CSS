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
        htmlspecialchars: 'basic/htmlspecialchars',

        additems: 'add/additem',
        deleteitems: 'delete/deleteitems',
        edititems: 'edit/edititem',


        findAll: 'findAll/findAll',
        createInnerBoxFragment: 'findAll/createInnerBoxFragment',

        leftBarSelected: 'basic/leftBarSelected'
    }
});

requirejs(['jquery', 'findAll', 'leftBarSelected', 'createInnerBoxFragment', 'findRightItem', 'findTableName', 'additems', 'deleteitems', 'edititems', 'htmlspecialchars'], function($, findAll, leftBarSelected, createInnerBoxFragment, findRightItem, findTableName, additems, deleteitems, edititems, htmlspecialchars) {

    // 初始默认展示news_recommend的数据
    $(document).ready(function() {
        var table = "news_recommend";
        // 测试百家请求
        // var table = "news_baijia";
        // find 开启 ajax 请求 /BgManager/+table名

        findAll(table);
    });

    additems;

    deleteitems;

    edititems;

    leftBarSelected;

    //显示退出界面
    $(".quit").click(function() {
        $(".mask").css("display", "block");
        $(".masktoquit").css("display", "block");
    });
    //右上关闭按钮
    $(".inner-close").click(function() {
        $(".mask").css("display", "none");
        $(".masktoquit").css("display", "none");
    });
    //返回按钮
    $("#goback").click(function() {
        $(".inner-close").click();
        return;
    });
    //退出按钮并跳转
    $("#quitConfirm").click(function() {
        window.location.href = '../login';
        $(".mask").css("display", "none");
        $(".masktoquit").css("display", "none");
        return;
    });
});
