StickyActiveNavbar = {
	init: function() {
		$(window).scroll(this.scroll.bind(this));
	},


	scroll: function(e) {
		let cur_pos = $(e.currentTarget).scrollTop() + 10;
		let $sections = $('section[id]'); 
		let $nav = $('.navbar');

		$sections.each(function() {
			let top = $(this).position().top 
			let bottom = top + $(this).outerHeight();
			let id = $(this).attr('id');
			
			if (cur_pos > top && cur_pos < bottom) {
				$(`a[href="#${id}"]`).parent('li').addClass('active');
			} else {
				$(`a[href="#${id}"]`).parent('li').removeClass('active');
			}
		});
	}
};