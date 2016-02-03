"use strict";

$(document).ready(function(){

	initMenuButton();

	readingTime();

	consoleSleuths();

	mapInit();

});

function mapInit(){
	// if the map is on the page
	if (typeof L !== 'undefined' && $('#map')) {

		var roseOfficeGeo = [50.794315619385124, -1.0954651236534119];

		var map = L.map('map').setView(roseOfficeGeo, 12);

		// stop the map from interrupting scrolling of the page
		map.scrollWheelZoom.disable();

		L.tileLayer('http://{s}.tiles.mapbox.com/v3/zaccolley.jaccno9i/{z}/{x}/{y}.png', {
			maxZoom: 18
		}).addTo(map);

		var roseIcon = L.icon({
			iconUrl: '/img/map-marker.png',

			iconSize:     [48, 48], // size of the icon
			iconAnchor:   [24, 24], // point of the icon which will correspond to marker's location
			popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
		});

		L.marker(roseOfficeGeo, { icon: roseIcon }).addTo(map).bindPopup("<a href='https://goo.gl/maps/4udjl'>Get directions here.</a>");

	}
}

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(typeof console === "object"){
		console.log("Hey, if you find anything broken, please go post an issue: " +
					"http://github.com/rosedigital/website/issues :¬)");
	}
}

// calculate the reading time of a post
function readingTime(){
	// if on the blog page
	if($('.blog').length){

		var wordCount = $('.blog .post').text().split(" ").length,
			wordsPerMinute = 250, // according to http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension
			time = Math.ceil(wordCount / wordsPerMinute);

		if(time > 0){
			$('.blog .top .meta').after('<small>~ '+ time +' min read</small>');
		}

	}
}
