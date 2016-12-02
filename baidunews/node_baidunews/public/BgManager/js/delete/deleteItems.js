define(['convertToTable', 'convertToSelected', 'findAll', 'findRightItem'], function(convertToTable, convertToSelected, findAll, findRightItem) {
    return {
        showBox: (
            $('.deleteitems').click(function(event) {
                /* Act on the event */
                $('.mask').css('display', 'block');
                $('.masktodeleteitems').css('display', 'block');
                var leftitemsname = $('.backendpanel').children('.focused').next().text();
                $('.masktodeleteitems').find('.innerHdItemsName').text(leftitemsname);
                //
                var selected = convertToSelected(convertToTable());
                // num就是右侧面板被选中的栏目的数量
                var num = selected.length;
                // console.log(num);
                // console.log(selected);
                if (num === 0) {
                    // 如果没有条目被选中
                    $('.deleteConfirms').text('请至少选定一条新闻');
                    $('#needReEdit').attr('disabled', 'disabled');
                    $('#deleteConfirm').attr('disabled', 'disabled');
                    return;
                } else {
                    $('.deleteConfirms').html("确定要删除选定的&nbsp;" + num + "&nbsp;项吗？");
                }
            })
        ),
        closeBox: (
            $('.inner-close').click(function(event) {
                /* Act on the event */
                $('.mask').css('display', 'none');
                $('.masktodeleteitems').css('display', 'none');
                // 移除按钮disabled状态
                $("#needReEdit").removeAttr("disabled");
                $("#deleteConfirm").removeAttr("disabled");
                // 清除提示框信息
                $('deleteConfirms').text('');
            })
        ),
        needReEdit: (
            $('#needReEdit').click(function(event) {
                /* Act on the event */
                $('.mask').css('display', 'none');
                $('.masktodeleteitems').css('display', 'none');
                // 移除按钮disabled状态
                $("#needReEdit").removeAttr("disabled");
                $("#deleteConfirm").removeAttr("disabled");
                // 清除提示框信息
                $('deleteConfirms').text('');
            })
        ),
        submitConfirm: (
            $('#deleteConfirm').click(function(event) {
                /* Act on the event */
                // 选中需要删除的信息集合 -- selected
                var tablename = convertToTable();
                var selected = convertToSelected(tablename);
                var tab_item = findRightItem(tablename);

                // 需要传递要删除的新闻id，和表名tablename
                var idsDel = '';
                var delItem = 0;
                selected.each(function() {
                    // $("span").text()就是新闻条目对应的id, 并且用逗号分隔开
                    idsDel = (idsDel + $(this).find("span").text()) + (((delItem + 1) == selected.length) ? '' : ',');
                    // console.log(idsDel);
                    // console.log(selected.length);
                    delItem++;
                });

                // console.log(idsDel);
                // 开ajax
                $.ajax({
                        url: '/BgManager/news_list/delete',
                        type: 'post',
                        data: {
                            "table": tablename,
                            "idsDel": idsDel
                        },
                        success: function(data) {
                            // 刷新右边新闻展示栏
                            if (data) {
                                // findAll 也是重新请求 拿到数据
                                findAll(tablename);
                                $('.' + tab_item).find('.selectedItemNum').text(0);
                                $('.deleteConfirms').html('删除成功，正在返回');
                                setTimeout(function() {
                                    // 关闭
                                    $('.mask').css('display', 'none');
                                    $('.masktodeleteitems').css('display', 'none');
                                }, 100);
                            } else {
                                console.log(111);
                                $('.deleteConfirms').html('删除失败，请重试!');
                            }
                        }
                    })
                    .done(function() {
                        console.log("success");
                    })
                    .fail(function() {
                        console.log("error");
                        $('.deleteConfirms').html('删除失败，请重试!');
                    })
                    .always(function() {
                        console.log("complete");
                    });

            })
        )
    };
});
