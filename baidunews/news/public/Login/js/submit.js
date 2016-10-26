define(['jquery'], function($) {
    var _submit = $(function() {
        $('body').keydown(function(event) {
            /* Act on the event */
            if (event.keyCode == 13) {
                $('#login-btn').click();
            }
        });
    });
    return _submit;
});
