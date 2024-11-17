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
	


});