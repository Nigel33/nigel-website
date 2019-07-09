ModalHandler = {
	init: function() {
		$('.about').on('click', '.back', this.handleRenderModal.bind(this));
		$('.modal_layer').click(this.handleRemoval);
	},

	handleRenderModal: function(e) {
		e.stopPropagation();
		var $back = $(e.target);

		$back.closest('.front').next('.modal_container').fadeIn(400);
	},

	handleRemoval: function(e) {
		e.stopPropagation();
		var $modal_layer = $(this);

		$modal_layer.closest('.modal_container').fadeOut(400);
	},
};