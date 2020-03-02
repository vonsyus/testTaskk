let owlCarouselGoods = $('.goods-carousel');
let windowWidth = $(window).width();
let owlCarouselNav = $('.owl-nav');

$(window).ready(function() {
	if (windowWidth <= 575) {
		owlCarouselNav.addClass('owl-carousel');
		owlCarouselNav.owlCarousel({
			items: 4,
			touchDrag: true,
			margin: 0,
			autoWidth: true
		});
	}
});

$(window).resize(function() {
	if (windowWidth <= 575) {
		owlCarouselNav.addClass('owl-carousel');
		owlCarouselNav.trigger('destroy.owl.carousel');
		owlCarouselNav.owlCarousel({
			items: 4,
			touchDrag: true,
			margin: 0,
			autoWidth: true
		});
	} else {
		owlCarouselNav.addClass('owl-carousel');
		owlCarouselNav.trigger('destroy.owl.carousel');
		owlCarouselNav.owlCarousel({
			items: 4,
			touchDrag: false,
			mouseDrag: false,
			margin: 0,
			autoWidth: true
		});
	}
});

owlCarouselGoods.owlCarousel({
	loop: true,
	responsive: {
		0: {
			items: 1,
			touchDrag: "true",
			margin: 10,
			autoWidth: "true",
			pullDrag: "true"			
		},

		577: {
			items: 4,
			autoWidth: "true",
			margin: 20
		},

		992: {
			items: 4,
			margin: 30,
			autoWidth: "true"	
		},

		1200: {
			items: 4,
			margin: 30,
			mergeFit: "false"				
		}
	}
});

let owl1 = $('#owl1');
$('#ps1').click(function () {
	owl1.trigger('prev.owl');
});
$('#ns1').click(function () {
	owl1.trigger('next.owl');
});

let owl2 = $('#owl2');
$('#ps2').click(function () {
	owl2.trigger('prev.owl');
});
$('#ns2').click(function () {
	owl2.trigger('next.owl');
});

let owl3 = $('#owl3');
$('#ps3').click(function () {
	owl3.trigger('prev.owl');
});
$('#ns3').click(function () {
	owl3.trigger('next.owl');
});

let owl4 = $('#owl4');
$('#ps4').click(function () {
	owl4.trigger('prev.owl');
});
$('#ns4').click(function () {
	owl4.trigger('next.owl');
});

let owl5 = $('#owl5');
$('#ps5').click(function () {
	owl5.trigger('prev.owl');
});
$('#ns5').click(function () {
	owl5.trigger('next.owl');
});

let owl6 = $('#owl6');
$('#ps6').click(function () {
	owl6.trigger('prev.owl');
});
$('#ns6').click(function () {
	owl6.trigger('next.owl');
});