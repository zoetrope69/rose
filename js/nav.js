function initMenuButton(){

	$('header .menu-link').click(function(){
		
		if($('header .menu-link a').text() == 'Menu'){
			$('header .menu-link a').text('Close');
		}else{
			$('header .menu-link a').text('Menu');
		}

		$('.small-nav').toggleClass('small-nav--hidden');

	});

	$('header').after("<div class='small-nav small-nav--hidden'>"+$('footer nav').html()+"</div>");

}