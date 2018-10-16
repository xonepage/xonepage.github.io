
(function($) {
	//mobile-nav-收缩
	$('#nav-menu').on("click", function() {
		$(this).parent().parent().find('nav').slideToggle(function() {
			if($('.top-nav nav').is(":hidden")){
				// location.reload();
			}
		});
	});
	$('#nav-menu-part2').on("click", function() {
		$(this).parent().parent().find('nav').slideToggle(function() {
			if($('.top-nav nav').is(":hidden")){
				// location.reload();
			}
		});
	});
	//导航切换
	$(window).on("scroll", function() {
		if ($(window).scrollTop()>51){  
			$("#global-head").hide();
			$('#inner-head').show();
		}  
		else  
		{  
			$('#inner-head').hide();
			$("#global-head").fadeIn();
			
		} 
	});
	
	//禁止a跳动-缓慢滚动
	$(".scroll").click(function(event){		
		 event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
	
	//二级导航
	$('nav li').on({
		mouseenter: function() {
			$(this).find('.sub-nav').fadeIn();
		},
		mouseleave: function() {
			$(this).find('.sub-nav').hide();
		}
	});
	
	//业务布局-块内容
	$('#businessul-navs li a').on("click", function() {
		var ind = $(this).parent().index(); 
		$_that = $(this);
		$_that.removeClass('blackish-bg').addClass('orange-bg a-thumbnail');
		$_that.parent().siblings().find('a').removeClass('orange-bg a-thumbnail').addClass('blackish-bg');
		$('.business-lists').hide();
		$('.business-lists').eq(ind).show();
	});
	
	//返回顶部
	$(window).on("scroll", function() {
		if ($(window).scrollTop()>500){  
			$("#back-top").fadeIn(1100);  
		}  
		else  
		{  
			$("#back-top").fadeOut(1100);  
		} 
	});
	
	$("#back-top").click(function(){  
		$('body,html').animate({scrollTop:0},1000);  
		return false;  
	}); 
	
	//-------------首页
	$('#contents-left-list li').on({
		mouseenter: function() {
			$(this).find('span').eq(0).animate({"margin-top":-liwdt});
		}, 
		mouseleave: function() {
			$(this).find('span').eq(0).animate({"margin-top":"0"},"10");
		}
	});
	//casting大轮播
	var t = n = 0, 
		count = $("#play-list a").size();
		
	$("#play-list a:not(:first-child)").hide();
	$("#play-text li:first-child").addClass('on');
		
	$("#play-text li").on("click", function() {
		var i = $(this).index();
			o = $("#play-list a").eq(i).is(":visible");
			n = i;
			if (i >= count || o == true) return;
			$("#play-list a").fadeOut(1000).parent().children().eq(i).fadeIn(1000);
			$(this).addClass('on').siblings().removeClass('on');
	});

	t = setInterval(showAuto, 3000);
	$(".casting-play").on({
		mouseenter: function() {
			clearInterval(t);
		}, 
		mouseleave: function() {
			t = setInterval(showAuto, 3000);
		}
	});

	function showAuto(){
		n = n >= (count - 1) ? 0 : ++n;
		$("#play-text li").eq(n).trigger('click');
	}
	var liwdt = 0;
	//窗口大小触发
	function setsize(){
		var het = $('#play-list').find("a:visible").children().height();
		liwdt = $('#contents-left-list li').width();
		$('.casting-play').height(het);
		$('#contents-left-list li').height(liwdt);
		
		var wall_w = $('#photo-wall li').width(),
			wall_h = wall_w*0.75;
		$('#photo-wall li').height(wall_h);
		
		//招贤纳士-走势图
		var course_w = $(window).width(),
			ratio_w = course_w/1920;
			$('.absolute-01').css({left:355*ratio_w,bottom:68*ratio_w});
			$('.absolute-02').css({left:699*ratio_w,bottom:140*ratio_w});
			$('.absolute-03').css({left:1092*ratio_w,bottom:233*ratio_w});
			$('.absolute-04').css({left:1355*ratio_w,bottom:382*ratio_w});
		
		// 开发运营-项目介绍
		var referral_h = $('.referral-part-left').height(),
			referral_w = $('.referral-part-left').width();
			if(course_w<750){
				$('.referral-part-right').height(110-45);
			}
			
			
	}
	setsize();
	$(window).resize(function() {
		setsize();
	});
	
	//职位选择
	$('.job-cont-list li').on({
		mouseenter: function() {
			$(this).find('.job-list-part').fadeIn();
		}, 
		mouseleave: function() {
			$(this).find('.job-list-part').hide();
		}
	});
	
	var ix = 0;
	$('#job-list-animate li').on({
		mouseenter: function() {
			ix = $(this).index();
			cycle();
			$('#job-list-on li').find('span').hide();
			$('#job-list-on li').eq(ix).find('span').show();
			// $('.part-one').eq(ix).show().siblings().hide();
		}, 
		mouseleave: function() {
			clearInterval(interval);
		}
	});
	function divanimate() {
		$('#job-list-on li').eq(ix).animate( {"padding-top" : "10px"}, 400);
		$('#job-list-on li').eq(ix).animate( {"padding-top" : "0px"}, 400);
	}
	function cycle() {
		divanimate();
		interval = setInterval(divanimate, 800);
	}
	
	//招贤纳士-走势图-content
	// $('.po-icon-img i').on("mouseenter", function() {
		// var i_index = $(this).parent().parent().index();
		// console.log(i_index);
		// $(this).addClass('on');
		// $(this).parent().parent().siblings().find('i').removeClass('on');
		// $('#text-lists li').eq(i_index-1).slideDown().siblings().hide();
		// $('.po-content-text').slideDown();
	// });
	// $('#colse-btn').on("click", function() {
		// $('.po-content-text').slideUp();
		// $('.po-icon-img i').removeClass()
	// });
	
	//职位选择
	// $('.job-cont-list li').on({
		// mouseenter: function() {
			// $(this).find('.job-list-part').show();
		// }, 
		// mouseleave: function() {
			// $(this).find('.job-list-part').hide();
		// }
	// });
	
	var ix = 0;
	$('#job-list-animate li').on({
		mouseenter: function() {
			ix = $(this).index();
			cycle();
			$('#job-list-on li').find('span').hide();
			$('#job-list-on li').eq(ix).find('span').show();
			$('.part-one').eq(ix).show().siblings().hide();
		}, 
		mouseleave: function() {
			clearInterval(interval);
		}
	});
	function divanimate() {
		$('#job-list-on li').eq(ix).animate( {"padding-top" : "10px"}, 400);
		$('#job-list-on li').eq(ix).animate( {"padding-top" : "0px"}, 400);
	}
	function cycle() {
		divanimate();
		interval = setInterval(divanimate, 800);
	}
	//--------------------开发运营
	$('.feature-pad').on({
		mouseenter: function() {
			var $that = $(this);
			e = $that.parent().find('.feature-i');
			cycle_anima(e);
		}, 
		mouseleave: function() {
			clearInterval(interval);
		}
	});
	function anima(){
		e.animate({"padding-top" : "10px"},333);
		e.animate({"padding-top" : "3px"},333);
	}
	function cycle_anima(e) {
		anima(e);
		interval = setInterval(anima, 666);
	}

	
	// -------------------------------------------后期修改版
	//首页
	$('.i-wechat').on({
		mouseenter: function() {
			$('.wechat-part').css('transform','scale(1)');
		}, 
		mouseleave: function() {
			$('.wechat-part').css('transform','scale(0)');
		}
	});
	//集团介绍 弹窗
	$('#boxy-group-btn').on("click", function() {
		$('#mask-group').fadeIn();
	});
	//集团介绍 弹窗
	$('#course i').on("click", function() {
		$('#mask-course').fadeIn();
		var i_index = $(this).parent().parent().index();
		$(this).addClass('on');
		$(this).parent().parent().siblings().find('i').removeClass('on');
		$('#boxy-course li').eq(i_index-1).show().siblings().hide();
	});
	$('#boxy-course').on("click", function() {
		return false;
	});
	$('#mask-course').on("click", function() {
		$(this).hide();
		$('#course i').removeClass('on');
	});

	$("#addHomePage").on("click", function() {
		console.log()
		HomepageFavorite.Homepage();
	});
	
	//无缝滚动宽度
	var	marquee_n = $('#marquee1_1 li').length;
	$('.marqueeleft').width(marquee_n*150);
	$('.marqueeleft').css('max-width','100%');
	
	//404-error
	var win_h = $(window).height(),
		head_h= $('header').height(),
		foot_h= $('footer').height();
	$('.error-page').height(win_h-head_h-foot_h);
	if($('#error-page').length){
		var t = 5, 
			inter = setInterval(function(){
				if (t--) return $('#time-error').html(t);
				clearInterval(inter);
				location.href ='/index';
			},1000);
	}
	
	//搜索
	// var search_input = $('.dream-news-search input');
	// $('#search_btn').on("click", function() {
		// var search_val = search_input.val();
		// $.post('',search_val,function() {
		
		// });
	// });
	
	//新闻min高度
	if($('#new-banner').length){
		var new_banner_he = $('.new-banner').height();
		console.log(new_banner_he);
		$('.hotnews-bg,.news-cont-bg').css('min-height',win_h-head_h-foot_h-new_banner_he);
	}
	
	
})(jQuery);


function SetHome(obj,url){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
	}catch(e){
		if(window.netscape){
			try{
			   netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch(e){
				alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
		}else{
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
		}
	}
}


if($('#marquee1').length){

//js无缝滚动代码
function marquee(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");
	if (direction == "up"){
		if (obj2.offsetTop - obj.scrollTop <= 0){
			obj.scrollTop -= (obj1.offsetHeight + 20);
		}else{
			var tmp = obj.scrollTop;
			obj.scrollTop++;
			if (obj.scrollTop == tmp){
				obj.scrollTop = 1;
			}
		}
	}else{
		if (obj2.offsetWidth - obj.scrollLeft <= 0){
			obj.scrollLeft -= obj1.offsetWidth;
		}else{
			obj.scrollLeft++;
		}
	}
}
function marqueeStart(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");

	obj2.innerHTML = obj1.innerHTML;
	var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
	obj.onmouseover = function(){
		window.clearInterval(marqueeVar);
	}
	obj.onmouseout = function(){
		marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
	}
}
marqueeStart(1, "left");

}

(function($) {
	
	//dream视频
	$('#marquee1 li a').on({
		mouseenter: function() {
			$(this).find('.dream-video-shade').show();
		}, 
		mouseleave: function() {
			$(this).find('.dream-video-shade').hide();
		}
	});
	
	//dream-弹窗
	$('.dream-video-shade').on("click", function() {
		var index_d = $(this).parent().parent().index();
		// console.log(index_d);
		$('#mask-container').fadeIn();
		$('.dream-boxy-pop').eq(index_d).show();
	});
	//弹窗
	$('.boxy-pop').on("click", function() {
		return false;
	});
	// $('.dream-boxy-pop').on("click", function() {
		// $('.mask-container').show();
	// });
	//遮罩
	$('.mask-container').on("click", function() {
		$(this).hide();
		$('.dream-boxy-pop').hide();
		playPause();
	});
	function playPause(){ 
		$(".dream-modal video").each(function() {
			var video_id = $(this).attr('id');
			document.getElementById(video_id).pause();
		});
	}
})(jQuery);
// var video_x = $('#modal_v1');

	
