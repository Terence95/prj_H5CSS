define(['jquery'], function($) {
    $('.tab_menu').each(function(index, el) {
        var listNode = $(this);
        $(this).click(function(event) {
            /* Act on the event */
            // alert(this);
            $('.menu_hover').removeClass('menu_hover');
            listNode.addClass('menu_hover');

            function change(i) {
                $('.main_content').children().css('display', 'none');
                $('#s_content_' + i).css('display', 'block');
            }
            if (index >= 0 && index < 5) {
                change(index);
            }

        });
    });
});
