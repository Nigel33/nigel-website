const Gallery = {
	figures: null,
	icons: null, 
	timer: null,

	init: function() {
		$('.slideshow').on('click', '.prev, .next', this.handleFigureDisplay.bind(this));
		this.figures = $('.slideshow').find('figure');
		this.icons = $('.icons').find('span');
		FigureDisplay.init();
		IconDisplay.init();
		this.setInterval();
		this.figures.on('mouseenter', '.back', this.removeInterval.bind(this));
		this.figures.on('mouseleave', '.back', this.setInterval.bind(this));
	},

	removeInterval: function() {
		clearInterval(this.timer);
	},

	setInterval: function() {
		this.timer = setInterval(function() {
			$('.next').click();
		}, 7000)
	},

	handleFigureDisplay: function(e) {
		e.preventDefault();
		let direction = $(e.target).attr('class');
		let id = this.getVisibleFigureID(e); 

		FigureDisplay[direction](Number(id));
	},

	getVisibleFigureID: function(e) {
		return $(e.delegateTarget).find('figure:visible').attr('data-id');
	},
};

const FigureDisplay = {
	lastFigureID: null,

	init: function() {
		this.lastFigureID = Gallery.figures.length;
	},

	prev: function(id) {
		if (id === 1) {
			this.fadeInFig(this.lastFigureID);
			IconDisplay.activateIcon(this.lastFigureID);
		} else {
			this.fadeInFig(id - 1);
			IconDisplay.activateIcon(id - 1);
		}
	},

	next: function(id) {
		if (id === this.lastFigureID) {
			this.fadeInFig(1);
			IconDisplay.activateIcon(1);
		} else {
			this.fadeInFig(id + 1);
			IconDisplay.activateIcon(id + 1);
		}
	},

	fadeOutVisibleFigures: function(callback) {
		Gallery.figures.filter(':visible').stop().fadeOut(400, function() {
			callback();
		}); 
	},

	fadeInFig: function(targetID) {
		this.fadeOutVisibleFigures(function() {
			$(`figure[data-id="${targetID}"]`).fadeIn(400);
		});
	},
};

const IconDisplay = {
	activateIcon: function(id) {
		Gallery.icons.filter('.active').removeClass('active');
		$(Gallery.icons[id - 1]).addClass('active');
	},

	handleFigureDisplay: function(e) {
		let id = $(e.target).attr('data-id');

		Gallery.icons.filter('.active').removeClass('active');
		$(Gallery.icons[id - 1]).addClass('active');
		FigureDisplay.fadeInFig(id)
	},

	init: function() {
		$('.icons').on('click', 'span', this.handleFigureDisplay.bind(this));
	},


};