var jkWebSocket = jkWebSocket || {};
jkWebSocket = {
	adress:"ws://comet.jikexueyuan.com",
	flash:"http://e.jikexueyuan.com/headerandfooter/js/WebSocketMain.swf",
	init: function() {
		this.unread();
		this.bind();
		this.creatMessage();
	},
	bind: function() {
		$('#messagebox').bind("click", this.massageShow);
		$('.set-read').bind("click", this.setread);
	},
	//首次显示未读信息
	unread: function() {
		$.ajax({
			type: "get",
			data:{'type':'jsonp'},
			url: "http://www.jikexueyuan.com/message/v1/unread?callback=?",
			success: function(data) {
				if (data.code == 200) {
					var numId = $('.unread-num');
					if (data.data.unread_num != 0) {
						$('#messagebox').removeClass('my-massage2').addClass('my-massage')
						numId.html(data.data.unread_num);
						$('.bounce1,.bounce2,.bounce3').css("display", "inline-block");
						$('.news-list').show();
						$('.nonews').hide()
						$('#this-news').height(350);
					} else {
						$('#messagebox').removeClass('my-massage').addClass('my-massage2')
						numId.html("&nbsp;")
						$('.set-read').hide();
						$('.news-list').empty().hide();
						$('#this-news>h3>span').hide();
						$('.nonews').show()
						$('#this-news').css("height", "auto");
						$('.bounce1,.bounce2,.bounce3').hide();
					}
				} else {
//					console.log(data.msg) //上线的时候记得屏蔽
				}
			},
			dataType: "jsonp",
			error: function() {
//				console.log("网络错误")
			}
		});
	},
	//创建未读消息列表
	creatMessageList: function(data) {	
		if(data.data.total_items<=0) return false;
		$('.nonews').hide()
		var newslist = $('.news-list');
		var data = data.data;
		function createNews(id, murl, contentUrl,name, time, content) {
			var html = '<li msg_id =' + id + ' >';
			html += '<div class="cf">';
			html += '<a class="answer" href=' + murl + ' target = "_blank" >' + name + '</a>';
			html += '<em>' + time + '</em></div>';
			html += '<p><a href='+contentUrl+' target = "_blank">'+content + '</a></p>';
			html += '</li>';
			return html;
		}
		for (var i = 0; i < data.list.length; i++) {
			var list = data.list[i];
			var murl = list.extra.title_url;
			var contentUrl = list.extra.content_url;
			var name = list.title;
			var content = list.content;
			
			var id = list.msg_id;
			var time = jkWebSocket.creatTime(Date.parse((list.created_at).replace(/[-]/g,'/'))/1000);
			var news = createNews(id, murl,contentUrl,name, time, content);
			newslist.append(news)
		}
		//点击信息打开新页面，标记为已读并删除
		$('.news-list li a').click(function() {
			var id = $(this).parents("li").attr("msg_id");
			var _self = $(this).parents("li");
			var unreadNumber = parseInt($('.unread-num').eq(0).text());
			if (unreadNumber > 0) {
				unreadNumber--;
				$('.unread-num').html(unreadNumber);
			};
			$.ajax({
				type: "get",
				url: "http://www.jikexueyuan.com/message/v1/read?callback=?",
				data: {
					"ids": id,
					"type":"jsonp"
				},
				success: function(data) {
					if (data.code == 200) {
						_self.remove();
//						var unreadNumber = parseInt($('.unread-num').eq(0).text());
						if (unreadNumber > 0) {
//							unreadNumber--;
							$('.unread-num').html(unreadNumber);
						}else{
							$('.set-read').hide();
							$('.news-list').empty().hide();
							$('#this-news>h3>span').hide();
							$('#this-news').css("height", "auto");
							$('#messagebox').removeClass('my-massage').addClass('my-massage2');
							$('.unread-num').html("&nbsp;");
							$('.nonews').show();
						}
						
					} else {
						console.log(data.msg) //上线的时候记得屏蔽
					}
				},
				dataType: "jsonp",
				error: function() {
					console.log("网络错误")
				}
			});
		})
	},
	//消息时间格式化
	creatTime: function(publishTime) {
		var d_minutes, d_hours, d_days;
		var timeNow = parseInt(new Date().getTime() / 1000);
		var d;
		d = timeNow - publishTime;
		d_days = parseInt(d / 86400);
		d_hours = parseInt(d / 3600);
		d_minutes = parseInt(d / 60);
		if (d_days > 0 && d_days < 4) {
			return d_days + "天前";
		} else if (d_days <= 0 && d_hours > 0) {
			return d_hours + "小时前";
		} else if (d_hours <= 0 && d_minutes > 0) {
			return d_minutes + "分钟前";
		}else if(d_minutes <= 0){
			return "刚刚";
		} else if (d_days > 4) {
			var s = new Date(publishTime * 1000);
			var Month = s.getMonth()+1;
			return s.getFullYear()+"年"+Month+ "月" + s.getDate() + "日";
		} 
	},
	//全部标记为已读
	setread: function() {
		var total = 0;
		var idsAll = [];
		var alength = $('.news-list li').length - 1;
		$('.news-list li').each(function(index) {
			var id = $(this).attr('msg_id');
			idsAll.push(id);
			if (index == alength) {
				var ids = idsAll.join(",")
				$.ajax({
					type: "get",
					url: "http://www.jikexueyuan.com/message/v1/read?callback=?",
					data: {
						"ids": ids,
						'type':'jsonp'
					},
					success: function(data) {
						if (data.code == 200) {
							$('.set-read').hide();
							$('.news-list').empty().hide();
							$('#this-news>h3>span').hide();
							$('#this-news').css("height", "auto");
							$('#messagebox').removeClass('my-massage').addClass('my-massage2');
							$('.unread-num').html("&nbsp;");
							$('.nonews').show();
						} else {
						}
					},
					dataType: "jsonp",
					error: function() {
						console.log("网络错误")
					}
				});
			}
		})
	},
	//未读信息列表
	messageList: function() {
		$.ajax({
			type: "get",
			url: "http://www.jikexueyuan.com/message/v1/unread_list?callback=?",
			success: function(data) {
				if (data.code == 200) {
					var newslist = $('.news-list');
					newslist.empty();
					jkWebSocket.creatMessageList(data);
				} else {
				}
			},
			data:{'type':'jsonp'},
			dataType: "jsonp",
			error: function() {
				console.log("网络错误")
			}
		});
	},
	//动态通信
	messageNumber: null,
	pingTimeout: null, //重连时间间隔
	pingInterval: null, //ping间隔
	messageTime: function(t) { //n秒重新连接
		var that = this;
		var time = parseInt(t) * 1000 || 150000;
		clearInterval(that.messageNumber);
		that.messageNumber = setInterval(function() {
			jkWebSocket.creatMessage()
		}, time)
	},
	creatMessage: function() {
		var that = this;
		clearInterval(that.messageNumber);
		WEB_SOCKET_SWF_LOCATION = jkWebSocket.flash;
		ws = new WebSocket(jkWebSocket.adress); //测试地址，上线需要更新
		ws.onopen = function() {};
		ws.onmessage = function(e) {
			if (e.data == "ping") {
				ws.send("pong"); // Sends a message.
				return;
			}
			that.pingTimeout = e.data.pingTimeout;

			var uid = $.cookie("uid");
			var token = $.cookie("authcode");
			var mydata = {
				"type": "login",
				"data": {
					"app_id": 1,
					"from": "web",
					"uid": uid,
					"token": encodeURIComponent(token) //转义特殊字符
				}
			};
			var messageData = JSON.parse(e.data);
			switch (messageData.type) {
				case "connect":
					ws.send(JSON.stringify(mydata)); // Sends a message.
					break;
				case "auth":
					var _e = messageData.data.result;
					if (_e == "ok") return;
					if (_e == "error") {
						that.messageTime(that.pingTimeout) //150秒重新连接
					};
					break;
				case "notify":
					var unread_num = jsonA.data.unread_num;
					if (unread_num != 0) {
						$('#messagebox').removeClass('my-massage2').addClass('my-massage')
						$('.unread-num').html(unread_num)
						$('.bounce1,.bounce2,.bounce3').css("display", "inline-block");
					} else {
						$('#messagebox').removeClass('my-massage').addClass('my-massage2')
						$('.unread-num').html("&nbsp;");
						$('.bounce1,.bounce2,.bounce3').hide()
					}
					break;
				default:
					ws.close();
					break;
			}




		};
		ws.onerror = function() { //出错
			console.log("error")
		};
		ws.onclose = function() { //通信关闭
			that.messageTime(that.pingTimeout) //150秒重新连接
		};
	},
	massageShow: function() {
		$('#messagebox').unbind("click");
		jkWebSocket.messageList();
		stopEventBubble();
		$('#this-news').slideDown(200, function() {
			$(document).bind("click", function() {
				$('#this-news').hide();
				$('#messagebox').unbind("click");
				$('#messagebox').bind("click", jkWebSocket.massageShow);
			})
		});

		$('#this-news').bind("click", function() {
			stopEventBubble();
		})
	}

}
$(function() {
	var uid = $.cookie("uid");
	if (uid) {
		jkWebSocket.init();
	} else {
		//console.log("未登录")
	}
})
