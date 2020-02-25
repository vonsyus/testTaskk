let colors = document.querySelector('.prod__colors'),
	colorsItem = document.querySelectorAll('.product__color');

colors.onclick = function (e) {
	let target = e.target;
	if (target.classList.contains('product__color__inner')) {
		removeClassColor(colorsItem, 'color-active')
		target.parentNode.classList.add('color-active');
	}
};

function removeClassColor(arr) {
	for(let i = 0, iLen = arr.length; i < iLen; i++) {
		for(let j = 1; j < arguments.length; j++) {
			colorsItem[i].classList.remove(arguments[j]);
		}
	}
};