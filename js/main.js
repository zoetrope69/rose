(function(){

	consoleSleuths();

	elementResize();

	$(window).resize(function(){
		elementResize();
	});

	anchorPageScrolling();

	logoInit();

})()

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(typeof console !== 'undefined'){
		console.log("Hey, if you find anything broken, please go post an issue: " +
					"http://github.com/rosedigital/website/issues :¬)");
	}
}
