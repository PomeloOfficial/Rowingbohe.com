$(document).ready(function(e) {

	var isIE  = !!window.ActiveXObject;
	var isIE6 = isIE&&!window.XMLHttpRequest;

//inputbox placeholder	
	$(".inputbox").each(function(){
		if($(this).find(".input_text").val() != ""){
			$(this).find("label").hide();
		}
	});
	$(".input_text").bind({
		focus:function(){
			$label = $(this).parent().find("label");
			$label.hide();
		},
		blur:function(){
			if($(this).val() == ""){
				$(this).parent().find("label").show();
			}
		}
	});
	$(".inputbox label").click(function(){
		if($(this).parent().find("label").attr("uu") != "uu"){
			$(this).parent().find("label").hide();
			$(this).parent().find(".input_text").focus();
		}
	});

//loginbtn flash
	$(".loginbtn").mousedown(function(){
		$(".loginbtn").css({"box-shadow":"0 0 15px #eee"});
	}).mouseup(function(){
		$(".loginbtn").css({"box-shadow":"2px 2px 2px #000"});
	});

//check box style
	$(".check_box").click(function(){
		if($(".check_box input").attr("checked") == false){
			$(".check_box").addClass("check_box_checked");
			$(".check_box input").attr("checked",true);
		}else{
			$(".check_box").removeClass("check_box_checked");
			$(".check_box input").attr("checked",false);
		}
	});




	//select option
	var $select = $("dl.select_option_leon dt");
	var $select_li = $("dl.select_option_leon li");
	$select.click(function(){
		for(var i = 0; i < $select.length; i++){
			if ($(this).html() == $select.eq(i).html()){continue;};
			if ($select.eq(i).parent().find("ul").css("display") == "block"){$select.eq(i).parent().find("ul").hide();}
		}
		$(this).parent().find("ul").toggle();
	});

	$select_li.click(function(){
		var $select_name = $(this).find("label").html();
		var $select_value = $(this).attr("value");

		$(this).parent().parent().parent().find("dt label").html($select_name);

		$(this).parent().toggle();
	});
});

//header dropdown notice and so so
$(function(){
	var time_out;

	$('.hot').bind({
		mouseenter:function(){
			var $this = $(this);
			clearTimeout(time_out)
			time_out = setTimeout(function(){
				$('.hot').removeClass('open')
				$this.addClass('open');
			}, 50);
		},
		mouseleave:function(){
			clearTimeout(time_out)
			time_out = setTimeout(function(){
				$('.hot').removeClass('open')
			}, 300);
		},
		click:function(){
			var $this = $(this);
			clearTimeout(time_out);
			$('.hot').removeClass('open');
			$this.addClass('open');
		}
	});

	var noticeShown = [false, false, false];
	var noticeIsShow = false;

	$(document).click(function(){
		$('.notice_list').click(function(e){
			var url = e.target.href || e.target.parentNode.href;
			if (url){
				window.open(url)
			}
			return false
		});
		if (noticeIsShow){
			$('.notice').click(function(){
				return false
			});
			$('.notice').removeClass('open')
			noticeIsShow = false;
		}
	});

	function noticeUpdata(){
		var temp = NOTICE[0] + NOTICE[1] + NOTICE[2];
		if (temp > 0){
			$('.notice_count').html(temp+'<div class="red_tips"></div>')
		}else{
			$('.notice_count').removeClass('alert').html('')
		}
	}

	$('.notice').click(function(){
		var $this = $(this);
		if (!noticeShown[0]){
			doAjax("GET", '/home/notice_comment', "json" ,function(data){
				if(data.ret == 0){
					$this.addClass('open');
					$this.find('#scrollbar1 ul').html(data.view);
					showNotice(1);
					$('#scrollbar1').tinyscrollbar();
					noticeShown[0] = true;
					noticeIsShow = true;
				}else{
					tips_alert(-1, '获取失败')
				}
			});
		}else{
			$this.addClass('open');
			noticeIsShow = true;
		}
		setTimeout(function(){
			$('span[data-notice="1"]').html("评论")
			NOTICE[0] = 0;
			noticeUpdata()
		}, 500)
	});

	$('span[data-notice="2"]').click(function(){
		var $this = $(this);
		if (!noticeShown[1]){
			doAjax("GET", '/home/notice_fans', "json" ,function(data){
				if(data.ret == 0){
					$('#scrollbar2 ul').html(data.view);
					showNotice(2, $this);
					$('#scrollbar2').tinyscrollbar();
					noticeShown[1] = true;
				}else{
					tips_alert(-1, '获取失败')
				}
			});
		}else{
			showNotice(2, $this);
		}
		$('.notice .see_all a').attr('href', '/user/message_attentioned')
		setTimeout(function(){
			$('span[data-notice="2"]').html("粉丝")
			NOTICE[1] = 0;
			noticeUpdata()
		}, 500)
	});
	$('span[data-notice="3"]').click(function(){
		var $this = $(this);
		if (!noticeShown[2]){
			doAjax("GET", '/home/notice_message', "json" ,function(data){
				if(data.ret == 0){
					$('#scrollbar3 ul').html(data.view);
					showNotice(3, $this);
					$('#scrollbar3').tinyscrollbar();
					noticeShown[2] = true;
				}else{
					tips_alert(-1, '获取失败')
				}
			});
		}else{
			showNotice(3, $this);
		}
		$('.notice .see_all a').attr('href', '/user/message_letters')
		setTimeout(function(){
			$('span[data-notice="3"]').html("私信")
			NOTICE[2] = 0;
			noticeUpdata()
		}, 500)
	});
	$('span[data-notice="1"]').click(function(){
		var $this = $(this);
		showNotice(1, $this);
		$('.notice .see_all a').attr('href', '/user/message_comments')
	});

	function showNotice(index, target){
		$('.scrollbar_wrap').removeClass('selected');
		$('#scrollbar'+index).addClass('selected');
		if (target){
			$('.notice_nav span').removeClass('selected');
			target.addClass('selected');
		}	
	}

	/*$('div').not('.notice_count').click(function(){
		//alert('1')
		var $list = $(".notice_list");
		if ($list.is(':visible')){
			$list.hide();
		}
	});

	$(".login_register").mouseover(function(){
		$(".user_tips").fadeOut();
	});*/

	var tt;
	$(".discover").bind({
		mouseover:function(){
			clearTimeout(tt)
			$(this).addClass('open');
		},
		mouseleave:function(){
			var $this = $(this);
			clearTimeout(tt);
			tt = setTimeout(function(){
				$this.removeClass('open');
			}, 300);
			
		}
	});/**/
});
	


