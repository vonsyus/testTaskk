let mobileSlider = document.getElementById('fotoramaMobile');
let count = mobileSlider.childElementCount;

let desktopSliser = document.getElementById('fotoramaDesktop');
let desktopCount = desktopSliser.childElementCount;

let prevArrow = document.getElementById('thumbPrev');
let nextArrow = document.getElementById('thumbNext');

$(document).ready(function() {
	$(function () {
		var $fotoramaDiv = $('#fotoramaMobile').fotorama({
			nav: 'false',
			loop: 'true'
		}).on('fotorama:ready', function (e, fotorama, extra) {
        	mobileSlider.addEventListener("touchend", nextSlide);
        	mobileSlider.addEventListener("click", nextSlide);

        	let current = fotorama.activeIndex + 1;
        	$('#current-slide').html(current + " / " + count);

			function nextSlide() {
				let current = fotorama.activeIndex + 1;
				$('#current-slide').html(current + " / " + count);
			}
        });
	});

	$(function () {
		var $fotoramaDiv = $('#fotoramaDesktop').fotorama({
			nav: 'thumbs',
			thumbwidth: 96,
			thumbheight: 96,
			loop: 'true',
			thumbborderwidth: 1,
			thumbmargin: 16
		}).on('fotorama:ready', function (e, fotorama, extra) {
        	if (desktopCount < 5) {
        		prevArrow.classList.add('invisible');
        		nextArrow.classList.add('invisible');        		
        	} else {
        		prevArrow.addEventListener("click", thumbPrev);
        		nextArrow.addEventListener("click", thumbNext);

        		function thumbPrev () {
        			fotorama.show('<');
        		}

        		function thumbNext () {
        			fotorama.show('>');
        		}
        	}
		});
	});

	mobileSlider.classList.remove('invisible');
});