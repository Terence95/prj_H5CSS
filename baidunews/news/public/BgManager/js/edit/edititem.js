define(['convertToTable', 'convertToSelected', 'findRightItem', 'findAll'], function(convertToTable, convertToSelected, findRightItem, findAll) {
    // 修改新闻的id
    var editNewsID;

    return {
        showBox: (
            $(".edititems").click(function(event) {
                /* Act on the event */
                var tablename = convertToTable();
                var selected = convertToSelected(tablename);

                if (selected.length === 0) {
                    alert('请选择要修改的新闻');
                    return;
                }
                if (selected.length > 1) {
                    alert('一次只能修改一条新闻!');
                    return;
                }

                var tab_item = findRightItem(tablename);
                // 找到被选中的新闻的
            })
        )
    };
});
