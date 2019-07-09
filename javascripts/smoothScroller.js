const SmoothScroller = {
	init: function() {
		$('header').on('click', 'a', this.scrollToSection.bind(this));
	},

	scrollToSection: function(e) {
		var jumpId = $(e.target).attr('href');

		$('html, body').animate({scrollTop: $(jumpId).offset().top}, 'slow');
	},
}

