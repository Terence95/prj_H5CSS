define(['jquery','findRightItem'], function ($,findRightItem) {
    function convertToSelected(tablename) {
        // tab-item-1之类的
        var tab_item = findRightItem(tablename);
        // console.log(tab_item);
        // 找到被选中id的
        var selected = $('.'+tab_item).find('.content-item-id.selected');

        return selected;
    }

    return convertToSelected;
});
