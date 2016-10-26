require.config({
    baseUrl: 'js',
    paths: {
        bg_main: 'bg_main',
        jquery: 'lib/jquery.min',


        findAll: 'findAll/findAll',
        createInnerBoxFragment: 'findAll/createInnerBoxFragment',

        leftBarSelected: 'basic/leftBarSelected'
    }
});

requirejs(['jquery', 'findAll', 'leftBarSelected', 'createInnerBoxFragment'], function($, findAll, leftBarSelected, createInnerBoxFragment) {
    $(document).ready(function() {
        var table = "news_recommend";
        findAll(table);
    });
});
