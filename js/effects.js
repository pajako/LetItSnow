

$(document).ready(function(){

	function calculate_movement(timestamp,event){
		var mouse_x = $("body").width() / 2;
		var mouse_y = $("body").height() / 2;

		var offset_x_right  = event.pageX - mouse_x;
		var offset_x_left = offset_x_right * -1;
		var offset_y_bottom  = event.pageY - mouse_y;
		var offset_y_top = offset_y_bottom * -1;

		// CLOSE
		var offset_x_close_left  = offset_x_left / 250;
		var offset_x_close_right = offset_x_right / 250;
		var offset_y_close_top  = offset_y_top / 150;
		var offset_y_close_bottom = offset_y_bottom / 150;

		$("#forrest_close").css({
			"margin-top"   : offset_y_close_top.toFixed(3)+"%",
			"margin-bottom": offset_y_close_bottom.toFixed(3)+"%",
			"margin-left"  : offset_x_close_left.toFixed(3)+"%",
			"margin-right" : offset_x_close_right.toFixed(3)+"%"
		});

		// FRONT
		var offset_x_front_left  = offset_x_left / 400;
		var offset_x_front_right = offset_x_right / 400;
		var offset_y_front_top  = offset_y_top / 300;
		var offset_y_front_bottom = offset_y_bottom / 300;

		$("#forrest_front").css({
			"margin-top"   : offset_x_front_left.toFixed(3)+"%",
			"margin-bottom": offset_y_front_bottom.toFixed(3)+"%",
			"margin-left"  : offset_x_front_left.toFixed(3)+"%",
			"margin-right" : offset_x_front_right.toFixed(3)+"%"
		});

		// MID
		var offset_x_mid_left  = offset_x_left / 600;
		var offset_x_mid_right = offset_x_right / 600;
		var offset_y_mid_top  = offset_y_top / 500;
		var offset_y_mid_bottom = offset_y_bottom / 500;

		$("#forrest_mid").css({
			"margin-top"   : offset_x_mid_left.toFixed(3)+"%",
			"margin-bottom": offset_y_mid_bottom.toFixed(3)+"%",
			"margin-left"  : offset_x_mid_left.toFixed(3)+"%",
			"margin-right" : offset_x_mid_right.toFixed(3)+"%"
		});

		// FAR
		var offset_x_far_left  = offset_x_left / 800;
		var offset_x_far_right = offset_x_right / 800;
		var offset_y_far_top  = offset_y_top / 700;
		var offset_y_far_bottom = offset_y_bottom / 700;

		$("#forrest_far").css({
			"margin-top"   : offset_x_far_left.toFixed(3)+"%",
			"margin-bottom": offset_y_far_bottom.toFixed(3)+"%",
			"margin-left"  : offset_x_far_left.toFixed(3)+"%",
			"margin-right" : offset_x_far_right.toFixed(3)+"%"
		});
	}

	$(document).mousemove(function (event) {
		requestAnimationFrame(function(timestamp) {
			calculate_movement(timestamp,event);
		});
	});

	// LOGO DETECT HIT
	$(".logo .inside img").click(function(){
		$(this).siblings(".ice").addClass("hit");
	});


	// SNOWBALL MOVING

	/*var currentMousePos = { x: -1, y: -1 };
	function move_weapon(timestamp,event){
		currentMousePos.x = event.pageX;
		currentMousePos.y = event.pageY;

		$(".snowball").css({
			'transform': 'translate3d('+currentMousePos.x+'px, '+currentMousePos.y+'px, 0)'
		})
	}*/

	/*$(document).mousemove(function (event) {
		requestAnimationFrame(function(timestamp) {
			move_weapon(timestamp,event);
		});
	});

	$("body").click(function(){
		$(".snowball").addClass("throw");
		setTimeout(function() {
			$(".snowball").removeClass("throw");
		}, 400);
	});*/
});