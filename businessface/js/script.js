$(document).ready(function () {
	$('.tv__slider').slick({
		infinite: false,
		arrows: false,
		dots: true,
		appendDots: $('.tv__control')
	});

	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	$('.burger').click(function (event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__link').click(function (event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});



});

