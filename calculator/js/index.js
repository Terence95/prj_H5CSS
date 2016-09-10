/*
 这个是用if语句实现的
*/
window.onload = function() {
	// get btn
	var btn = document.getElementById("btn");
};

// function addEvent
function addEvent(obj, type, handle) {
    try { // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle, false);
    } catch (e) {
        try { // IE8.0及其以下版本
            obj.attachEvent('on' + type, handle);
        } catch (e) { // 早期浏览器
            // obj['on' + type] = handle;
        }
    }
}
