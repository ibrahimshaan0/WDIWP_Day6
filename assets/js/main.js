/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Offcanvas Menu Js
04. Search Overlay Js
05. Header Sticky Js
06. Counter Js
07. Animate circle Js
08. Accordion Js
09. Datetime input placeholder Js
10. Pricing toggle Js
11. Doctor carousel Js
12. Testimonials carousel Js
13. Blog carousel Js 
14. Blog carousel Js l2
15. Testimonial carousel Js l1
16. Testimonial carousel Js l2
17. Video Popup Js
18. Form Message Js

****************************************************/

(function ($) {
	"use strict";

	//////////////////////////////////////////////////////
	// 01. Preloader Js
	// $(window).on('load', function () {
	// 	const $preloader = $('#preloader');
	// 	$preloader.addClass('hidden');
	// 	setTimeout(function () {
	// 		$preloader.css('display', 'none');
	// 	}, 500);
	// });

	////////////////////////////////////////////////////
	// 02. Mobile menu Js
	// var stMenuWrap = $('.mobile-menu-active > ul').clone();
	// var stSideMenu = $('.offcanvas-menu nav');
	// stSideMenu.append(stMenuWrap);
	// if ($(stSideMenu).find('.submenu, .mega-menu').length != 0) {
	// 	$(stSideMenu).find('.submenu, .mega-menu').parent().append(
	// 		'<button class="menu-close" aria-label="Close menu"><i class="ri-arrow-right-circle-line"></i></i></button>'
	// 	);
	// }
	// var sideMenuList = $('.offcanvas-menu nav > ul > li button.menu-close, .offcanvas-menu nav > ul li.has-dropdown > a');
	// $(sideMenuList).on('click', function (e) {
	// 	e.preventDefault();
	// 	if (!($(this).parent().hasClass('active'))) {
	// 		$(this).parent().addClass('active');
	// 		$(this).siblings('.submenu, .mega-menu').slideDown();
	// 	} else {
	// 		$(this).siblings('.submenu, .mega-menu').slideUp();
	// 		$(this).parent().removeClass('active');
	// 	}
	// });

	////////////////////////////////////////////////////
	// 03. Offcanvas Menu Js
	// $(".header-offcanvas-menu").on("click", function () {
	// 	$(".offcanvas-area").addClass("opened");
	// 	$(".offcanvas-overlay").addClass("opened");
	// });
	// $(".offcanvas-close-btn").on("click", function () {
	// 	$(".offcanvas-area").removeClass("opened");
	// 	$(".offcanvas-overlay").removeClass("opened");
	// });
	// $(".offcanvas-overlay").on("click", function () {
	// 	$(".offcanvas-area").removeClass("opened");
	// 	$(".offcanvas-overlay").removeClass("opened");
	// });

	////////////////////////////////////////////////////
	// 04. Search Overlay Js
	// function initializeSearchOverlay() {
	// 	const searchIcon = $(".search-icon");
	// 	const searchOverlay = $(".search-overlay");
	// 	const closeSearch = $(".close-search");

	// 	// Show overlay
	// 	searchIcon.on("click", function (e) {
	// 		e.preventDefault();
	// 		searchOverlay.css("display", "flex");
	// 	});

	// 	// Close on click of X
	// 	closeSearch.on("click", function (e) {
	// 		e.preventDefault();
	// 		searchOverlay.css("display", "none");
	// 	});

	// 	// Optional: Click outside the form to close
	// 	$(window).on("click", function (event) {
	// 		if ($(event.target).is(searchOverlay)) {
	// 			searchOverlay.css("display", "none");
	// 		}
	// 	});
	// }

	// initializeSearchOverlay();

	//////////////////////////////////////////////////////
	// 05. Sticky header Js
	// $(window).on('scroll', function () {
	// 	var scroll = $(window).scrollTop();
	// 	var header = $('.header-main-area');

	// 	if (scroll > 100) {
	// 		header.addClass('sticky-header');
	// 	} else {
	// 		header.removeClass('sticky-header');
	// 	}
	// });

	////////////////////////////////////////////////////
	// 06. Counter Js
	// const counters = [
	// 	{ id: 'teamSupport', target: 23, suffix: 'k', duration: 2000 },
	// 	{ id: 'awardWinner', target: 16, suffix: 'k+', duration: 2000 },
	// 	{ id: 'expertDoctors', target: 10, suffix: 'k+', duration: 2000 },
	// 	{ id: 'happyPatients', target: 2000, suffix: '+', duration: 2000 }
	// ];

	// const observerOptions = {
	// 	threshold: 0.5,
	// 	rootMargin: '0px 0px -50px 0px'
	// };

	// const observer = new IntersectionObserver((entries) => {
	// 	entries.forEach(entry => {
	// 		if (entry.isIntersecting) {
	// 			const counterId = entry.target.id;
	// 			const counterConfig = counters.find(c => c.id === counterId);

	// 			if (counterConfig) {
	// 				animateCounter(
	// 					counterId,
	// 					counterConfig.target,
	// 					counterConfig.suffix,
	// 					counterConfig.duration
	// 				);
	// 				observer.unobserve(entry.target);
	// 			}
	// 		}
	// 	});
	// }, observerOptions);

	// counters.forEach(counter => {
	// 	const $element = $('#' + counter.id);
	// 	if ($element.length) observer.observe($element.get(0));
	// });

	// function animateCounter(elementId, target, suffix, duration) {
	// 	const $element = $('#' + elementId);
	// 	let start = 0;
	// 	const increment = target / (duration / 16);
	// 	let current = start;

	// 	function updateCounter() {
	// 		current += increment;
	// 		if (current < target) {
	// 			const displayValue = Math.floor(current) + '<span>' + suffix + '</span>';
	// 			$element.html(displayValue);
	// 			requestAnimationFrame(updateCounter);
	// 		} else {
	// 			const finalValue = target + '<span>' + suffix + '</span>';
	// 			$element.html(finalValue);
	// 		}
	// 	}

	// 	updateCounter();
	// }

	/////////////////////////////////////////////////////
	// 07. Animate circle Js
	// const text = $(".text");
	// text.html(text.text().split("").map((char, i) => `<span style="transform:rotate(${i * 13.3}deg)">${char}</span>`).join(""));

	////////////////////////////////////////////////////
	// 08. Accordion Js
	// $('.accordion-wrapper .btn-wrapper h6').on('click', function (e) {
	// 	$(this).parent().siblings().slideToggle("slide");
	// 	$(this).parent().parent().toggleClass("active");
	// 	$(this).parent().parent().siblings().removeClass("active");
	// 	$(this).parent().parent().siblings().children(".accordion-area").slideUp("medium");
	// });

	//////////////////////////////////////////////////////
	// 09. Datetime input placeholder Js
	// function initDateTimePlaceholder($) {
	// 	$("#dateInput").attr("type", "text").attr("placeholder", "Date");
	// 	$("#timeInput").attr("type", "text").attr("placeholder", "Time");
	// 	$("#date-and-time").attr("type", "text").attr("placeholder", "Date & Time");

	// 	$("#dateInput").on("focus", function () {
	// 		$(this).attr("type", "date").val("");
	// 	}).on("blur", function () {
	// 		if (!$(this).val()) {
	// 			$(this).attr("type", "text").attr("placeholder", "Date");
	// 		}
	// 	});

	// 	$("#timeInput").on("focus", function () {
	// 		$(this).attr("type", "time").val("");
	// 	}).on("blur", function () {
	// 		if (!$(this).val()) {
	// 			$(this).attr("type", "text").attr("placeholder", "Time");
	// 		}
	// 	});

	// 	$("#date-and-time").on("focus", function () {
	// 		$(this).attr("type", "datetime-local").val("");
	// 	}).on("blur", function () {
	// 		if (!$(this).val()) {
	// 			$(this).attr("type", "datetime-local").attr("placeholder", "Date & Time");
	// 		}
	// 	});

	// 	$('.input-wrapper svg').on('click', function () {
	// 		$('#date-and-time').focus();
	// 		$('#date-and-time')[0].showPicker?.() || $('#date-and-time')[0].click();
	// 	});
	// }
	// initDateTimePlaceholder($);

	// $("select").select2({});
	// $("#multiple").select2({
	// 	placeholder: "Select a programming language",
	// 	allowClear: true
	// });


	////////////////////////////////////////////////////
	// 10. Pricing toggle Js
	// const toggle = $("#billing-toggle")[0];
	// if (toggle) {
	// 	toggle.addEventListener('change', function () {
	// 		const monthlyContainer = $(".monthly-container")[0];
	// 		const yearlyContainer = $(".yearly-container")[0];

	// 		if (this.checked) {
	// 			$(monthlyContainer).hide();
	// 			$(yearlyContainer).show();
	// 		} else {
	// 			$(monthlyContainer).show();
	// 			$(yearlyContainer).hide();
	// 		}
	// 	});
	// }

	// if (toggle) {
	// 	const event = new Event('change');
	// 	toggle.dispatchEvent(event);
	// }

	////////////////////////////////////////////////////
	// 11. Doctor carousel Js
	// const doctorSwiper = new Swiper('.doctors-carrousel', {
	// 	loop: true,
	// 	spaceBetween: 24,
	// 	slidesPerView: 1,
	// 	speed: 800,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	breakpoints: {
	// 		320: { slidesPerView: 1 },
	// 		480: { slidesPerView: 2 },
	// 		992: { slidesPerView: 3 },
	// 		1100: { slidesPerView: 4 }
	// 	}
	// });

	////////////////////////////////////////////////////
	// 12. Testimonials carousel Js
	// const testimonialSwiper = new Swiper('.testimonial-wrapper', {
	// 	loop: true,
	// 	slidesPerView: 1,
	// 	spaceBetween: 24,
	// 	speed: 800,
	// 	autoplay: {
	// 		delay: 4000,
	// 		disableOnInteraction: false,
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	},
	// 	breakpoints: {
	// 		768: { slidesPerView: 2 },
	// 		1024: { slidesPerView: 3 },
	// 		1300: { slidesPerView: 4 }
	// 	}
	// });

	////////////////////////////////////////////////////
	// 13. Blog carousel Js 
	// const blogSwiper = new Swiper('.blog-carrousel', {
	// 	loop: true,
	// 	slidesPerView: 1,
	// 	spaceBetween: 24,
	// 	speed: 800,
	// 	autoplay: {
	// 		delay: 4000,
	// 		disableOnInteraction: false,
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	},
	// 	navigation: {
	// 		nextEl: '.custom-swiper-button-next',
	// 		prevEl: '.custom-swiper-button-prev',
	// 	},
	// 	breakpoints: {
	// 		550: { slidesPerView: 2 },
	// 		1024: { slidesPerView: 3 },
	// 		1300: { slidesPerView: 3 }
	// 	}
	// });

	////////////////////////////////////////////////////
	// 14. Blog carousel Js l2
	// const blogCarrouselL2 = new Swiper(".news-and-blog-l2 .swiper-container", {
	// 	loop: true,
	// 	slidesPerView: "auto",
	// 	spaceBetween: 24,
	// 	slidesPerGroup: 1,
	// 	speed: 800,
	// 	navigation: {
	// 		nextEl: '.news-and-blog-l2 .custom-swiper-button-next',
	// 		prevEl: '.news-and-blog-l2 .custom-swiper-button-prev',
	// 	},
	// 	breakpoints: {
	// 		300: { slidesPerView: 1 },
	// 		500: { slidesPerView: 2 },
	// 		900: { slidesPerView: 2.5 },
	// 		1200: { slidesPerView: 2.5 },
	// 		1400: { slidesPerView: 3 }
	// 	}
	// });

	////////////////////////////////////////////////////
	// 15. Testimonial carousel Js l1
	// const swiper = new Swiper(".testimonials-l1 .swiper-container", {
	// 	loop: true,
	// 	slidesPerView: 3,
	// 	spaceBetween: 24,
	// 	slidesPerGroup: 3,
	// 	speed: 800,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	},
	// 	breakpoints: {
	// 		300: { slidesPerView: 1 },
	// 		500: { slidesPerView: 2 },
	// 		900: { slidesPerView: 2.5 },
	// 		1200: { slidesPerView: 2.5 },
	// 		1400: { slidesPerView: 3 }
	// 	},
	// 	on: {
	// 		init: function () {
	// 			applyBlurToThirdSlides(this);
	// 		},
	// 		slideChangeTransitionEnd: function () {
	// 			applyBlurToThirdSlides(this);
	// 			this.slideToLoop(this.realIndex, 0, false);
	// 		}
	// 	}
	// });

	// function applyBlurToThirdSlides(swiperInstance) {
	// 	swiperInstance.slides.forEach(slide => {
	// 		const index = parseInt(slide.getAttribute('data-swiper-slide-index'));
	// 		const isThird = (index) % 3 === 0;
	// 		const isActive = slide.classList.contains('swiper-slide-active');

	// 		if (isThird && !isActive) {
	// 			slide.style.filter = 'blur(3px)';
	// 		} else {
	// 			slide.style.filter = 'none';
	// 		}
	// 	});
	// }

	////////////////////////////////////////////////////
	// 16. Testimonial carousel Js l2
	// const testimonialCarrouselL2 = new Swiper(".testimonials-carrousel-l2", {
	// 	loop: true,
	// 	slidesPerView: "auto",
	// 	spaceBetween: 24,
	// 	slidesPerGroup: 1,
	// 	speed: 800,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	},
	// 	navigation: {
	// 		nextEl: '.testimonials-l2 .custom-swiper-button-next',
	// 		prevEl: '.testimonials-l2 .custom-swiper-button-prev',
	// 	},
	// 	autoplay: {
	// 		delay: 4000,
	// 		disableOnInteraction: false,
	// 	},
	// 	breakpoints: {
	// 		300: { slidesPerView: 1 },
	// 		768: { slidesPerView: 2 },
	// 		1051: { slidesPerView: 3 }
	// 	}
	// });


	////////////////////////////////////////////////////
	// 17. Video Popup Js
	// let baseVideoURL = '';

	// $('.video-trigger').on('click', function (e) {
	// 	e.preventDefault();

	// 	baseVideoURL = $(this).data('video');
	// 	$('#video').attr('src', baseVideoURL + "?autoplay=1");
	// 	$('#lightbox').fadeIn(300);
	// });

	// $('#close-btn').on('click', function () {
	// 	$('#lightbox').fadeOut(300);
	// 	$('#video').attr('src', '');
	// });
	// $(document).on('keydown', function (e) {
	// 	if (e.key === "Escape") {
	// 		$('#lightbox').fadeOut(300);
	// 		$('#video').attr('src', '');
	// 	}
	// });



	////////////////////////////////////////////////////
	// 18. Form Message Js
	// $('#contactForm').submit(function (e) {
	// 	e.preventDefault();

	// 	const formData = $(this).serialize();

	// 	$.ajax({
	// 		type: 'POST',
	// 		url: 'mail.php',
	// 		data: formData,
	// 		success: function (response) {
	// 			$('#formMessage').removeClass('error').addClass('success').html(response);
	// 			$('#contactForm')[0].reset();
	// 		},
	// 		error: function () {
	// 			$('#formMessage').removeClass('success').addClass('error').html('Something went wrong. Please try again.');
	// 		}
	// 	});
	// });

	// $('.question-answer').hide();

	// $('.expand-icon').on('click', function () {
	// 	$(this).next('.question-answer').show();
	// });

	// find items in a array 
	// add and remove classlist of array items

	// const expandIcons = $('.expand-icon');
	// const questionAnswers = $('p.question-answer');
	// const questionCount = expandIcons.length;
	// console.log(expandIcons)
	// console.log(questionAnswers)
	// questionAnswers.addClass('expand-answer');

	// expandIcons.map((expandIcon, questionCount) => {
	// 	expandIcon.on('mouseenter', function () {
	// 		questionAnswers.eq(questionCount).toggleClass('expand-answer');
	// 	});
	// })

	// expandIcons[0].on('click', () => {
	// 	questionAnswers[0].addClass('expand-answer');
	// });

	// console.log(expandIcons[0]);

	// expandIcons[0].click(() => {
	// 	console.log('Clicked.');
	// })

	// expandIcons[0].click(() => {
	// 	console.log('clicked');
	// 	questionAnswers[0].addClass('expand-answer');
	// });

	const allIcons = document.querySelectorAll('.expand-icon');
	// console.log(allIcons[0]);
	const allIconsCount = allIcons.length;

	const allQuestionAnswers = document.querySelectorAll('p.question-answer');

	// allIcons[0].addEventListener('click', () => {
	// 	console.log('Clicked.');
	// 	allQuestionAnswers[0].classList.toggle('expand-answer');
	// });

	allIcons.forEach((icon, allIconsCount) => {
		// console.log('forEach-working')
		icon.addEventListener('click', () => {
			allQuestionAnswers.forEach(answer => {
				answer.classList.remove('expand-answer')
				// console.log('Removed class from all answers.');
				// console.log(answer);
			});
			// console.log(`Clicked icon ${allIconsCount + 1}.`);
			allQuestionAnswers[allIconsCount].classList.toggle('expand-answer');
		});
	});

})(jQuery);
