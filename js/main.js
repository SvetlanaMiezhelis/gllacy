function initMap() {

	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 16,
		center: {lat: 59.938809, lng: 30.332294}
	});
	var marker = new google.maps.Marker({
		position: {lat: 59.938556, lng: 30.322941},
		map: map,

		icon: "img/pin.svg"
	});

}

google.maps.event.addDomListener(window, "load", initMap);



var link = document.querySelector(".feedback-form-open");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=email]");
var overlay = document.querySelector(".feedback-form-overlay");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	popup.querySelector("[name=feedback-name]").focus();
	overlay.classList.add("overlay-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
	if (!popup.querySelector("[name=feedback-name]").value || !popup.querySelector("[name=email]").value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});


