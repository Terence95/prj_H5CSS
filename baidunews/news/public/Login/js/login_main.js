require.config({
    baseUrl: 'js',
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
            event.preventDefault();
            // console.log('click');
            // 获取input内的值
            var username = $('#username').val();
            var password = $('#password').val();
            if (username === '' || username === 'undefined') {
                // alert
                // alert('用户名不能为空');
                note_info('用户名不能为空');
                // TODO: 之后用美化的方法来提示
                $('#username').focus();
                return;

            }
            if (password === '' || password === "undefined") {
                note_info('密码不能为空');
                $('#password').focus();
                return;
            }

            $.ajax({
                // 信息提交地址
                url: './doLogin',
                type: 'post',
                data: {
                    "username": username,
                    "password": password
                },
                success: function(data) {
                    if (data === true) {
                        setTimeout(function() {
                            // window.location.href = "http://www.baidu.com";
                            // 成功，这个验证成功之后应该能跳转到自己的bgManager页面上
                            window.location.href = "/BgManager";
                        }, 2000);
                        $('.form').fadeOut(500, function() {
                            console.log('fadeOut done');
                        });
                        $('.wrapper').addClass('form-success');
                    } else {
                        $('#password').val("");
                        $('#password').focus();
                        // TODO: 美化提示方法
                        //  alert('用户名或密码错误');
                        note_info('用户名或密码错误');
                    }
                }
            });
        });
        _submit;
    });
