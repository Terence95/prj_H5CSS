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
    refreshNews('精选');
    $('nav a').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var  type = $(this).text();
        refreshNews(type);

    });





});

function refreshNews(type) {


    var $lists = $('article ul');
    $lists.empty();

    // ajax部分
    $.ajax({
        url: './server/getnews.php',
        type: 'GET',
        dataType: 'json',
        data: {newstype: type},
        success: function(data) {
            // console.log('1');
            // console.log(data);
            data.forEach(function(item, index, array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newssrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            });
        }
    });
    // 工厂函数生成li标签

}
