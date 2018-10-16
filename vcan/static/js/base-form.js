(function($) {
	$('form :input').blur(function(){
		var $parent = $(this).parent();
		// $parent.find("input").remove();
		//验证用户名
		if( $(this).is('#user_name') ){
			if( this.value==""){
				$(this).addClass('on');
			}else{
				$(this).removeClass('on');
			}
		}
		//验证邮件
		if( $(this).is('#email_address') ){
			if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
				$(this).addClass('on');
			}else{
				$(this).removeClass('on');
			}
		}
		//验证电话
		if( $(this).is('#user_phone') ){
			if( this.value=="" || ( this.value!="" && !/^(0?1[358]\d{9})$|^((0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7})$/.test(this.value) ) ){
				$(this).addClass('on');
			}else{
				$(this).removeClass('on');
			}
		}
		//验证内容
		if( $(this).is('#text_content') ){
			if( this.value==""){
				$(this).addClass('on');
			}else{
				$(this).removeClass('on');
			}
		}
	})
	
	$('#send_btn').on("click", function() {
		$("form :input").trigger('blur');
		var numError = $('form .on').length;
		if(numError){
			return false;
		}
	});
})(jQuery);