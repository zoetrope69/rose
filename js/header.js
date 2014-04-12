// replaces the logo with the spinny petals version
function logoInit(){
	if(Modernizr.fontface && Modernizr.csstransforms && Modernizr.borderradius){
		$('.logo').removeClass().addClass('logo'); // remove backup img classes
		$('.logo a').html('R<ul class="petals"><li></li><li></li><li></li></ul>SE'); // add in spinny petals wow
	}
}

// adds padding to the top of the page to account for the header
// and makes the section height snug
function elementResize(){
	var headerHeight = $('header').outerHeight();

	var sectionHeight = $(window).height() - headerHeight;
	$('.home section#intro').css('height', sectionHeight);

	$('body').css('padding-top', headerHeight);
	$('.small-nav').css('padding-top', headerHeight);
}

// so anchor links do a smooth scroll
function anchorPageScrolling(){
	$('.move-link').click(function(){ scrollPage(this); });
}

function scrollPage(clicked){
		// Speed of the animation in ms
		var animationSpeed = 500;

		var host = window.location.protocol + "//" + window.location.host;
		var url = host + window.location.pathname; // Get current URL

		var id = String(clicked).substr(url.length); // Take the URL and leave the # part

		var postPosition = $(id).position().top; // Finds the position from the top of the window for the heading with the ID 'hrefValue'
	
		// Moves to the top of the post in 'animationSpeed'ms
		$('body').animate({ scrollTop: postPosition }, animationSpeed);
		
		event.preventDefault(); // Stops the link's normal behaviour
}

function capsString(string){
	return string.substring(0, 1).toUpperCase()+string.substring(1);
}