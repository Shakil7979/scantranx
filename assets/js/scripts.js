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
		$('.modal_main_job').hide();
		$('.modal_main_apply_job').hide();
		return false;
	})

	$(document).on('click','.login_show_form, .show_login_modal', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_registraion').hide();
		$('.modal_main_ebook').hide(); 
		$('.modal_main_job').hide();
		$('.modal_main_apply_job').hide();
		$('.modal_main_login').show(); 
		return false;
	})

	$(document).on('click','.show_registraion_modal', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_login').hide();
		$('.modal_main_ebook').hide();
		$('.modal_main_job').hide();
		$('.modal_main_apply_job').hide();
		$('.modal_main_registraion').show();
		return false;
	})

	$(document).on('click','.free_e_book_modal_show', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_login').hide();
		$('.modal_main_registraion').hide();
		$('.modal_main_login').hide();
		$('.modal_main_job').hide();
		$('.modal_main_apply_job').hide();
		$('.modal_main_ebook').show();
		return false;
	})

	$(document).on('click','.job_right_btn a', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_login').hide();
		$('.modal_main_registraion').hide();
		$('.modal_main_login').hide();
		$('.modal_main_ebook').hide();
		$('.modal_main_apply_job').hide();
		$('.modal_main_job').show();

		$('html, body').animate({ scrollTop: 0 }, 'fast'); 
		return false;
	})

	$(document).on('click','.apply_confirm', function(){
		$('.modal_close_overlay').show();
		$('.modal_main_login').hide();
		$('.modal_main_registraion').hide();
		$('.modal_main_login').hide();
		$('.modal_main_ebook').hide();
		$('.modal_main_job').hide();
		$('.modal_main_apply_job').show();

		$('html, body').animate({ scrollTop: 0 }, 'fast'); 
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




// File upload get html 

$(document).ready(function() {
	const fileUploadBox = $('.file-upload-box');
	const fileList = $('.file-list');
	const fileInput = $('.file-upload-input');

	// Handle drag and drop events
	fileUploadBox
		.on('dragover dragenter', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).addClass('drag-over');
		})
		.on('dragleave dragend drop', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).removeClass('drag-over');
		});

	// Handle file selection
	fileInput.on('change', function(e) {
		const files = e.target.files;
		handleFiles(files);
	});

	// Handle dropped files
	fileUploadBox.on('drop', function(e) {
		const files = e.originalEvent.dataTransfer.files;
		handleFiles(files);
	});

	function handleFiles(files) {
		Array.from(files).forEach(file => {
			// Create progress bar element
			const progressBar = $('<div class="upload-progress"></div>');
			
			const fileItem = $(`
				<div class="file-item">
					<i class="fas fa-file file-icon"></i>
					<span class="file-name" title="${file.name}">${file.name}</span>
					<i class="fas fa-times remove-file"></i>
					${progressBar.prop('outerHTML')}
				</div>
			`);

			fileList.append(fileItem);

			// Remove progress bar after animation
			setTimeout(() => {
				fileItem.find('.upload-progress').remove();
			}, 1000);

			// Handle file removal
			fileItem.find('.remove-file').on('click', function(e) {
				e.stopPropagation();
				fileItem.fadeOut(300, function() {
					$(this).remove();
				});
			});

			// Get appropriate FontAwesome icon based on file type
			const fileIcon = fileItem.find('.file-icon');
			const fileExtension = file.name.split('.').pop().toLowerCase();
			
			const iconMap = {
				'pdf': 'fa-file-pdf',
				'doc': 'fa-file-word',
				'docx': 'fa-file-word',
				'xls': 'fa-file-excel',
				'xlsx': 'fa-file-excel',
				'ppt': 'fa-file-powerpoint',
				'pptx': 'fa-file-powerpoint',
				'jpg': 'fa-file-image',
				'jpeg': 'fa-file-image',
				'png': 'fa-file-image',
				'gif': 'fa-file-image',
				'zip': 'fa-file-archive',
				'rar': 'fa-file-archive',
				'txt': 'fa-file-alt'
			};

			if (iconMap[fileExtension]) {
				fileIcon.removeClass('fa-file').addClass(iconMap[fileExtension]);
			}
		});
	}
});