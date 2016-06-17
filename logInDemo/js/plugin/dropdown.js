/**
 * 抽象下拉列表类
 */
function DropDown() {

}

/**
 * 列表控件
 */
DropDown.prototype.$dropdown = null;

/**
 * 关闭列表
 */
DropDown.closeDropDown = function() {
	var $allDropDown = $(".dropdown"); //全部列表
	var $allList = $(".dropdown-list"); //全部列表的列表项
	$allDropDown.removeClass("dropdown-active");
	$allList.removeClass("dropdown-list-active");
}

/**
 * 初始化所有列表
 */
DropDown.initAll = function() {
	$dropdown = $(".dropdown");
	$dropdown.each(function(i, one) {
		var $list = $(one).find(".dropdown-list");
		$item = $list.find(".dropdown-item");
		//点击列表显示选项
		$(one).unbind("click");
		$(one).click(function(event) {
			DropDown.closeDropDown();
			$(one).addClass("dropdown-active");
			$list.addClass("dropdown-list-active");
			event.stopPropagation();
		});

		//鼠标选中列表项
		$item.unbind("click");
		$item.click(function(event) {
			var value = $(this).text();
			$(one).find(".value").text(value);
			$(one).toggleClass("dropdown-active");
			$list.toggleClass("dropdown-list-active");
			$(this).siblings().removeClass("dropdown-item-active");
			$(this).addClass("dropdown-item-active");
			event.stopPropagation();
		});
	})

}

/**
 * 清空所有下拉列表内容
 */
DropDown.clearAll = function() {
	this.closeDropDown();
	$dropdown = $(".dropdown");
	$dropdown.find(".value").text("- 选择 -");
	$dropdown.find(".dropdown-item").removeClass("dropdown-item-active");

}

/**
 * 下拉列表实现类
 */
function DropDownImpl() {

}

DropDownImpl.prototype = new DropDown(); //继承父类