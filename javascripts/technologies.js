const Technologies = {
	initialHeaderHeight: null,
	init: function() {
		$('.technologies').on('click', 'button', this.showOrHideContent.bind(this));
	},

	showOrHideContent: function(e) {
		e.stopPropagation();
		var $button = $(e.target);
		var visible = $button.prevAll('.toggle').filter(':visible').length

		if (visible) {
			$button.prevAll('.toggle').hide(0, NavBarHeightManager.setOriginalHeight.bind(NavBarHeightManager));	
			$button.text('Show More');
		} else {
			$button.prevAll('.toggle').show(0, NavBarHeightManager.setHeight);
			$button.text('Show Less');
		}
	},
}
	