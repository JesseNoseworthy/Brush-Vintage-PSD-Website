var brush = {
	// Holding an empty object to add functions to
};

smoothScroll = function() {
	$('a').smoothScroll({
		speed: 'auto',
	});
}

brush.slideshowStart = function() {
	$('.slideshow-start').on('click', function() {
		console.log('success');
	});
}

brush.navToggle = function() {
	// When we click on the hamburger
	$('.fa-bars').on('click', function() {
		// We need to display flex the main nav
		$('.navItems ul').toggleClass('show');
	});

	$('.closeNav').on('click', function() {
		$('.navItems ul').removeClass('show');
	});
}

brush.flickity = function() {	
	$('.flickity').flickity({
		wrapAround: true,
		initialIndex: 3,
		imagesLoaded: true,
		autoPlay: true,
		autoPlay: 1500,
	});
}

brush.newsletterSubmit = function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var $messageContainer = $('.message');

		if (email.value.length == "") {
			$messageContainer.find('p').text('Please enter your contact information!');
		}
		else {
			$messageContainer.find('p').text('"' + email.value + '"' + " has successfully subscribed to Brush's newsletter!");
		}
		$messageContainer.toggleClass('showMessage');
	});

	$('.messageContinue').on('click', function() {
		
		$('.message').toggleClass('showMessage').find('p').text("");
	});
}

brush.init = function() {
	brush.slideshowStart();
	brush.navToggle();
	brush.flickity();
	smoothScroll();
	brush.newsletterSubmit();
}

$(function() {
	brush.init();
});









