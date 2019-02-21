
$(document).ready(function() { 
	// $(".tabs__menu li").click(function() { 
	// 	if (!$(this).hasClass("active")) { 
	// 		var i = $(this).index(); 
	// 		$(".tabs__menu li.active").removeClass("active"); 
	// 		$(".tabs__content .active").hide().removeClass("active"); 
	// 		$(this).addClass("active"); 
	// 		$($(".tabs__content").children(".info")[i]).fadeIn(1000).addClass("active"); 
	// 	}
	// });



	$('.responsive__slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
	});

	// var clickDelay      = 500,
    // clickDelayTimer = null;

	// $('.burger-click-region').on('click', function () {
	
	// if(clickDelayTimer === null) {
	
	// 	var $burger = $(this);
	// 	$burger.toggleClass('active');
	// 	$burger.parent().toggleClass('is-open');

	// 	if(!$burger.hasClass('active')) {
	// 	$burger.addClass('closing');
	// 	}

	// 	clickDelayTimer = setTimeout(function () {
	// 	$burger.removeClass('closing');
	// 	clearTimeout(clickDelayTimer);
	// 	clickDelayTimer = null;
	// 	}, clickDelay);
	// }
	// });


	$('.burger-click-region').on('click', function () {
		$('nav').slideToggle(200);
		return 0;

	});




});