function get_data(api,callback,error_callback)
{
	$.ajax({async:false,type:"GET",url:api,success:function(obj){
		if(obj != null)
		{
			if(obj.ret != -1)
			{
				success_arr = new Array();
				success_arr['ret'] = obj.ret;
				success_arr['msg'] = obj.msg;
				success_arr['data'] = obj.data;
				success_arr['view'] = obj.view;

				callback(success_arr);
			}
			else
			{
				if(typeof(error_callback) != 'undefined')
				{
					error_callback(obj.msg);
				}
				else
				{
					default_ajax_error_callback(obj.msg);
				}
			}
		}
		else
		{
			if(typeof(error_callback) != 'undefined')
			{
				error_callback('无法连接目标地址，请稍后再试！');
			}
			else
			{
				default_ajax_error_callback('无法连接目标地址，请稍后再试！');
			}
		}
	},error:function(){
		if(typeof(error_callback) != 'undefined')
		{
			error_callback('无法连接目标地址，请稍后再试！');
		}
		else
		{
			default_ajax_error_callback('无法连接目标地址，请稍后再试！');
		}
	},dataType:'json'});
}

function post_data(api,data_post,callback,error_callback)
{
	$.ajax({async:false,type:"POST",url:api,data:data_post,success:function(obj){
		if(obj != null)
		{
			if(obj.ret != -1)
			{
				success_arr = new Array();
				success_arr['ret'] = obj.ret;
				success_arr['msg'] = obj.msg;
				success_arr['data'] = obj.data;
				success_arr['view'] = obj.view;

				callback(success_arr);
			}
			else
			{
				if(typeof(error_callback) != 'undefined')
				{
					error_callback(obj.msg);
				}
				else
				{
					default_ajax_error_callback(obj.msg);
				}
			}
		}
		else
		{
			if(typeof(error_callback) != 'undefined')
			{
				error_callback('无法连接目标地址，请稍后再试！');
			}
			else
			{
				default_ajax_error_callback('无法连接目标地址，请稍后再试！');
			}
		}
	},error:function(){
		if(typeof(error_callback) != 'undefined')
		{
			error_callback('无法连接目标地址，请稍后再试！');
		}
		else
		{
			default_ajax_error_callback('无法连接目标地址，请稍后再试！');
		}
	},dataType:'json'});
}

