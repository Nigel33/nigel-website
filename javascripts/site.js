
require 'handlebars'

ModalHandler = {
	init: function() {
		console.log('fdf');
	},
};

$(function() {
	var height = $('main').height();
	$('.navbar').height(height);
	
	console.log('fdfdsddsd');
	ModalHandler.init();
});
