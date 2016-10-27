define(['jquery', 'findTableName'], function($, findTableName) {
    function convertToTable() {
        var tablename;
        // 找到例如推荐之类的左边列表
        var leftitemsname = $(".backendpanel").children("input.focused").next().text();
        // console.log(leftitemsname);
        // findtablename 找到 表名 如：news_recommend
        tablename = findTableName(leftitemsname);
        console.log(tablename);
        return tablename;
    }

    return convertToTable;
});
