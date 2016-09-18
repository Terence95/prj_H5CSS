// js完整计算器
var num = 0;
var result = 0;
var shownum = "0";
var operate = 0; // 输入状态
var calstate = 0; //计算状态
var quit = 0; // 防止重复按键

// addEvent(btn, "click", btnClick);
// var cmd7 = document.getElementById("cmd7");
// var cmd8 = document.getElementById("cmd8");
// var cmd9 = document.getElementById("cmd9");
// var cmd4 = document.getElementById("cmd4");
// var cmd5 = document.getElementById("cmd5");
// var cmd6 = document.getElementById("cmd6");
// var cmd1 = document.getElementById("cmd1");
// var cmd2 = document.getElementById("cmd2");
// var cmd3 = document.getElementById("cmd3");
// var cmd0 = document.getElementById("cmd0");
//
//
// var deletBtn = document.getElementById("delet");
// var cleanScreenBtn = document.getElementById("clearscreen");
// var squareBtn = document.getElementById("square");
// var cubeBtn = document.getElementById("cube");
//
// var timesBtn = document.getElementById("times");
// var divideBtn = document.getElementById("divide");
// var sqrtBtn = document.getElementById("sqrt");
// var cubeRootBtn = document.getElementById("cubeRoot");
//
// var plusBtn = document.getElementById("plus");
// var minusBtn = document.getElementById("minus");
// var sinBtn = document.getElementById("sin");
// var cosBtn = document.getElementById("cos");
//
// var dbzeroBtn = document.getElementById("doubleZero");
// var dotBtn = document.getElementById("dot");
// var persentBtn = document.getElementById("persent");
// var equalBtn = document.getElementById("equal");
//
// addEvent(deletBtn, "click", delet);
// addEvent(cleanScreenBtn, "click", clearscreen);
// addEvent(squareBtn, "click", square);
// addEvent(cubeBtn, "click", cube);
// addEvent(timesBtn, "click", times);
// addEvent(divideBtn, "click", divide);
// addEvent(sqrtBtn, "click", sqrt);
// addEvent(cubeRootBtn, "click", sqrt);
// addEvent(plusBtn, "click", plus);
// addEvent(minusBtn, "click", minus);
// addEvent(sinBtn, "click", sin);
// addEvent(cosBtn, "click", cos);
// addEvent(dbzeroBtn, "click", doubleZero);
// addEvent(dotBtn, "click", dot);
// addEvent(persentBtn, "click", persent);
// addEvent(equalBtn, "click", equal);





// var command7 = function() {
//     return command(7);
// };
//
// var command8 = function() {
//     return command(8);
// };
//
// var command9 = function() {
//     return command(9);
// };
//
// var command4 = function() {
//     return command(4);
// };
//
// var command5 = function() {
//     return command(5);
// };
//
// var command6 = function() {
//     return command(6);
// };
//
// var command1 = function() {
//     return command(1);
// };
//
// var command2 = function() {
//     return command(2);
// };
//
// var command3 = function() {
//     return command(3);
// };
//
// var command0 = function() {
//     return command(0);
// };
//
// addEvent(cmd7, "click", command7);
//
// addEvent(cmd8, "click", command8);
//
// addEvent(cmd9, "click", command9);
//
// addEvent(cmd4, "click", command4);
//
// addEvent(cmd5, "click", command5);
//
// addEvent(cmd6, "click", command6);
//
// addEvent(cmd1, "click", command1);
//
// addEvent(cmd2, "click", command2);
//
// addEvent(cmd3, "click", command3);
//
// addEvent(cmd0, "click", command0);

var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    // list[i].addEventListener('click', function() {
    //     console.log(this.innerText);
    // });
    addEvent(list[i], 'click', function() {
        // console.log(this.innerText);
        if (!isNaN(this.innerText)) {
            command(this.innerText);
        } else if (this.innerText === "C") {
            clearscreen();
        } else if (this.innerText === "X2") {
            square();
        } else if (this.innerText === "X3") {
            cube();
        } else if (this.innerText === "×") {
            times();
        } else if (this.innerText === "÷") {
            divide();
        } else if (this.innerText === "=") {
            equal();
        } else if (this.innerText === ".") {
            dot();
        } else if (this.innerText === "√X") {
            sqrt();
        } else if (this.innerText === "3√X") {
            cubeRoot();
        } else if (this.innerText === "+") {
            plus();
        } else if (this.innerText === "-") {
            minus();
        } else if (this.innerText === "sin") {
            sin();
        } else if (this.innerText === "cos") {
            cos();
        } else if (this.innerText === "%") {
            persent();
        } else if (this.innerText === "tan") {
            tan();
        } else if (this.innerText === "00") {
            doubleZero();
        } else {
            log();
        }
    });
}

