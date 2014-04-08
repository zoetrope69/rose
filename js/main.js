$(document).ready(function(){
	consoleSleuths();

	logoInit();

	elementResize();

	var initialWidth = $(window).width();

	$(window).on('debouncedresize', function(){
	    if($(window).width() !== initialWidth){	
			elementResize();
	    };
	});

	anchorPageScrolling();

	readingTime();

	emoji();

	$("header").headroom({
		"offset": $('header').outerHeight() / 2,
		"classes":{
		    "initial": "header",
		    "pinned": "header--pinned",
		    "unpinned": "header--unpinned",
		    "top": "header--top",
		    "notTop": "header--not-top"
		}
    });
	
});

// if anyone pokes into the console display this
function consoleSleuths(){
	// if we can console log, some browsers can't
	if(this.console){
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

		$('.blog .top .meta').after('<small>~'+ readingTime +' min read</small>');
	}
}

function emoji(){
	emojify.setConfig({ img_dir: '/img/hangouts-emoji'	});
	emojify.run($('main')[0]);
}
