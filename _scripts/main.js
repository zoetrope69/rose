"use strict";

$(document).ready(function(){
	readingTime();

	consoleSleuths();
});

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(typeof console === "object"){
		console.log("Hey, if you find anything broken, please go post an issue: " +
					"http://github.com/rosedigital/website/issues :¬)");
	}
}

// calculate the reading time of a post
function readingTime(){
	// if on the blog page
	if($('.blog').length){

		var wordCount = $('.blog .post').text().split(" ").length,
			wordsPerMinute = 250, // according to http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension
			time = Math.ceil(wordCount / wordsPerMinute);

		if(time > 0){
			$('.blog .top .meta').after('<small>~ '+ time +' min read</small>');
		}

	}
}
