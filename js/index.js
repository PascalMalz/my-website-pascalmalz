/**
 * 
 */

window.onload = function () { size_choices() };
window.onresize = function () { size_choices() };
var size_choices = function () {
	if (window.matchMedia("(min-width: 1200px)").matches) {

		var getimage_start_size = document.querySelector(".container_image").clientHeight;

		var getchoices = document.querySelector(".choices");


		getchoices.style.height = getimage_start_size.toString().concat("px");

		//	console.log(getimage_start_size)
		return getchoices.style.height;
	} else {
		var getchoices = document.querySelector(".choices");
		getchoices.style.height = "auto"
		return getchoices.style.height;
	}
};
