//my/shirt.js now does setup work
//before returning its module definition.
define(['require', 'test'], function(require) {
    //Do setup work here
    var init = function(){
      console.log("test init");
    };

    return init;
});
