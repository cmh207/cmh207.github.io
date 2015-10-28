$(document).ready(function(){
	$(".hidingtext").hide();

	$(".top-container div").mouseenter(function(){
		$(this).css("cursor", "pointer");
		$("img", this).css("opacity", "0.5")
		$(".hidingtext", this).show();
	});
	$(".top-container div").mouseleave(function(){
		$(this).css("cursor", "pointer");
		$("img", this).css("opacity", "1.0")
		$(".hidingtext", this).hide();
	});
});