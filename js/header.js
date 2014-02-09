function logoInit(){
	$('.logo').html('R<ul class="petals"><li></li><li></li><li></li></ul>SE');
}

function bodyPadding(){
	var headerHeight = $('header').outerHeight();

	var sectionHeight = $(window).height() - headerHeight;
	$('main section').css('height', sectionHeight);

	$('body').css('padding-top', headerHeight);
}

function anchorPageScrolling(){
	$('.move-button').click(function(){ scrollPage(this); });
	$('nav li a').click(function(){ scrollPage(this); });
	$('.logo').click(function(){ scrollPage(this); });
}

function scrollPage(clicked){
		var animationSpeed = 1000					// Speed of the animation in ms

		var url = window.location.protocol + "//" + window.location.host + window.location.pathname; // Get current URL
		var id = String(clicked).substr(url.length); // Take the URL and leave the # part
		var postPosition = $(id).position().top;	// Finds the position from the top of the window for the heading with the ID 'hrefValue'
		var headerHeight = $('header').outerHeight();

		var scrollAmount = postPosition - headerHeight;  // How far scrolled down minus the height of the header
		
		$('html, body').animate({scrollTop: scrollAmount}, animationSpeed); // Moves to the top of the post in 'animationSpeed'ms
		
		event.preventDefault(); // Stops the link's normal behaviour
}
