let dropdown = document.getElementById('dropdown');

$(dropdown).on("click", function (e) {
	let target = e.target;	
	if ((!target.classList.contains('dropdown-menu')) && (!target.classList.contains('dropdown'))) {
		let target = e.target.textContent;
		$(dropdownMenuLink).html(target);
	}
});