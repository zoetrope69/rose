$(document).ready(loaded());

function loaded(){
	consoleSleuths();

	logoInit();

	elementResize();

	$(window).resize(function(){
		elementResize();
	});

	anchorPageScrolling();

	readingTime();
	
}

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(typeof console !== 'undefined'){
		console.log("Hey, if you find anything broken, please go post an issue: " +
					"http://github.com/rosedigital/website/issues :¬)");
	}
}

// calculate the reading time of a post
function readingTime(){
	// if on the blog page
	if($('.blog').length){

		var wordsPerMinute = 250; // according to http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension
		var wordCount = $('.blog .post').text().split(" ").length;

		var readingTime = Math.ceil(wordCount / wordsPerMinute);

		$('.blog .top').append('<small>~'+ readingTime +' min read</small>');
	}
}
