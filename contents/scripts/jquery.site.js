(function($, _gaq){
	$(functon() {
		// Add event tracking handlers
		$('[data-category]').click(function() {
			var data = $(this).data();

			_gaq.push(['_trackEvent', data.category, data.action, data.value]);
		});
	});
}(jQuery, _gaq || []));