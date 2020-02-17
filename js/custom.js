$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");    
});


$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg1.jpg", 
	 		 "images/bg2.jpg",
	 			], 	{duration: 3200, fade: 1300});
		});
})