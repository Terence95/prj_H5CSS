//my/shirt.js now does setup work
//before returning its module definition.
require.config({
    // 确定base路径
    baseUrl: "js/lib",

    paths: {
        "jquery": "jquery.min"
    }
});

require(["jquery"], function($) {
    $(function() {
        $('#btn').click(function(event) {
            /* Act on the event */
            // $('.test').fadeToggle(400, "linear", function() {
            //     console.log('done');
            // });
            $('.test').animate({
                width: "300px",
                htight: "300px",
                fontSize: "10em"
            }, 1000);
        });
    });
});
