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



$(document).on('click', '.dropdown-toggle', function(e) {
    e.preventDefault(); // Prevent default link behavior
    const $dropdown = $(this).next('.drop_down_menu');
    $('.drop_down_menu').not($dropdown).removeClass('active'); // Close other dropdowns
    $dropdown.toggleClass('active'); // Toggle visibility of the clicked dropdown
});



document.querySelectorAll('.open-calendly').forEach(function(button) {
	button.addEventListener('click', function(event) {
	  event.preventDefault();
	  Calendly.initPopupWidget({ url: 'https://calendly.com/scantranx/demo' }); 
	});

	return false;
});



$(document).ready(function () {
    const videoUrl = "assets/images/home/banner/ScanTranx.mp4";

    // Show popup and play video
    $(".wathc_video").click(function (e) {
        e.preventDefault(); // Prevent the default link behavior
        $("#localVideo source").attr("src", videoUrl);
        $("#localVideo")[0].load(); // Reload the video source
        $("#localVideo")[0].play(); // Start playing the video
        $("#videoPopup").fadeIn();
    });

    // Close popup and stop video
    $(".close-popup").click(function () {
        $("#localVideo")[0].pause(); // Pause the video
        $("#localVideo")[0].currentTime = 0; // Reset video to the beginning
        $("#videoPopup").fadeOut();
    });

    // Close popup on clicking outside the content
    $("#videoPopup").click(function (e) {
        if ($(e.target).is("#videoPopup")) {
            $(".close-popup").click();
        }
    });
});

 


$(document).ready(function () {
    function activateTab(tabId, shouldScroll = true) {
        const tabButton = $(`#${tabId}-tab`);
        const tabContent = $(`#${tabId}`);
        
        // Remove active classes from all tabs and tab-content
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('active show');
        
        // Add active class to the clicked button and its corresponding content
        tabButton.addClass('active');
        tabContent.addClass('active show');
        
        // Ensure Bootstrap's tab functionality is invoked
        const tab = new bootstrap.Tab(tabButton[0]);
        tab.show();

        // Smooth scroll only if shouldScroll is true
        if (shouldScroll) {
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: tabContent.offset().top - 50 // Adjust offset as needed
                }, 500); // Smooth scrolling
            }, 300); // Small delay for proper activation
        }
    }

    // Check if URL contains a hash
    const hash = window.location.hash;
    if (hash) {
        const tabId = hash.substring(1); // Extract tab ID from hash
        activateTab(tabId, true); // Activate tab and scroll
    } else {
        // Default to the first tab if no hash is found
        const firstTabButton = $('.nav-tabs .nav-link:first'); // First tab button
        const firstTabContent = $('.tab-pane:first'); // First tab content
        
        firstTabButton.addClass('active');
        firstTabContent.addClass('active show');
        
        const tab = new bootstrap.Tab(firstTabButton[0]);
        tab.show();
    }

    // Handle click events for the tab buttons
    $('.nav-link').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        
        const tabId = $(this).attr('id').replace('-tab', ''); // Extract tab ID
        activateTab(tabId, false); // Activate the clicked tab without scrolling
    });

    // Handle clicks for feature links in the footer
    $('.feature_item_link a').on('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        
        const tabId = $(this).attr('href').substring(1); // Extract tab ID
        activateTab(tabId, true); // Activate tab and scroll
        
        // Update the URL hash to reflect the clicked tab
        window.location.hash = tabId;
    });
});

 



 


// test 


// $(document).ready(function () {
//     // Function to activate the correct tab and scroll to it
//     function activateTab(tabId, shouldScroll = true) {
//         const tabButton = $(`#${tabId}-tab`);
//         const tabContent = $(`#${tabId}`);
        
//         // Remove active classes from all tabs and tab-content
//         $('.nav-link').removeClass('active');
//         $('.tab-pane').removeClass('active show');
        
//         // Add active class to the button and corresponding content
//         tabButton.addClass('active');
//         tabContent.addClass('active show');
        
//         // Ensure Bootstrap's tab functionality is invoked
//         const tab = new bootstrap.Tab(tabButton[0]);
//         tab.show();

//         // Scroll only if shouldScroll is true
//         if (shouldScroll) {
//             $('html, body').animate({
//                 scrollTop: tabContent.offset().top - 50 // Adjust offset if needed
//             }, 500); // 500ms for smooth scrolling
//         }
//     }

//     // Check if there is a hash in the URL (e.g., for coming from another page)
//     const hash = window.location.hash;
//     if (hash) {
//         const tabId = hash.substring(1); // Extract tab ID from URL
//         activateTab(tabId); // Activate the tab
//     } else {
//         // Default behavior: remove active classes on normal reload
//         $('.nav-link').removeClass('active');
//         $('.tab-pane').removeClass('active show');

//         // Optionally, set the first tab as active (if desired)
//         const firstTab = $('.nav-tabs .nav-item:first-child .nav-link');
//         const firstTabContent = $('.tab-pane:first');
        
//         firstTab.addClass('active');
//         firstTabContent.addClass('active show');
        
//         const tab = new bootstrap.Tab(firstTab[0]);
//         tab.show();
//     }

//     // Handle click on feature list links
//     $('.feature_item_link_own a').on('click', function (e) {
//         e.preventDefault(); // Prevent default link behavior
        
//         const tabId = $(this).attr('href').substring(1); // Extract tab ID (e.g., 'Inventory', 'Omni')
//         activateTab(tabId); // Activate the corresponding tab
        
//         // Update the URL hash
//         window.location.hash = tabId;
//     });
// });
 

 

$(document).ready(function () {
    // Tab click event
    $('.feature_item_link_own a').on('click', function (e) {
        e.preventDefault();

        // Remove active class from all links and tabs
        $('.feature_item_link_own a').removeClass('active');
        $('.tab-pane').removeClass('show active');

        // Add active class to clicked link
        $(this).addClass('active');

        // Show the corresponding tab pane
        const target = $(this).attr('href');
        $(target).addClass('show active');

        // Scroll to the corresponding tab pane
        $('html, body').animate({
            scrollTop: $(target).offset().top - 20  // Adjust the margin top as needed
        }, 600);  // 600ms for smooth scroll duration
    });

    // Check if the URL contains a hash (e.g., #tab1), and activate that tab
    if (window.location.hash) {
        const hash = window.location.hash;
        $('.feature_item_link_own a[href="' + hash + '"]').addClass('active');
        $(hash).addClass('show active');

        // Scroll to the tab with the hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 20
        }, 600);
    } else {
        // If no hash, activate the first tab by default
        $('.feature_item_link_own a:first').addClass('active');
        $('.tab-pane:first').addClass('show active');
    }
});
