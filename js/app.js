// Swiper

const swiper = new Swiper('.swiper', {
	effect: "coverflow",
	slidesPerView: 1,

	navigation: {
		prevEl: ".swiper__prev",
		nextEl: ".swiper__next",
	},
	coverflowEffect: {
		rotate: 0,
		stretch: -35,
		modifier: 1,
		slideShadows: false,
	},
	loop: true,
	spaceBetween: 0,
	breakpoints: {
		651: {
			slidesPerView: 2,
			coverflowEffect: {
				rotate: 0,
				stretch: -35,
				modifier: 1,
				slideShadows: false,
			},
		},
		998:{
			slidesPerView: 3,
			coverflowEffect: {
				rotate: 0,
				stretch: -30,
				modifier: 1,
				slideShadows: false,
			},
		},
		1200: {
			slidesPerView: 3,
			coverflowEffect: {
				rotate: 0,
				stretch: -38,
				modifier: 1,
				slideShadows: false,
			},
		}
	}
});
