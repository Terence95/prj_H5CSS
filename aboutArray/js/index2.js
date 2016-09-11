/*
 这个是用if语句实现的
*/
window.onload = function() {
    // get btn
    var btn = document.getElementById("btn");

    // addEvent
    addEvent(btn, "click", btnClick);
};

// function btnClick()
function btnClick() {
    var value = document.getElementById("score").value;
    switch (true) {
        case value >= 0 && value < 10:
            alert("该学生是10等生。");
            break;
        case value >= 10 && value < 20:
            alert("该学生是9等生。");
            break;
        case value >= 20 && value < 30:
            alert("该学生是8等生。");
            break;
        case value >= 30 && value < 40:
            alert("该学生是7等生。");
            break;
        case value >= 40 && value < 50:
            alert("该学生是6等生。");
            break;
        case value >= 50 && value < 60:
            alert("该学生是5等生。");
            break;
        case value >= 60 && value < 70:
            alert("该学生是4等生。");
            break;
        case value >= 70 && value < 80:
            alert("该学生是3等生。");
            break;
        case value >= 80 && value < 90:
            alert("该学生是2等生。");
            break;
        case (value >= 90 && value < 100) || value == 100:
            alert("该学生是1等生。");
            break;
        case value < 0 || value > 100:
            alert("请输入0-100之间的数值。");
            break;
        default:
            alert("请输入0-100之间的数值。");
            break;
    }
}
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
