$(document).ready(function(){

	initMenuButton();

	projectPlannerForm();

	readingTime();
	
	consoleSleuths();

	mapInit();
	
});

function mapInit(){
	// if the map is on the page
	if($('#map')){

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

		var marker = L.marker(roseOfficeGeo, { icon: roseIcon }).addTo(map).bindPopup("<a href='https://goo.gl/maps/4udjl'>Get directions here.</a>");

	}
}

function projectPlannerForm(){

	if($('.project-planner')){

		$('.project-planner-link').click(function(e){
			$('.project-planner input[name="name"]').focus();

			// stop default link behaviour
			e.preventDefault();
		});

		$('.project-planner__input').blur(function(e){
			$(this).addClass('project-planner__input--dirty');
		});

		// $('.project-planner__submit').click(function(e){ e.preventDefault(); });

	}

}

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(this.console){
		console.log("Hey, if you find anything broken, please go post an issue: " +
					"http://github.com/rosedigital/website/issues :¬)");
	}
}

// calculate the reading time of a post
function readingTime(){
	// if on the blog page
	if($('.blog').length){

		var wordsPerMinute = 250; // according to http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension
		var wordCount = $('.blog .post').text().split(" ").length;

		var readingTime = Math.ceil(wordCount / wordsPerMinute);

		$('.blog .top .meta').after('<small>~ '+ readingTime +' min read</small>');
	}
}
