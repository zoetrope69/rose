function sectionResize(){
	var headerHeight = $('header').outerHeight();

	var sectionHeight = $(window).height() - headerHeight;
	$('.home section').css('height', sectionHeight);
}