(function() {
	var contactButton = document.getElementById('contact-link');
	contactButton.addEventListener('click', function() {
		window.location.href = 'mailto:kanish671@gmail.com';
	}, false);
	$('.ui.sidebar').sidebar({
		context: $('body'),
		transition: 'overlay'
	}).sidebar('attach events', '#mobile-menu');
})();