$(document).ready(function () {
	$('.slider-2').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-1',
		centerMode: true,


		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev_arrow.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next_arrow.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},

		]


	});
	$('.slider-1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 300,
		cssEase: 'linear',
		asNavFor: '.slider-2',
		centerMode: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev_arrow.svg"></button>',
					nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next_arrow.svg"></button>',
					fade: false,
				}
			},

		]

	});
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
	$('.burger').click(function (event) {
		$('.burger, .header__menu-burger').toggleClass('active');

	});
	$('.header__link-burger').click(function (event) {
		$('.burger, .header__menu-burger').toggleClass('active');

	});

	//	$('.header__choose.rus').on('click', function () {
	//		$('.wrapper__eng').fadeOut();
	//		$('.wrapper__rus').fadeIn();
	//	})
	$('.rus, .eng').click(function (event) {
		$('.wrapper__eng, .wrapper__rus, .rus, .eng').toggleClass('active');
		$('.slider-1, .slider-2').slick('refresh');

	});






});