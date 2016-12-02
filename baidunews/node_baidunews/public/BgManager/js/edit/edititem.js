define(['convertToTable', 'convertToSelected', 'findRightItem', 'findAll', 'htmlspecialchars'], function(convertToTable, convertToSelected, findRightItem, findAll, htmlspecialchars) {
    // 修改新闻的id
    var editNewsID;

    return {
        showBox: (
            $(".edititems").click(function(event) {
                /* Act on the event */
                console.log(11);
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
                // titles 是指新闻标题 图片地址之类的标题
                var titles = $("." + tab_item).find(".content-item-id.selected").parent().parent().find(".context-item-title");
                editNewsID = $("." + tab_item).find(".content-item-id.selected").text();
                // console.log(titles);

                // 原来的内容填充进修改的表格中，便于修改
                titles.each(function(index, el) {
                    if ($(this).text() == " 新闻标题") {
                        $("#editTitle").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 图片地址") {
                        $("#editImg_url").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 新闻内容") {
                        $("#editContent").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 新闻日期") {
                        $("#editTime").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 新闻来源") {
                        $("#editFrom").val($(this).next("td").text());
                    }
                });

                // 找到被选中的新闻的
                $(".mask").css("display", "block");
                $(".masktoedititems").css("display", "block");
                var leftitems = $(".clear-backend").children(".focused").next().text();
                $(".masktoedititems").find(".innerHdItemsName").text(leftitems);
            })
        ),
        closeBox: (
            // 右上角关闭按钮
            $(".inner-close").click(function() {
                $(".mask").css("display", "none");
                $(".masktoedititems").css("display", "none");
            })
        ),
        submitConfirm: (
            // 提交修改按钮
            $('#submitOfEditItems').click(function(event) {
                /* Act on the event */
                var tablename = convertToTable();
                var id = editNewsID;
                var title = htmlspecialchars($('#editTitle').val());
                var img_url = htmlspecialchars($("#editImg_url").val());
                var content = htmlspecialchars($("#editContent").val());
                var time = htmlspecialchars($("#editTime").val());
                var from = htmlspecialchars($("#editFrom").val());
                var token = $('#token').val();

                if (title === "" || title === "undefined" ||
                    img_url === "" || img_url === "undefined" ||
                    content === "" || content === "undefined" ||
                    time === "" || time === "undefined" ||
                    from === "" || from === "undefined"
                ) {
                    $('.editConfirm').text('所填内容不能为空');
                    setTimeout(function functionName() {
                        $(".editConfirm").text("");
                    }, 1000);
                    return;
                }

                // 开ajax
                $.ajax({
                        url: '/BgManager/news_list/edit',
                        type: 'post',
                        data: {
                            "table": tablename,
                            "id": id,
                            "title": title,
                            "img_url": img_url,
                            "content": content,
                            "time": time,
                            "from": from,
                            "token": token
                        },
                        success: function(data) {
                            if (data) {
                                findAll(tablename);
                                $(".editConfirm").text("修改成功，正在返回……");
                                setTimeout(function() {
                                    //close
                                    $(".mask").css("display", "none");
                                    $(".masktoedititems").css("display", "none");
                                    $(".editConfirm").text("");
                                }, 100);
                            } else {
                                $(".editConfirm").text("修改失败！");
                                setTimeout(function() {
                                    $(".editConfirm").text("");
                                }, 100);
                            }
                        }
                    })
                    .done(function() {
                        console.log("success");
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });

            })
        )
    };

});
