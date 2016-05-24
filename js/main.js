$(function() {

	// jQuery Goes here!

	// When we click on the hamburger
	$('.fa-bars').on('click', function() {
		// We need to display flex the main nav
		$('.navItems ul').toggleClass('show');
	});

	$('.closeNav').on('click', function() {
		$('.navItems ul').removeClass('show');
	});

	$('.flickity').flickity({
		wrapAround: true,
		initialIndex: 3,
		imagesLoaded: true,
		autoPlay: true,
		autoPlay: 1500,
	});

	$('a').smoothScroll({
		speed: 'auto',
	});

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
});









