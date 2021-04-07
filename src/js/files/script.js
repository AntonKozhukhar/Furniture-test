//Burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click', function () {
	let active = burger.classList.toggle('_active');
	if (active) {
		menu.classList.toggle('_active');
	} else {
		menu.classList.remove('_active');
	}
});

/* //Srcoll
let scroll = document.querySelector('.luxury__scroll-btn[data-goto]');

scroll.addEventListener('click', function (e) {
	let btn = e.target;
	if (btn.dataset.goto && document.querySelector(btn.dataset.goto)) {
		let gotoBlock = document.querySelector(btn.dataset.goto);
		let gotoBlockValue =
			gotoBlock.getBoundingClientRect().top + pageYOffset;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth',
		});
		e.preventDefault();
	}
}); */

//Slider
new Swiper('.slider__container', {
	navigation: {
		nextEl: '.slider__arrow-right',
		prevEl: '.slider__arrow-left'
	},
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 600,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1470: {
      slidesPerView: 3,
    },
  }
});
