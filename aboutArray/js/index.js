window.onload = function() {
    // var array = new Array("a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a");
    var count = document.getElementById("count");
    var posit = document.getElementById("posit");
    var times = document.getElementById("times");
    addEvent(count, "click", countClick);
    addEvent(posit, "click", positClick);
    addEvent(times, "click", timesClick);

};

// function addEvent
function addEvent(obj, type, handle) {
    try { // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle, false);
    } catch (e) {
        try { // IE8.0及其以下版本
            obj.attachEvent('on' + type, handle);
        } catch (e) { // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}

function getIndexOfTarget() {
    var target = getCount();
    var array = new Array("a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a");
    var indexOfTarget = [];
    indexOfTarget = findAll(array, target);
    return indexOfTarget;
}
// 次数按钮点击
function timesClick() {
		var times = getIndexOfTarget().length;
    alert(times);
}
// 计数按钮点击
function countClick() {
    alert(getCount());
}
// 位置按钮点击
function positClick() {
  	var indexOfTarget = getIndexOfTarget();
    alert(indexOfTarget);
}

function getCount() {
    var array = new Array("a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a");
    // var array = new Array("a", "a", "b", "a", "a", "x", "k", "m", "p", "j", "a");
    // 数组用来存储排序过后的数组
    var sortArray = array.sort();
    // 用来存放原来数组中元素的数组
    var elementArray = [];
    // 存放与elementArray元素对应的元素的数量的数组
    var numArray = [];
    var n = 1;
    var maxnum = 0;
    for (var i = 0; i < sortArray.length; i++) {
        if (sortArray[i] === sortArray[i + 1]) {
            n++;
        } else {
            elementArray.push(sortArray[i]);
            numArray.push(n);
            // 重置n计数
            n = 1;
        }
    }
    var max = numArray[0];
    var index = 0;
    for (var j = 0; j < numArray.length; j++) {
        if (numArray[j] > max) {
            max = this[j];
            index = j;
        }
    }
    // alert(sortArray);
    // alert(elementArray);
    // alert(numArray);
    return elementArray[index];
}

// 在数组中搜索指定值并返回包含所有匹配的数组索引的一个数组
function findAll(array, x) {
    var results = [];
    len = array.length;
    pos = 0;
    while (pos < len) {
        pos = array.indexOf(x, pos);
        if (pos === -1) {
            break;
        }
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}