// command 函数, 显示输入数据
function command(num) {
    if (calstate === 5) {
        clearscreen();
    }
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? ((operate === 0) ? str : "") : "";
    if ((str != "0") && (operate === 0)) {
        str = str;
    } else {
        str = "";
    }
    str = str + String(num);
    document.calculator.numScreen.value = str;
    operate = 0;
    quit = 0;
    // alert(str);
}

// 添加两个（00）
function doubleZero() {
    var str = String(document.calculator.numScreen.value);
    if ((str != "0") && (operate === 0)) {
        str = str + "00";
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    operate = 0;
}

// 小数点函数
function dot() {
    var str = String(document.calculator.numScreen.value);
    if ((str != "0") && (operate === 0)) {
        str = str;
    } else {
        str = "0";
    }
    for (var i = 0; i <= str.length; i++) {
        if (str.substr(i, 1) == ".") {
            return false;
        }
    }
    str = str + ".";
    document.calculator.numScreen.value = str;
    operate = 0;
}

// 移除函数
function delet() {
    var str = String(document.calculator.numScreen.value);
    if (str != "0") {
        str = str;
    } else {
        str = "";
    }
    str = str.substr(0, str.length - 1);
    if (str !== "") {
        str = str;
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(str);
}

// 清屏函数
function clearscreen() { //清除数据
    num = 0;
    result = 0;
    shownum = "0";
    document.calculator.numScreen.value = "0";
}

// 加法
function plus() {
    operate = 1;
    calstate = 1;
    calculate();
}

//减法
function minus() {
    calculate();
    operate = 1;
    calstate = 2;

}
//乘法
function times() {
    calculate();
    operate = 1;
    calstate = 3;
}
//除法
function divide() {
    calculate();
    operate = 1;
    calstate = 4;
}
//等于
function equal() {
    calculate();
    operate = 1;
    num = 0;
    result = 0;
    shownum = "0";

}

// %
function persent() { //百分号
    var fristnum = document.calculator.numScreen.value;
    var str = String(fristnum);
    if ((str != "0") && (operate === 0)) {
        str = String(fristnum / 100);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    operate = 0;
    calcul = 5;
}


// 平方
function square() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(firsnum * firsnum).toFixed(2);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// 立方
function cube() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(firsnum * firsnum * firsnum).toFixed(1);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// 平方根
function sqrt() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(Math.sqrt(firsnum)).toFixed(2);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// cubeRoot
function cubeRoot() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(Math.pow(firsnum, 1 / 3)).toFixed(2);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}


// sin
function sin() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(Math.sin(2 * Math.PI / 360 * firsnum)).toFixed(2);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// cos
function cos() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(Math.cos(2 * Math.PI / 360 * firsnum)).toFixed(2);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// tan
function tan() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((firsnum == 90) || (firsnum == 270)) {
        alert("无效输入");
        // calstate = 5;
        clearscreen();
    } else if (firsnum % 180 === 0) {
        str = "0";
        calstate = 0;
    } else {
        str = String(parseFloat(Math.tan(2 * Math.PI / 360 * firsnum)).toFixed(2));
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// log
function log() {
    var firsnum = document.calculator.numScreen.value;
    var str = String(firsnum);
    if ((str != "0" && (operate === 0))) {
        var tempresult = parseFloat(Math.log(firsnum) / Math.LN10).toFixed(2);
        str = String(tempresult);
    } else {
        str = "0";
    }
    document.calculator.numScreen.value = str;
    // alert(firsnum);
    operate = 0;
}

// 计算函数
function calculate() {
    shownum = Number(document.calculator.numScreen.value);
    if (quit != 1) {
        switch (calstate) {
            case 1:
                result = parseFloat((num + shownum).toFixed(8));
                break;

            case 2:
                result = parseFloat((num - shownum).toFixed(8));
                break;

            case 3:
                result = parseFloat((num * shownum).toFixed(8));
                break;

            case 4:
                if (shownum !== 0) {
                    result = parseFloat((num / shownum).toFixed(8));
                } else {
                    result = "NaN";
                    alert("被除数不能为0");
                }
                break;
        }
        quit = 1;
    } else {
        result = shownum;
    }
    document.calculator.numScreen.value = String(result);
    num = shownum; //存储当前值
}


// 事件添加
function addEvent(obj, type, fn) {
    if (typeof obj.addEventListener != 'undefined') {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent != 'undefined') {
        obj.attachEvent('on' + type, function() {
            fn.call(obj, window.event);
        });
    }
}
