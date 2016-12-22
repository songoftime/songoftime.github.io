
	var scale = 0;

	function fit() {
		scale = document.documentElement.clientWidth / 320 * 20;
		$("html").css({
			fontSize: scale + "px"
		});
	}
	fit();
	window.onresize = function() {
		fit();
	}


	


$("#jieshao").on("touchstart",function(){
	$("#menu1").toggle(500);
});
$("#meishi").on("touchstart",function(){
	$("#menu2").toggle(500);
});
$("#mendian").on("touchstart",function(){
	$("#menu3").toggle(500);
});
$("#jiameng").on("touchstart",function(){
	$("#menu4").toggle(500);
});
$("#close1").on("touchstart",function(){
	$("#menu").animate({
		left:"-15rem"
	});
});
$("#menus").on("touchstart",function(){
	$("#menu").animate({
		left:"0rem"
	});
});
