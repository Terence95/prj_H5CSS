/**
 * 弹出层抽象类
 */
var Modal = function() {

}

/**
 * 显示弹出层抽象方法
 * @param {jQuery} $obj 弹出层JQuery对象
 * @param {HTMLString} content 弹出层内容
 */
Modal.prototype.show = function(obj, content) {
	throw "抽象方法";
}

/**
 * 弹出层实现类
 */
var ModalImpl = function() {

}

ModalImpl.prototype = new Modal();

/**
 * 显示弹出层方法
 * @param {jQuery} $obj 弹出层JQuery对象
 * @param {HTMLString} content 弹出层内容
 */
ModalImpl.prototype.show = function($obj, content) {
	$obj.html(content + "<div class='shade'></div>");
	//显示遮罩层
	var $shade = $obj.find(".shade");
	$shade.show();
	//显示弹出层
	var $modal = $obj.find(".modal");
	$modal.show();
	//点击遮罩层，弹出层和遮罩层一起消失
	$shade.click(function() {
		$shade.hide();
		$modal.hide();
	})

}

/**
 * 弹出层工厂方法
 * @return {Modal} 弹出层对象
 */
function getModal() {
	return new ModalImpl();
}