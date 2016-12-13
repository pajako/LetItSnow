

$(document).ready(function(){
	$("body").mousemove(function (event) {
		var body_top  = $("body").offset().top;
		var body_left = $("body").offset().left;


		var mouse_x = body_left + $("body").width() / 2;
		var mouse_y = body_top + $("body").height() / 2;

		// TODO: OPTIMIZE THIS CODE


		// CLOSE OFFSET
		var offset_close_x  = (event.pageX - mouse_x) / 100 + "%";
		var offset_close_x2 = (event.pageX - mouse_x) / 100 * -1 + "%";
		var offset_close_y  = (event.pageY - mouse_y) / 100 + "%";
		var offset_close_y2 = (event.pageY - mouse_y) / 100 * -1 + "%";

		//console.log("X: "+offset_front_x+" Y:"+offset_front_y);
		//console.log("X: "+offset_front_x2+" Y:"+offset_front_y2);

		$(".forrest .close").css("margin-top",		offset_close_y);
		$(".forrest .close").css("margin-bottom",	offset_close_y2);
		$(".forrest .close").css("margin-left",		offset_close_x);
		$(".forrest .close").css("margin-right",	offset_close_x2);

		// FRONT OFFSET
		var offset_front_x  = (event.pageX - mouse_x) / 300 + "%";
		var offset_front_x2 = (event.pageX - mouse_x) / 300 * -1 + "%";
		var offset_front_y  = (event.pageY - mouse_y) / 300 + "%";
		var offset_front_y2 = (event.pageY - mouse_y) / 300 * -1 + "%";

		//console.log("X: "+offset_front_x+" Y:"+offset_front_y);
		//console.log("X: "+offset_front_x2+" Y:"+offset_front_y2);

		$(".forrest .front").css("margin-top",	offset_front_y);
		$(".forrest .front").css("margin-bottom",	offset_front_y2);
		$(".forrest .front").css("margin-left",		offset_front_x);
		$(".forrest .front").css("margin-right",	offset_front_x2);

		// MID OFFSET
		var offset_mid_x  = (event.pageX - mouse_x) / 600 + "%";
		var offset_mid_x2 = (event.pageX - mouse_x) / 600 * -1 + "%";
		var offset_mid_y  = (event.pageY - mouse_y) / 600 + "%";
		var offset_mid_y2 = (event.pageY - mouse_y) / 600 * -1 + "%";

		//console.log("X: "+offset_front_x+" Y:"+offset_front_y);
		//console.log("X: "+offset_front_x2+" Y:"+offset_front_y2);

		$(".forrest .mid").css("margin-top",	offset_mid_y);
		$(".forrest .mid").css("margin-bottom",	offset_mid_y2);
		$(".forrest .mid").css("margin-left",	offset_mid_x);
		$(".forrest .mid").css("margin-right",	offset_mid_x2);

		// FAR OFFSET
		var offset_far_x  = (event.pageX - mouse_x) / 600 + "%";
		var offset_far_x2 = (event.pageX - mouse_x) / 600 * -1 + "%";
		var offset_far_y  = (event.pageY - mouse_y) / 600 + "%";
		var offset_far_y2 = (event.pageY - mouse_y) / 600 * -1 + "%";

		//console.log("X: "+offset_front_x+" Y:"+offset_front_y);
		//console.log("X: "+offset_front_x2+" Y:"+offset_front_y2);

		$(".forrest .far").css("margin-top",	offset_far_y);
		$(".forrest .far").css("margin-bottom",	offset_far_y2);
		$(".forrest .far").css("margin-left",	offset_far_x);
		$(".forrest .far").css("margin-right",	offset_far_x2);
    });

	// SLED DETECT HIT
	$(".sled .hitbox").click(function(){
		$(this).addClass("rekt");
	});

	// THROWING SNOWBALL
	// CREDIT: //stackoverflow.com/questions/3385936/jquery-follow-the-cursor-with-a-div
	var $mouseX = 0, $mouseY = 0;
	var $xp = 0, $yp =0;

	$(document).mousemove(function(e){
		$mouseX = e.pageX;
		$mouseY = e.pageY;    
		
	});

	var $loop = setInterval(function(){
		$xp += (($mouseX - $xp)/12);
		$yp += (($mouseY - $yp)/12);
		$(".snowball").css({left:$xp +'px', top:$yp +'px'});
	}, 2);

	$("body").click(function(){
		$(".snowball").addClass("throw");
		setTimeout(function() {
			$(".snowball").removeClass("throw");
		}, 150);
	});

});