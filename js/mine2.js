$(document).ready(function(e) {
    "use strict"
		$(window).scroll(function(){
		

		
		if($(this).scrollTop()> 100){
			$(".my-navbar .navbar").css({"background-color":"#FFF"});
			$(".my-navbar  .navbar-nav > li > a").css({"color":"#2d4052"});
			$(".my-navbar  .navbar-nav > li > a").hover(function(){ $(this).css({"color":"#fa6e4f"})},function(){$(this).css({"color":"#2d4052"})});
			$(".my-navbar .navbar-brand ").css({"color":"#2d4052"});
         
				
		}else{
			$(".my-navbar .navbar-brand ").css({"color":"#FFF"});
			$(".my-navbar .navbar").css({"background-color":"inherit"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").css({"color":"#FFF"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").hover(function(){ $(this).css({"color":"#fa6e4f"})},function(){$(this).css({"color":"#FFF"})});
			
		}
	});	
});