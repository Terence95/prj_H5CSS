//my/shirt.js now does setup work
//before returning its module definition.
define(['require','main'],function (require) {
    //Do setup work here
    require(['index','test'],function (index,test) {
          console.log(index);
          console.log(test);

          console.log(index.init());
          console.log(test());
    });
});
