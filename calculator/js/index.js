// js完整计算器
var num = 0;
var result = 0;
var shownum = "0";
var operate = 0; // 输入状态
var calstate = 0; //计算状态
var quit = 0; // 防止重复按键

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
    operate = 1;
    calstate = 2;
    calculate();

}
//乘法
function times() {
    operate = 1;
    calstate = 3;
    calculate();

}
//除法
function divide() {
    operate = 1;
    calstate = 4;
    calculate();
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
        var tempresult = parseFloat(firsnum * firsnum).toFixed(4);
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
        var tempresult = parseFloat(firsnum * firsnum * firsnum).toFixed(4);
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
        var tempresult = parseFloat(Math.sqrt(firsnum)).toFixed(4);
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
        var tempresult = parseFloat(Math.pow(firsnum, 1 / 3)).toFixed(4);
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
        var tempresult = parseFloat(Math.sin(2 * Math.PI / 360 * firsnum)).toFixed(4);
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
        var tempresult = parseFloat(Math.cos(2 * Math.PI / 360 * firsnum)).toFixed(4);
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
        str = String(parseFloat(Math.tan(2 * Math.PI / 360 * firsnum)).toFixed(4));
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
        var tempresult = parseFloat(Math.log(firsnum)/Math.LN10).toFixed(4);
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
