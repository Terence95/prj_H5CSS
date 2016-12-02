require.config({
    baseUrl: 'Login/js',
    paths: {
        login_main: 'login_main',
        jquery: 'jquery-2.1.1.min',
        note_info: 'note_information',
        _submit: 'submit'
    }
});

requirejs(['jquery', 'note_information', 'submit'],
    function($, note_info, _submit) {
        // 登录管理
        $('#login-btn').click(function(event) {
            /* Act on the event */
            // $.ajax({
            //     // 信息提交地址
            //     url: './login',
            //     type: 'post',
            //     data: {
            //         "username": username,
            //         "password": password,
            //         _csrf:$('#token').val()
            //     },
            //     success: function(data) {
            //         if (data === true) {
            //             console.log(data);
            //             setTimeout(function() {
            //                 // window.location.href = "http://www.baidu.com";
            //                 // 成功，这个验证成功之后应该能跳转到自己的bgManager页面上
            //                 window.location.href = "/BgManager";
            //             }, 2000);
            //             $('.form').fadeOut(500, function() {
            //                 console.log('fadeOut done');
            //             });
            //             $('.wrapper').addClass('form-success');
            //         } else {
            //             $('#password').val("");
            //             $('#password').focus();
            //             // TODO: 美化提示方法
            //             //  alert('用户名或密码错误');
            //             note_info('用户名或密码错误');
            //         }
            //     }
            // });
        });
        _submit;
    });