function doAjax (type, api_url, dataType, callback, error_callback){
	$.ajax({
		type:type,
		url:api_url,
		dataType:dataType,
		success:function(data){
			if(data != null){
				if(data.ret != -1){
					callback(data);
				}else{
					if(typeof(error_callback) != 'undefined'){
						error_callback(data.msg);
					}else{
						default_ajax_error_callback(data.msg);
					}
				}
			}else{
				if(typeof(error_callback) != 'undefined'){
					error_callback('无法连接目标地址，请稍后再试！');
				}else{
					default_ajax_error_callback('无法连接目标地址，请稍后再试！');
				}	
			}
		},error:function(data){
			if(typeof(error_callback) != 'undefined'){
				error_callback('无法连接目标地址，请稍后再试！');
			}else{
				default_ajax_error_callback('无法连接目标地址，请稍后再试！');
			}
		}
	});
}

function default_ajax_error_callback(error_msg){
	error_msg = (typeof(error_msg) != 'undefined') ? error_msg : '未知错误！';
	tips_alert(-1,error_msg);
}

var Talert_t;
function Talert(data){
	var str = '<div class="alert" style="position:fixed;bottom:20px;left:0;padding:5px 15px;border-radius:3px;background-color:#e88;color:#111;font-size:16px;z-index:999999">' + data + '</div>';
	var temp = $(".alert");
	setTimeout(function(){
		temp.remove();
	},1000);
	$('body').prepend(str);
	clearTimeout(Talert_t);
	Talert_t = setTimeout(function(){
		$(".alert").animate({bottom:"100px"},1500).fadeOut("slow");
	},2000);
}

var tips_alert_t;
function tips_alert(msg_type,message){
	var class_type;
	msg_type == 1 || msg_type == "1" || msg_type == "success" ? msg_type = 1 : "";
	switch (msg_type){
		case 1:
			class_type = "msg-success";
			break;
		default:
			class_type = "msg-error";
	}
	
	clearTimeout(tips_alert_t);
	clear_msg();
	
	$("body").append("<div id='msgbox' class='" + class_type + "'><p>" + message +"</p><div class='closeb'></div></div>")
	$('#msgbox').animate(
		{top: '0px'},
		{duration: 500,
			complete: function(){
				tips_alert_t = setTimeout(function(){
					$('#msgbox').animate({top: '-39px'},500,function(){clear_msg();});
				},2000);
			}
		}
	);
	$('#msgbox .closeb').click(function(){
		$('#msgbox').animate({top: '-39px'},500);
	});
}

function clear_msg(){
	$("#msgbox").remove();
}

function isObj(data){
	if(typeof data === 'object'){
		return data;
	}
	return eval('(' + data + ')');
}

