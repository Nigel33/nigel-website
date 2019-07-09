
NavBarHeightManager = {
	originalHeight: null,
	setHeight: function() {
		var height = $('body').height();
		$('header').height(height);
		console.log(height + 'current');
	},

	setOriginalHeight: function() {
		console.log($('body').height());

		// if ($('body').height() > this.originalHeight) {
		// 	return;
		// }

		$('header').height(this.originalHeight);
	},

	init: function() {
		this.originalHeight = $('body').height();
	},
};

$(function() {
	NavBarHeightManager.init();
	ModalHandler.init();
	SmoothScroller.init();
	StickyActiveNavbar.init();
	Gallery.init();
	Technologies.init();
});


