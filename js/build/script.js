// replaces the logo with the spinny petals version
function logoInit(){
	$('.logo').removeClass().addClass('logo'); // remove backup img classes
	$('.logo a').html('R<ul class="petals"><li></li><li></li><li></li></ul>SE'); // add in spinny petals wow
}

// adds padding to the top of the page to account for the header
// and makes the section height snug
function elementResize(){
	var headerHeight = $('header').outerHeight();

	var sectionHeight = $(window).height() - headerHeight;
	$('main section').css('height', sectionHeight);

	$('body').css('padding-top', headerHeight);
}

// so anchor links do a smooth scroll
function anchorPageScrolling(){
	$('.move-link').click(function(){ scrollPage(this) }); 
	$('nav li a').click(function(){ scrollPage(this) }); 
	$('.logo a').click(function(){ scrollPage(this) }); 
}

function scrollPage(clicked){
	console.log('scrollPage');
		// Speed of the animation in ms
		var animationSpeed = 500

		var host = window.location.protocol + "//" + window.location.host;
		var url = host + window.location.pathname; // Get current URL

		var id = String(clicked).substr(url.length); // Take the URL and leave the # part
		var strippedId = id.substr(1);

		var title = capsString(strippedId)+" ✿ ROSE Digital";
		
		// if clicking the logo
		if(id.toLowerCase() == "#intro"){
			title = "ROSE Digital";
		}
		
		document.title = title;

		var postPosition = $(id).position().top; // Finds the position from the top of the window for the heading with the ID 'hrefValue'
		
		var headerHeight = $('header').outerHeight();
		
		// How far scrolled down minus the height of the header
		var scrollAmount = postPosition - headerHeight;
		// Moves to the top of the post in 'animationSpeed'ms
		$('html').animate({ scrollTop: scrollAmount }, animationSpeed);
		
		event.preventDefault(); // Stops the link's normal behaviour
}

function capsString(string){
	return string.substring(0, 1).toUpperCase()+string.substring(1);
}
$(document).ready(loaded());

function loaded(){
	consoleSleuths();

	logoInit();

	elementResize();

	$(window).resize(function(){
		elementResize();
	});

	anchorPageScrolling();
}

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(typeof console !== 'undefined'){
		console.log("Hey, if you find anything broken, please go post an issue: " +
					"http://github.com/rosedigital/website/issues :¬)");
	}
}
