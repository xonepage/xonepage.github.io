//author:steking
(function($) {
	
	//head轮播
	var t = n = 0, 
		count = $("#play-list a").size()-1;
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
	//导航
	var inx = $('.nav-all').find('.on').index();
	$('.nav-all li').on({
		mouseenter: function() {
			$(this).addClass('on').siblings().removeClass('on');
		}, 
		mouseleave: function() {
			if(inx >= 0){
				$('.nav-all li').eq(inx).addClass('on').siblings().removeClass('on');
			}else{
				$('.nav-all li').removeClass('on');
			}
			
		}
	});
	
	//小轮播
	var p = q = 0, 
		count = $("#play-list-s a").size();
	$("#play-list-s a:not(:first-child)").hide();
	$("#play-text-s li:first-child").addClass('on');
		
	$("#play-text-s li").on("click", function() {
		var i = $(this).index();
			o = $("#play-list-s a").eq(i).is(":visible");
			q = i;
			if (i >= count || o == true) return;
			$("#play-list-s a").fadeOut(1000).parent().children().eq(i).fadeIn(1000);
			$(this).addClass('on').siblings().removeClass('on');
	});
	p = setInterval(showAuto_s, 3000);
	$(".casting-play-s").on({
		mouseenter: function() {
			clearInterval(p);
		}, 
		mouseleave: function() {
			p = setInterval(showAuto_s, 3000);
		}
	});
	function showAuto_s(){
		q = q >= (count - 1) ? 0 : ++q;
		$("#play-text-s li").eq(q).trigger('click');
	}
	//公告
	function AutoScroll(){
        $('.notice-lists').find("ul:first").animate({
                marginTop:"-25px"
        },500,function(){
                $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        });
	}
	var s = setInterval(AutoScroll,3000)
	//百分图
	// $('.cir-mark').length) && 
	$('.cir-mark').each(function() {
		var cir_txt = parseFloat($(this).find('span').text()),
			cir_s = cir_txt*80+cir_txt*14;
		if(cir_txt>25&&cir_txt<50){
			cir_s = cir_s+3;
		}else if(cir_txt>=50&&cir_txt<80){
			cir_s = cir_s+5;
		}else if(cir_txt>=80&&cir_txt<100){
			cir_s = cir_s+8;
		}else if(cir_txt==100){
			cir_s = cir_s+7;
		}
		
		$(this).find('span').css('background-position',-cir_s)
	})
	
	//倒计时
	var $hour = parseInt($('.hour-show').text()),
		$minute = parseInt($('.minute-show').text()),
		$second = parseInt($('.second-show').text()),
		intDiff = $hour*3600 + $minute*60 + $second;
	function timer(intDiff){
		window.setInterval(function(){
			var	hour=0,
				minute=0,
				second=0;	
			if(intDiff > 0){
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (hour <= 9) hour = '0' + hour;
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$('.hour-show').html('<s></s>'+hour);
			$('.minute-show').html('<s></s>'+minute);
			$('.second-show').html('<s></s>'+second);
			intDiff--;
		}, 1000);
	}
	$(function(){
		timer(intDiff);
	});	
	
	//返回顶
	// if($('.content-all').length){
			// var c_left = $('.content-all').offset().left;
			// if(c_left == 0){
				// c_left = 140;
			// }
			// $('.right-suspend').css({"right":c_left-70,"display":"block"});
		// }
		
	$('#black-top').click(function(){
		var sh = $(document).scrollTop();
		if(sh>0){
			$('body,html').stop(true,false).animate({scrollTop:0},1000);
		}else{
			return false;
		}
	}); 
	
	//产品详情
	var on_inx = $('.tabs-list').find('.on-top').index();
		$('.tabs-list-det li').eq(on_inx).show();
		$('.tabs-list li').on("click", function() {
			var de_inx = $(this).index();
			$('.tabs-list-det ul').children('li').eq(de_inx).show().siblings().hide();
			$(this).addClass('on-top').siblings().removeClass('on-top');
		});
	
	
	//弹层
	$('#boxy-imgs').length &&
	$('#boxy-imgs li').on("click","a", function() {
		var img_inx = $(this).parent().index();
		$('.boxys-lay').fadeIn(400);
		$('.boxy-part li').eq(img_inx).show().siblings().hide();
		return false;
	});
	
	//首页弹层
	$('#login-int-box').on("click", function() {
		$('#boxys-lay-lo').fadeIn(400);
	});
	$('#reg-int-box').on("click", function() {
		$('#boxys-lay-reg').fadeIn(400);
	});
	$('#boxys-lay-lo').on('click',function(e){
		var _con = $('.boxys-lo-reg');
		if(!_con.is(e.target) && _con.has(e.target).length === 0){
			$(this).fadeOut(200);
		}
	});
	$('#boxys-lay-reg').on('click',function(e){
		var _con_reg = $('.boxys-re-reg');
		if(!_con_reg.is(e.target) && _con_reg.has(e.target).length === 0){
			$(this).fadeOut(200);
		}
	});
	
	//msg倒计时
	$('#msg-boxy').on("click", function() {
		$('.boxys-lay-msg').fadeIn(400);
		time_c();
		return false;//为查看效果所留
	});
	//msg倒计时
	var tim = 5,inter;
	function time_c() {
		inter = setInterval(function(){
			if (tim--) return $('.count-time').text(tim);
			clearInterval(inter);
			location.href ='login.html';
		},1000);
	}
	
	//关闭弹窗
	$('.boxy-close,.account-close').on("click", function() {
		$('.boxys-lay').fadeOut(200);
		$('.boxys-lay-msg').fadeOut(200,function() {
			$('.count-time').text(5);
			tim = 5;
		});
		clearInterval(inter);
	});
	
	$('.test-btn-msg').on("click", function() {
		$('.boxys-hint-msg').fadeIn(400);
		$('.boxys-lay-msg').fadeIn(400);
		return false;//为查看效果所留
	});
	$('.msg-close').on("click", function() {
		$('.boxys-hint-msg').fadeOut(200);
	});
	
	//折线图
	$('#container').length &&
	$('#container').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: '收益走势'
		},
		xAxis: {
			categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		},
		yAxis: {
			title: {
				text: '金额'
			}
		},
		series: [{
			name: '代收利息',
			data: [3, 6, 8, 9, 16, 19, 17, 15, 8 , 7, 10, 14]
		}, {
			name: '已收利息',
			data: [1, 2, 4, 6, 10, 12, 13, 12, 11 , 9, 6, 4]
		}]
	});
	
	//复制粘贴
	$(".copy-btns").each(function(i){
		var id = $(this).attr('data');
		var clip=null;
		clip = new ZeroClipboard.Client();
		ZeroClipboard.setMoviePath( 'js/ZeroClipboard.swf' );
		clip.setHandCursor( true );
		clip.setText( $("#copy_txt"+id).val() );
		clip.addEventListener('complete', function (client, text) {
			$("#copy_btn"+id).text('复制成功');
		});
		clip.glue( 'copy_btn'+id);
	});
	
	//帮助中心-展开
	$('.help-cont-lists').on("click", 'em',function() {
		$(this).parent().find('.help-text-ar').slideToggle();
	});
	
	
	
	
	//home-add首页新加表格
	$('.rong-table th,.rong-table td').on({
		mouseenter: function() {
			inx = $(this).index();
			$('.rong-table tr th').eq(inx).addClass('col-cjs4');
			$('.rong-table .table-tr-01 td').eq(inx).addClass('col-cjs5');
			$('.rong-table .table-tr-03 td').eq(inx).addClass('col-cjs5');
			$('.rong-table .table-tr-05 td').eq(inx).addClass('col-cjs5');
			$('.rong-table tr').each(function() {
				$(this).find('td').eq(inx).addClass('col-cjs6');
			})
		}, 
		mouseleave: function() {
			$('.rong-table tr th').removeClass('col-cjs4');
			$('.rong-table tr').each(function() {
				$(this).find('td').removeClass('col-cjs5 col-cjs6');
			})
		}
	});
	//新-微信
	var timeout_wx,
		timeout_qq;
	$('.new-wx').on("mouseenter", function() {
		$('.new-wx-cont').fadeIn();
		$('.new-qq-cont').hide();
		timeout_wx = setTimeout(hide_wx, 2222);
	});
	$('.new-qq').on("mouseenter", function() {
		$('.new-qq-cont').fadeIn();
		$('.new-wx-cont').hide();
		timeout_qq = setTimeout(hide_qq, 2222);
	});
	$('.new-wb,.item-top').on("mouseenter", function() {
		$('.new-qq-cont,.new-wx-cont').hide();
	});
	$('.new-qq-cont,.new-wx-cont').on({
		mouseenter: function() {
			clearTimeout(timeout_wx);
			clearTimeout(timeout_qq);
			$(this).show();
		}, 
		mouseleave: function() {
			$('.new-wx-cont,.new-qq-cont').hide();
		}
	});
	var hide_wx = function() {
		$('.new-wx-cont').hide();
	}
	var hide_qq = function() {
		$('.new-qq-cont').hide();
	}
	
})(jQuery);