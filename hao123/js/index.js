/**
 *btns:存储改变颜色按钮
 *getEles,getBg：存储需要改变颜色的元素
 *getDoc():获取元素ID函数
 *change():对需要改变颜色的元素改变颜色并存储颜色数据
 *save():写入缓存
 *load():读出缓存
 */
var btns = document.getElementsByClassName("color-btn");
var getEles = document.getElementsByClassName("hover-green"),
    i;
var getBg = document.getElementsByClassName("nav-ul");
var red, blue, pink, purple, current, curcolor;

function getDoc(id) {
    return document.getElementById(id);
}

function change(curcolor) {
    for (var i = 0; i < getBg.length; i++) {
        getBg[i].style.background = curcolor;
        continue;
    }
    for (var j = 0; j < getEles.length; j++) {
        getEles[j].style.color = curcolor;
        continue;
    }
    save(curcolor); //调用save函数存储颜色值
}

function save(data) {
    localStorage.setItem('current', data);
}

function load() {
    curcolor = localStorage.getItem('current');
    change(curcolor);
}
window.onload = load();

// 完成对按钮的事件绑定
red = getDoc("btn1").addEventListener('click', function() {
    change("#c2e7d3");
}, false);
blue = getDoc("btn2").addEventListener('click', function() {
    change("#33FAFF");
}, false);
pink = getDoc("btn3").addEventListener('click', function() {
    change("#8f7d85");
}, false);
purple = getDoc("btn4").addEventListener('click', function() {
    change("#A233FE");
}, false);
