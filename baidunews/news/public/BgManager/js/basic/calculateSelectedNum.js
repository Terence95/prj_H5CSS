define(['jquery', 'convertToTable', 'convertToSelected', 'findRightItem'], function($, convertToTable, convertToSelected, findRightItem) {
    function calculateSelectedNum() {
        var tablename = convertToTable();
        // console.log(tablename);
        // 返回item
        var tab_item = findRightItem(tablename);
        // 找到news_recommend之类的
        var selected = convertToSelected(tablename);
        // console.log(selected);
        var num = selected.length;
        $('.' + tab_item).find('.selectedItemNum').text(num);
    }

    return calculateSelectedNum;
});
