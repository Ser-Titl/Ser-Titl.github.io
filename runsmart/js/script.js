$(document).ready(function () {
	$('.slider__carousel').slick({
		speed: 600,
		//fade: true,
		cssEase: "linear",
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.png"></button>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					infinite: false,
					dots: true
				}
			},
		]
	});
	$('ul.puls__cap').on('click', 'li:not(.puls__tab_active)', function () {
		$(this)
			.addClass('puls__tab_active').siblings().removeClass('puls__tab_active')
			.closest('div.container').find('div.puls__content').removeClass('puls__content_active').eq($(this).index()).addClass('puls__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog__roll').eq(i).toggleClass('catalog__roll_active');
				$('.catalog__roll2').eq(i).toggleClass('catalog__roll2_active');

			})
		})
	}

	toggleSlide('.catalog__link');
	toggleSlide('.catalog__link2');

	$('[data-modal=consult]').on('click', function () {
		$('.overlay, #consult').fadeIn('slow');
	})

	$('.modal__close').on('click', function () {
		$('.overlay, #consult, #order, #thanks').fadeOut('slow');
	})

	$('.catalog__button').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__subtitle').text($('.catalog__title').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	})



	$("input[name=tel]").mask("+7 (999) 999-99-99");

	new WOW().init();






});