/**
 * Created by hero on 15-4-1.
 */
$(document).ready(function(){
	$('.part-btn-zan a, .part-btn-zan-new a').on("click", function() {
		var z_url = $(this).attr('href');
		var count = $(this).parent().find('span').text();
		$.post(z_url,function() {

		})
		count++;
		$(this).parent().find('span').text('+'+count);
		return false;
	});
	
});


