$(document).ready(function() {
    // <ul class="news-lists">
    //     <li class="news-list">
    //         <div class="newsimg">
    //             <img src="img/1.jpg" alt="" width="100%" height="100%">
    //         </div>
    //         <div class="newscontent">
    //             <h1>这是一条测试数据</h1>
    //             <p><span class="newstime">2016年10月14日</span>
    //                 <span class="newssrc">搜狐财经</span></p>
    //         </div>
    //     </li>
    // </ul>
    refreshNews();




});

function refreshNews() {


    var $lists = $('article ul');
    $lists.empty();

    // ajax部分
    $.ajax({
        url: './server/getnews.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('1');
            console.log(data);
            // data.each(function(index, el) {
            //     var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            //     var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            //     var $img = $('<img>').attr('src', data.newsimg).appendTo($newsImg);
            //     var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
            //     var $h1 = $('<h1></h1>').html(data.newstitle).appendTo($newsContent);
            //     var $p = $('<p></p>').appendTo($newsContent);
            //     var $newsTime = $('<span></span>').addClass('newstime').html(data.newstime).appendTo($p);
            //     var $newssrc = $('<span></span>').addClass('newssrc').html(data.newssrc).appendTo($p);
            // });
        }
    });
    // 工厂函数生成li标签

}