/*************************************************************************************/
;(function (factory)
{
	if (typeof define === 'function' && define.amd)
	{
		define(jQuery || ['jquery'], factory);
	}
	else if (typeof exports === 'object')
	{
		factory(jQuery || require('jquery'));
	}
	else
	{
		factory(jQuery);
	}
}
(function ($){
	"use strict";

	var pluginName = "tinyscrollbar"
	,   defaults   =
		{
			axis         : 'y'    // Vertical or horizontal scrollbar? ( x || y ).
		,   wheel        : true   // Enable or disable the mousewheel;
		,   wheelSpeed   : 40     // How many pixels must the mouswheel scroll at a time.
		,   wheelLock    : true   // Lock default scrolling window when there is no more content.
		,   scrollInvert : false  // Enable invert style scrolling
		,   trackSize    : false  // Set the size of the scrollbar to auto or a fixed number.
		,   thumbSize    : false  // Set the size of the thumb to auto or a fixed number.
		}
	;   

	function Plugin($container, options)
	{
		this.options   = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name     = pluginName;

		var self        = this
		,   $viewport   = $container.find(".viewport")
		,   $overview   = $container.find(".overview")
		,   $scrollbar  = $container.find(".scrollbar")
		,   $track      = $scrollbar.find(".track")
		,   $thumb      = $scrollbar.find(".thumb")

		,   mousePosition   = 0

		,   isHorizontal   = this.options.axis === 'x'
		,   hasTouchEvents = "ontouchstart" in document.documentElement

		,   sizeLabel = isHorizontal ? "width" : "height"
		,   posiLabel = isHorizontal ? "left" : "top"
		;

		this.contentPosition = 0;
		this.viewportSize    = 0;
		this.contentSize     = 0;
		this.contentRatio    = 0;
		this.trackSize       = 0;
		this.trackRatio      = 0;
		this.thumbSize       = 0;
		this.thumbPosition   = 0;

		function initialize()
		{
			self.update();
			setEvents();

			return self;
		}

		this.update = function(scrollTo)
		{
			var sizeLabelCap  = sizeLabel.charAt(0).toUpperCase() + sizeLabel.slice(1).toLowerCase();
			this.viewportSize = $viewport[0]['offset'+ sizeLabelCap];
			this.contentSize  = $overview[0]['scroll'+ sizeLabelCap];
			this.contentRatio = this.viewportSize / this.contentSize;
			this.trackSize    = this.options.trackSize || this.viewportSize;
			this.thumbSize    = Math.min(this.trackSize, Math.max(0, (this.options.thumbSize || (this.trackSize * this.contentRatio))));
			this.trackRatio   = this.options.thumbSize ? (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize) : (this.contentSize / this.trackSize);

			$scrollbar.toggleClass("disable", this.contentRatio >= 1);

			switch (scrollTo)
			{
				case "bottom":
					this.contentPosition = this.contentSize - this.viewportSize;
					break;

				case "relative":
					this.contentPosition = Math.min(this.contentSize - this.viewportSize, Math.max(0, this.contentPosition));
					break;

				default:
					this.contentPosition = parseInt(scrollTo, 10) || 0;
			}

			setSize();

			return self;
		};

		function setSize()
		{
			$thumb.css(posiLabel, self.contentPosition / self.trackRatio);
			$overview.css(posiLabel, -self.contentPosition);
			$scrollbar.css(sizeLabel, self.trackSize);
			$track.css(sizeLabel, self.trackSize);
			$thumb.css(sizeLabel, self.thumbSize);
		}

		function setEvents()
		{
			if(hasTouchEvents)
			{
				$viewport[0].ontouchstart = function(event)
				{
					if(1 === event.touches.length)
					{
						start(event.touches[0]);
						event.stopPropagation();
					}
				};
			}
			else
			{
				$thumb.bind("mousedown", start);
				$track.bind("mousedown", drag);
			}

			$(window).resize(function()
			{
				self.update("relative");
			});

			if(self.options.wheel && window.addEventListener)
			{
				$container[0].addEventListener("DOMMouseScroll", wheel, false );
				$container[0].addEventListener("mousewheel", wheel, false );
			}
			else if(self.options.wheel)
			{
				$container[0].onmousewheel = wheel;
			}
		}

		function start(event)
		{
			$("body").addClass("noSelect");

			mousePosition      = isHorizontal ? event.pageX : event.pageY;
			self.thumbPosition = parseInt($thumb.css(posiLabel), 10) || 0;

			if(hasTouchEvents)
			{
				document.ontouchmove = function(event)
				{
					event.preventDefault();
					drag(event.touches[0]);
				};
				document.ontouchend = end;
			}
			else
			{
				$(document).bind("mousemove", drag);
				$(document).bind("mouseup", end);
				$thumb.bind("mouseup", end);
			}
		}

		function wheel(event)
		{
			if(self.contentRatio < 1)
			{
				var eventObject     = event || window.event
				,   wheelSpeedDelta = eventObject.wheelDelta ? eventObject.wheelDelta / 120 : -eventObject.detail / 3
				;

				self.contentPosition -= wheelSpeedDelta * self.options.wheelSpeed;
				self.contentPosition = Math.min((self.contentSize - self.viewportSize), Math.max(0, self.contentPosition));

				$container.trigger("move");

				$thumb.css(posiLabel, self.contentPosition / self.trackRatio);
				$overview.css(posiLabel, -self.contentPosition);

				if(self.options.wheelLock || (self.contentPosition !== (self.contentSize - self.viewportSize) && self.contentPosition !== 0))
				{
					eventObject = $.event.fix(eventObject);
					eventObject.preventDefault();
				}
			}
		}

		function drag(event)
		{
			if(self.contentRatio < 1)
			{
				var mousePositionNew   = isHorizontal ? event.pageX : event.pageY
				,   thumbPositionDelta = mousePositionNew - mousePosition
				;

				if(self.options.scrollInvert && hasTouchEvents)
				{
					thumbPositionDelta = mousePosition - mousePositionNew;
				}

				var thumbPositionNew = Math.min((self.trackSize - self.thumbSize), Math.max(0, self.thumbPosition + thumbPositionDelta));
				self.contentPosition = thumbPositionNew * self.trackRatio;

				$container.trigger("move");

				$thumb.css(posiLabel, thumbPositionNew);
				$overview.css(posiLabel, -self.contentPosition);
			}
		}

		function end()
		{
			$("body").removeClass("noSelect");
			$(document).unbind("mousemove", drag);
			$(document).unbind("mouseup", end);
			$thumb.unbind("mouseup", end);
			document.ontouchmove = document.ontouchend = null;
		}

		return initialize();
	}

	$.fn.tinyscrollbar = function(options)
	{
		return this.each(function()
		{
			if(!$.data(this, "plugin_" + pluginName))
			{
				$.data(this, "plugin_" + pluginName, new Plugin($(this), options));
			}
		});
	};

}));
/*************************************************************************/
