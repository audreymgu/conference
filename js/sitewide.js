$(document).ready(function () {
		$(window).scroll(function () {
				if ($(document).scrollTop() > 75) {
						$("nav.main").addClass("scroll");
				} else {
						$("nav.main").removeClass("scroll");
				}
		});
});