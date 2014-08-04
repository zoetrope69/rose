$(document).ready(function(){

	initMenuButton();

	sectionResize();

	$(window).on('debouncedresize', function(){
		sectionResize();
	});

	readingTime();
	
	consoleSleuths();
	
});

function projectPlannerForm(){

	if($('.project-planner')){

		$('.project-planner__input').blur(function(e){
			console.log("test");
			$(this).addClass('project-planner__input--dirty');
		});

		// $('.project-planner__submit').click(function(e){ e.preventDefault(); });

	}

}

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
