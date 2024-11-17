$(document).ready(function(){
	// Mobile Menu
	$('.mobile_bars').click(function(){
		$('.menu').slideToggle();

		return false
	});

	// Banner Carousel
	$('.customer_carousel').owlCarousel({
		items:2,
		loop:true,
		nav:true,
		dots:true,
		autoplay:true,
		margin: 20,
		navText: ["<img src='assets/images/home/customer/left.png'>","<img src='assets/images/home/customer/right.png'>"],
		responsive:{
			0:{
			  items:1,
			  dots:false,
			},
			600:{
			  items:2,
			  dots:false,
			},
			1000:{
			  items:2,
			  dots:true,
			} 
		  }
	});

	// Banner Carousel
	$('.trusted_img').owlCarousel({
		items:5,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		margin: 20, 
		responsive:{
			0:{
			  items:2,  
			},
			600:{
			  items:3, 
			},
			1000:{
			  items:5, 
			} 
		  }
	});





});