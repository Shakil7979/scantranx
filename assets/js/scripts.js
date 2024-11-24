$(document).ready(function(){
	// Mobile Menu
	$('.mobile_bars').click(function () {
		$('.menu').slideToggle();
	
		// Toggle between 'fa-bars' and 'fa-times' icons
		$(this).find('i').toggleClass('fa-bars fa-times');
	
		return false;
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

	// Banner Carousel
	$('.feature_btn_slide').owlCarousel({
		items:5.5,
		loop:true,
		nav:true,
		dots:false,
		autoplay:false,
		navText: ["<img src='assets/images/home/customer/left.png'>","<img src='assets/images/home/customer/right.png'>"],
		margin: 20, 
		responsive:{
			0:{
			  items:2,  
			},
			600:{
			  items:3, 
			},
			1000:{
			  items:5.5, 
			} 
		  }
	});

	$('.feature_btn_slide .nav-link').on('click', function () {
        $('.feature_btn_slide .nav-link').removeClass('active'); // Remove active class from all tabs
        $(this).addClass('active'); // Add active class to the clicked tab
    });
 

	$(document).on('click','.close_modal, .modal_close_overlay', function(){
		$('.modal_main_login').hide();
		$('.modal_close_overlay').hide();
		$('.modal_main_ebook').hide();
		$('.modal_main_registraion').hide();
		return false;
	})

	$(document).on('click','.login_show_form, .show_login_modal', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_registraion').hide();
		$('.modal_main_ebook').hide();
		$('.modal_main_login').show(); 
		return false;
	})

	$(document).on('click','.show_registraion_modal', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_login').hide();
		$('.modal_main_ebook').hide();
		$('.modal_main_registraion').show();
		return false;
	})

	$(document).on('click','.free_e_book_modal_show', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_login').hide();
		$('.modal_main_registraion').hide();
		$('.modal_main_login').hide();
		$('.modal_main_ebook').show();
		return false;
	})
 
	$('.eye_password').on('click', function () {
		const passwordInput = $('#password');
		const icon = $(this).find('i');
 
		if (passwordInput.attr('type') === 'password') {
			passwordInput.attr('type', 'text');
			icon.removeClass('fa-eye').addClass('fa-eye-slash');  
		} else {
			passwordInput.attr('type', 'password');
			icon.removeClass('fa-eye-slash').addClass('fa-eye');  
		}

		return false;
	}); 

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 52) {
			$('.main_header').addClass('fixed');
		} else {
			$('.main_header').removeClass('fixed');
		}
	});
	


});