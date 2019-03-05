/* Loading screen */
$(document).ready(function() {
	$("#loading-bg").css({opacity: 0});
	setTimeout(function() {
		$("#loading-bg").css({display: 'none'});
	}, 100);
	
});

/* Reveal header when scroll */
$(window).on('scroll load resize', function() {
	let scrollTop = $(window).scrollTop();
	let widthDevice = $(window).width();
	let sliderAreaHeight = $('#slider-area').outerHeight() - $('header').outerHeight();

	if(scrollTop > sliderAreaHeight || widthDevice < 768)
		$('header').addClass('isSticky');
	else
		$('header').removeClass('isSticky');
});

/* Transition when click an anchor */
$('a.nav-link, a.nav-trans').on('click', function(event) {
	$('html, body').stop().animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000, 'easeInOutExpo');
	
	event.preventDefault();
});


$(window).on('scroll resize', function() {
	let scrollMid = $(window).scrollTop() + $(window).height()/2;

	$('a.nav-link').each(function(i) {
		let $element = $($(this).attr('href'));
		let element_top_position = $element.offset().top;
		let element_height = $element.outerHeight();
		let element_bottom_position = element_top_position + element_height;

		if( (element_top_position <= scrollMid) && (element_bottom_position >= scrollMid)) {
			$('nav ul li a').removeClass('active');
			$(this).addClass('active');		
		}
	});
});


$('.skills .skill').each(function() {
	let getValue = $(this).children('.skill-title').children().text();
	
	$(this).children('div.progress').children('.progress-bar').css({width: getValue});
});

/* ===================== 
	Plugins 
=======================*/

/* Owl Carousel */
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	center: true,
  	items: 2,
  	loop: true,
  	margin: 10,
  	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
  	responsive: {
		600: {
			items: 4
		}
  	}

  });
});


/* Magnific Popup */
$(document).ready(function() {
	$('.image-link').magnificPopup({type:'image'});

	$('.work').magnificPopup({
		delegate: 'a.popup-image',
		type: 'image',
  		// other options
  		
	});
});
