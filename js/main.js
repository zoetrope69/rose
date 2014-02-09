(function(){

	consoleSleuths();

	bodyPadding();

	anchorPageScrolling();

	logoInit();

})()

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(typeof console !== 'undefined'){
		console.log("Maybe you'll be interested in our tech posts? http://rosedigital.co.uk/blog#tech\n\n" +
					"Oh and if you find anything broken, please go post an issue:" +
					" http://github.com/rosedigital/website/issues :¬)");
	}
}
