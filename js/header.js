
function fadeInLogo(){

	$('.logo').html('R<ul class="petals"><li></li><li></li><li></li></ul>SE');

}

function bodyPadding(){
	var headerHeight = $('header').outerHeight();

	var sectionHeight = $(window).outerHeight() - headerHeight - 15;
	$('main section').css('height', sectionHeight);

	$('body').css('padding-top', headerHeight);
}