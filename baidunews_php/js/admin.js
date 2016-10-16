// 打开后台页面时，发送请求刷新新闻列表
$(document).ready(function() {

    var $newsTable = $('#newstable');

    refreshNews();

    // 添加新闻
    $('#btnsubmit').click(function(event) {
        event.preventDefault();

        // 输入判断
        if ($('#newstitle').val() === "" ||
            $('#newsimg').val() === "" ||
            $('#newstime').val() === "" ||
            $('#newssrc').val() === ""
        ) {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {

            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };

            // 提交添加
            $.ajax({
                url: './server/insert.php',
                type: 'post',
                data: jsonNews,
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    refreshNews();
                }
            });
        }
    });

    // 事件委托来实现绑定事件,删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(event) {
        console.log('click');
        $('#deleteModal').modal('show');
        console.log(deleteId = $(this).parent().prevAll().eq(5).html());
    });

    $('#deleteModal #confirmDelete').click(function(event) {
        // console.log('sasdfa');
        if (deleteId) {
            // console.log('aaa');
            $.ajax({
                url: './server/delete.php',
                type: 'post',
                data: {
                    newsid: deleteId
                },
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            });


        }
    });


    // 事件委托来实现绑定事件,修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(event) {
        console.log('click');
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        console.log(updateId);
        $.ajax({
          url: './server/curnews.php',
          type: 'get',
          dataType: 'json',
          data: {newsid:updateId},
          success:function (data) {
              console.log(data);
              $('#unewstitle').val(data[0].newstitle);
              $('#unewstype').val(data[0].newstype);
              $('#unewsimg').val(data[0].newsimg);
              $('#unewssrc').val(data[0].newssrc);
              var utime = data[0].newstime.split(' ')[0];
              $('#unewstime').val(utime);
          }
        });
    });

    // 更新新闻
    $('#updateModal #confirmUpdate').click(function(event) {
        console.log('aa');
        $.ajax({
          url: './server/update.php',
          type: 'post',
          data: {
              newstitle:$('#unewstitle').val(),
              newstype:$('#unewstype').val(),
              newsimg:$('#unewsimg').val(),
              newstime:$('#unewstime').val(),
              newssrc:$('#unewssrc').val(),
              id:updateId
          },
          success:function (data) {
              $('#updateModal').modal('hide');
              refreshNews();
          }
        });
    });

    function refreshNews() {
        // 1. 清空新闻 empty table
        $newsTable.empty();
        $.ajax({
            url: './server/bggetnews.php',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                data.forEach(function(el, index, array) {
                    var $tdid = $('<td>').html(el.id);
                    var $tdtype = $('<td>').html(el.newstype);
                    var $tdtitle = $('<td>').html(el.newstitle);
                    var $tdimg = $('<td>').html(el.newsimg);
                    var $tdsrc = $('<td>').html(el.newssrc);
                    var $tdtime = $('<td>').html(el.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html("编辑");
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html("删除");
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                });
            }
        });


    }
});
