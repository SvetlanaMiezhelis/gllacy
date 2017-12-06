function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: {lat: 59.938809, lng: 30.332294}
	});
	var marker = new google.maps.Marker({
		position: {lat: 59.938809, lng: 30.323342},
		map: map,

		icon: "img/pin.svg"
	});

}

google.maps.event.addDomListener(window, "load", initMap);


