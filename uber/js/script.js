window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__menu'),
		menuItem = document.querySelectorAll('.header__link'),
		burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('header__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('header__menu_active');
		})
	})
})