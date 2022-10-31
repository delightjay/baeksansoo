$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$("header.main-header").addClass("header-scroll");
	} else {
		$("header.main-header").removeClass("header-scroll");
	}
});