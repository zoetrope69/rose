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

	$('body').css('padding-top', headerHeight);
	$('.small-nav').css('margin-top', headerHeight);
}

function sectionResize(){
	var headerHeight = $('header').outerHeight();

	var sectionHeight = $(window).height() - headerHeight;
	$('.home section').css('height', sectionHeight);
}