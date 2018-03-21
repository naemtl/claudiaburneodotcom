$(function() {
	$('ul.nav a').on('click', function() {
		// current class assignment 
		$('ul.nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		// set heading text based on category
		$('p.h1').text($(this).text());

		// get and filter link text
		var category = $(this).text().toLowerCase().replace(/\s/g, '-');

		// show based on category
		$('.gallery-section').each(function() {
			if (!$(this).hasClass(category)) {
				$(this).addClass('hidden');
			} else {
				$(this).removeClass('hidden');
			}
		});

		// stop link behaviour
		return false;
	});
});
