let size = document.querySelector('.prod-sizes'),
	sizeItem = document.querySelectorAll('.size__button');

size.onclick = function (e) {
	let target = e.target;
	if (target.classList.contains('size__button')) {
		removeClassSize(sizeItem, 'size-active')
		target.classList.add('size-active');
	}
};

function removeClassSize(arr) {
	for(let i = 0, iLen = arr.length; i < iLen; i++) {
		for(let j = 1; j < arguments.length; j++) {
			sizeItem[i].classList.remove(arguments[j]);
		}
	}
};