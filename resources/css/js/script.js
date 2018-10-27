$(document).ready(function(){
	
// enabling sticky nav after main page
	$('.js--section-about').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	
	    /*---scroll on buttons---*/

	$('.js--scroll-to-packages').click(function (){
      $('html, body').animate({scrollTop: $('.js--section-packages').offset().top}, 1000);
   	});
	
   	$('.js--scroll-to-about').click(function(){
    	$('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
   	});
	
	//navigation scroll
	
	$(function(){
    $("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
         location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
});
	
	//animations on scroll
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeInLeft');
	},{
		offset: '80%'
	});
	
	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInRight');
	},{
		offset: '70%'
	});
	
	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeInLeft');
	},{
		offset: '70%'
	});
	
	//mobile navigation
	
	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.removeClass('ion-close-round');
			icon.addClass('ion-navicon-round');
		}
		
	});
	
	var map = new GMaps({
	  div: '.map',
	  lat: 51.515976,
	  lng: -0.78,
	  zoom: 11
});
	
	map.addMarker({
	  lat: 51.515976,
	  lng: -0.574799,
	  title: 'Slough'
});

	
});