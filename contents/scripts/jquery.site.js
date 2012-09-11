(function($, _gaq){
	$(function() {
		// Add event tracking handlers
		$('[data-category]').on('click', function() {
			var data = $(this).data();

			_gaq.push(['_trackEvent', data.category, data.action, data.value]);
		});

		// Start freetile
		$('.gallery').freetile();
	});
}(jQuery, _gaq || []));
