$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
	$(".fancybox-button").fancybox({
		prevEffect		: true,
		nextEffect		: true,
		closeBtn		: true,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: { position: 'top'}
		}
	});
});