$(document).ready(function() {
	let owl7 = $('#owl7');
	$(window).resize(function() {
		if ($(window).width() <= 575) {
			document.getElementById('owl7').classList.add('owl-carousel');

			owl7.owlCarousel({
				items: 4,
				touchDrag: true,
				margin: 0,
				autoWidth: true
			});
		} else {
			document.getElementById('owl7').classList.remove('owl-carousel');		
		}

		if (($(window).width() >= 576) && ($(window).width() <= 576)) {
			location.reload();
		}
	});	

	if ($(window).width() <= 575) {
		document.getElementById('owl7').classList.add('owl-carousel');
		owl7.owlCarousel({
			items: 4,
			touchDrag: true,
			margin: 0,
			autoWidth: true
		});
	} else {
		document.getElementById('owl7').classList.remove('owl-carousel');
	}

	let owl1 = $('#owl1');
	owl1.owlCarousel({
		loop: "true",
		responsive: {
			0: {
				items: 1,
				touchDrag: "true",
				margin: 10,
				// center: "true",
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
				autoWidth: "true",
				// mergeFit: "false"			
			},

			1200: {
				items: 4,
				margin: 30,
				mergeFit: "false"				
			}
		}
	});

	/*$(window).resize(function() {
		if (($(window).width() < 1200) && ($(window).width() >= 992)) {
			let dada = document.getElementById('owl1').querySelector('.owl-stage');
			let dadad = dada.style.width = '1390px';
		}
	});	*/

	$('#ps1').click(function () {
		owl1.trigger('prev.owl');
	});

	$('#ns1').click(function () {
		owl1.trigger('next.owl');
	});

	let owl2 = $('#owl2');
	owl2.owlCarousel({
		loop: "true",
		responsive: {
			0: {
				items: 1,
				touchDrag: "true",
				margin: 10,
				// center: "true",
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
				autoWidth: "true",
				// mergeFit: "false"			
			},

			1200: {
				items: 4,
				margin: 30,
				mergeFit: "false"				
			}
		}
	});

	$('#ps2').click(function () {
		owl2.trigger('prev.owl');
	});

	$('#ns2').click(function () {
		owl2.trigger('next.owl');
	});

	let owl3 = $('#owl3');
	owl3.owlCarousel({
		loop: "true",
		responsive: {
			0: {
				items: 1,
				touchDrag: "true",
				margin: 10,
				// center: "true",
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
				autoWidth: "true",
				// mergeFit: "false"			
			},

			1200: {
				items: 4,
				margin: 30,
				mergeFit: "false"				
			}
		}
	});

	$('#ps3').click(function () {
		owl3.trigger('prev.owl');
	});

	$('#ns3').click(function () {
		owl3.trigger('next.owl');
	});

	let owl4 = $('#owl4');
	owl4.owlCarousel({
		loop: "true",
		responsive: {
			0: {
				items: 1,
				touchDrag: "true",
				margin: 10,
				// center: "true",
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
				autoWidth: "true",
				// mergeFit: "false"			
			},

			1200: {
				items: 4,
				margin: 30,
				mergeFit: "false"				
			}
		}
	});

	$('#ps4').click(function () {
		owl4.trigger('prev.owl');
	});

	$('#ns4').click(function () {
		owl4.trigger('next.owl');
	});

	let owl8 = $('#owl8');
	if ($(window).width() <= 575) {
		document.getElementById('owl8').classList.add('owl-carousel');
		owl8.owlCarousel({
			items: 4,
			touchDrag: "true",
			margin: 0,
			autoWidth: "true",
		});
	} else {
		document.getElementById('owl8').classList.remove('owl-carousel');
	}

	let owl5 = $('#owl5');
	owl5.owlCarousel({
		loop: "true",
		responsive: {
			0: {
				items: 1,
				touchDrag: "true",
				margin: 10,
				// center: "true",
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
				autoWidth: "true",
				// mergeFit: "false"			
			},

			1200: {
				items: 4,
				margin: 30,
				mergeFit: "false"				
			}
		}
	});

	$('#ps5').click(function () {
		owl5.trigger('prev.owl');
	});

	$('#ns5').click(function () {
		owl5.trigger('next.owl');
	});

	let owl6 = $('#owl6');
	owl6.owlCarousel({
		loop: "true",
		responsive: {
			0: {
				items: 1,
				touchDrag: "true",
				margin: 10,
				// center: "true",
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
				autoWidth: "true",
				// mergeFit: "false"			
			},

			1200: {
				items: 4,
				margin: 30,
				mergeFit: "false"				
			}
		}
	});

	$('#ps6').click(function () {
		owl6.trigger('prev.owl');
	});

	$('#ns6').click(function () {
		owl6.trigger('next.owl');
	});
});