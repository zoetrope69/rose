---
layout: post
title:  "Random shit test file"
date:   2014-04-02 23:31:09
author: zac
categories: blog
---

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

Lorem _emphasis_ dolor sit amet, **strong** adipisicing elit. Accusamus, aspernatur, nisi possimus dignissimos mollitia commodi facilis vitae nostrum voluptatibus nulla distinctio beatae nihil rem? Illo facere dolor vitae quibusdam nesciunt.

## header with <small>small text</small>

Lorem ipsum dolor <small>this is small text</small>. Accusamus, aspernatur, <mark>this is marked text</mark>nisi possimus dignissimos mollitia commodi facilis vitae nostrum voluptatibus nulla distinctio beatae nihil rem? Illo facere dolor vitae quibusdam nesciunt.

+ Unordered list item 1
+ Unordered list item 2
    + Nested unordered list item 3
    + Nested unordered list item 4
    + Nested unordered list item 3
+ Unordered list item 4
+ Unordered list item 5
    1. Ordered list sub-sub item 1
    2. Ordered list sub-sub item 2
+ Unordered list item 6

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aspernatur, nisi possimus dignissimos mollitia commodi facilis vitae nostrum voluptatibus nulla distinctio beatae nihil rem? Illo facere dolor vitae quibusdam nesciunt.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aspernatur, nisi possimus dignissimos mollitia commodi facilis <q>this in an inline quote <cite>john smith</cite></q> vitae nostrum voluptatibus nulla distinctio beatae nihil rem? Illo facere dolor vitae quibusdam nesciunt.

1. Ordered list item 1
    1. Ordered list sub item 1
        1. Ordered list sub-sub item 1
        2. Ordered list sub-sub item 2
        3. Ordered list sub-sub item 3
    2. Ordered list sub item 2
2. Ordered list item 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ipsum, laboriosam maiores totam eaque beatae repellat. Molestiae, vero, amet, aliquam explicabo rem sit quis impedit facere reiciendis quaerat enim autem.

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> <cite>[Bruce Lawson](http://www.brucelawson.co.uk/2013/on-citing-quotations-again/)</cite>

* * *

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

* * *

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

![wot](http://lorempixel.com/500/500)

![wot](http://fillmurray.com/1000/200)

![wot](http://placekitten.com/100/500)

{% highlight html %}
---
layout: default
title: ROSE Digital
---

<main class="home">

<section id="intro">

    <h1>What are you growing on the web?</h1>
    <div class="text">

        <p>ROSE Digital are a future-thinking partnership offering website design, development and graphic design.</p>
    
    </div>
    
    <a class="move-link" href="#work">What can we offer?</a>

</section><!-- end of intro section -->

<section id="work">

    <h1>We offer</h1>

    <div class="text">

        <p>Our clients get future-proof, beautiful and human usable websites. We also specialise in graphic design.</p>

        <p>See what we did for <a href="http://thegamingsociety.co.uk">the University of Portsmouth's Gaming Society</a> or our <a href="{{ root_url }}/work"> portfolio of work</a>.</p>

    </div>

    <a class="move-link" href="#about">Who are we?</a>

</section><!-- end of work section -->

<section id="about">

    <h1>We're Peter &amp; Zac</h1>

    <div class="text">

        <p>ROSE is a Portsmouth based partnership. We strive for the best experience for the users of our products.</p>

        <p>We stick to modern web standards and care about making products that humans can use but also are super fast and efficient on machines too. We make things we're truly proud of.</p>

        <p><a href="{{ root_url }}/about">Learn more about us&hellip;</a></p>

    </div>

    <a class="move-link" href="#contact">Want to contact us?</a>

</section><!-- end of about section -->

<section id="contact">

    <h1>Let's chat</h1>

    <div class="text">

        <p>You can email us at <a href="mailto:hello@rosedigital.co.uk">hello@rosedigital.co.uk</a> or <a href="#">tell us about your project</a>.</p>

        <p>Also, you can <a href="http://twitter.com/rosedgtl">follow us on Twitter</a> to keep an eye on what we're doing.</p>

        <p>P &amp; Z :¬)</p>
        <p class="logo-sig logo-white-svg">ROSE Digital</p>
    </div>
    
    {% assign post = site.posts.first %}
    {% include latest-post.html %}
    
</section><!-- end of contact section -->

</main>

{% endhighlight %}

{% highlight javascript %}

// replaces the logo with the spinny petals version
function logoInit(){
    $('.logo').removeClass().addClass('logo'); // remove backup img classes
    $('.logo a').html('R<ul class="petals"><li></li><li></li><li></li></ul>SE'); // add in spinny petals wow
}

// adds padding to the top of the page to account for the header
// and makes the section height snug
function elementResize(){
    var headerHeight = $('header').outerHeight();

    var sectionHeight = $(window).height() - headerHeight;
    $('.home section').css('height', sectionHeight);

    $('body').css('padding-top', headerHeight);
}

// so anchor links do a smooth scroll
function anchorPageScrolling(){
    $('.move-link').click(function(){ scrollPage(this) });
}

function scrollPage(clicked){
    console.log('scrollPage');
        // Speed of the animation in ms
        var animationSpeed = 500

        var host = window.location.protocol + "//" + window.location.host;
        var url = host + window.location.pathname; // Get current URL

        var id = String(clicked).substr(url.length); // Take the URL and leave the # part

        var postPosition = $(id).position().top; // Finds the position from the top of the window for the heading with the ID 'hrefValue'
        
        var headerHeight = $('header').outerHeight();
        
        // How far scrolled down minus the height of the header
        var scrollAmount = postPosition - headerHeight;
        // Moves to the top of the post in 'animationSpeed'ms
        $('body').animate({ scrollTop: scrollAmount }, animationSpeed);
        
        event.preventDefault(); // Stops the link's normal behaviour
}

function capsString(string){
    return string.substring(0, 1).toUpperCase()+string.substring(1);
}

{% endhighlight %}

{% highlight scss %}

/* _home.scss */

.home section{
    overflow: hidden;
    position: relative;
    height: 100vh;
    padding: 5em 1.5em;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}

.home section:nth-child(2n){
    text-align: right;
}

.home section:nth-child(3n+1){
    color: $roseWhite;
    background-color: $roseRed;
}

.home section:nth-child(3n+1) *::selection{
    background-color: $roseWhite;
    color: $roseRed;
}

.home section:nth-child(3n+2){
    color: $roseWhite;
    background-color: $roseBlack;
}

.home section:nth-child(3n+2) *::selection{
    background-color: $roseWhite;
    color: $roseBlack;
}

.home section:nth-child(3n+3){
    color: $roseBlack;
    background-color: $roseWhite;
}

.home section:nth-child(3n+3) *::selection{
    background-color: $roseBlack;
    color: $roseWhite;
}

.home section#intro{
    background-image: url('../../img/poly-rose.png');
    background-repeat: no-repeat;
    background-position: 125% 500%;

    animation: introIn $animationSpeed;
}

@keyframes introIn{
    0%{
        background-image: none;
        background-position: 125% 0%;
    }
}

.home section > h1,
.home section > .text{
    @include animateIn(left);
    backface-visibility: hidden; // stops the animation white flash
}

.home section:nth-child(2n) > h1,
.home section:nth-child(2n) > .text{
    @include animateIn(right);
}

.home section:nth-child(2n) > h1{
    text-align: right;
}

.home section > h1{
    margin-bottom: .5em;

    font-weight: 300;
    font-size: 7em;
    font-style: italic;
    font-family: 'Crete Round', Georgia, serif;

    letter-spacing: -.025em;
}

.home section > h2{
    margin-bottom: .25em;

    font-size: 2.25em;
    font-weight: 600;
    
    text-transform: uppercase;
}

.home section > .text{
    width: (100% * 2/3);
    font-size: 1.5em;
}

.home section > .text p{
    font-weight: 300;
    line-height: 1.35;
    margin-bottom: .75em;
}

.home section  > .text p strike{
    position: relative;
    text-decoration: none;
}

.home section  > .text p strike:after{
    position: absolute;
    left: -5%; top: 50%;
    width: 110%;
    content: '';

    border-bottom: 2px solid $roseWhite;
    transform: rotate(-2.5deg);
}

.home section .logo-sig{
    text-align: left;
    display: inline-block;
    width: 100%;
    height: 2em;

    text-indent: -9999px;
    
    background-repeat: no-repeat;
    background-position: center right;
    background-size: auto 100%;
}

.home section:nth-child(odd)  .text{ float: left; }
.home section:nth-child(even) .text{ float: right; }

.home section > .text a{
    font: inherit;
    font-weight: 400;
    
    border-bottom: 1px solid;
    color: inherit;
    
    text-decoration: none;
    transition: border-color .15s;
}

.home section > .text a:hover{
    border-color: transparent;
}

.home section > .move-link{
    position: absolute;
    display: block;
    bottom: 15%;
    padding: .25em;

    font-family: "Crete Round", Georgia, serif;
    font-size: 2em;
    font-weight: 400;
    color: inherit;
    text-decoration: none;

    border-bottom: 2px solid;

    @include animateIn(top);
    transition: border-color .15s;
}

.home section > .move-link:hover{
    border-color: transparent;
}

.home section:nth-child(odd)  > .move-link{ right: 5%; }
.home section:nth-child(even) > .move-link{ left: 5%; }

.home #blog{
    position: absolute;
    right: 0; bottom: 0; left: 0;
    background: $roseBlack;
}

.home #blog a{
    display: block;
    padding: 1em;
    border: none;
}

.home #blog a:hover{ opacity: .8; }

.home #blog h1{
    width: 100%;
    display: inline-block;
    
    font-size: 1.75em;
    font-weight: 300;
    color: $roseWhite;
    text-align: center
}

.home #blog q{
    font-family: $serif;
}

.home #blog q:before,
.home #blog q:after{
    vertical-align: -0.25em;
    margin: 0 2px;
    
    font-size: 2em;
    color: darken($roseWhite, 70%);
}

.home #blog q { quotes: "“" "”" "‘" "’"; }
.home #blog q:before { content: open-quote; }
.home #blog q:after{ content: close-quote; }

@media screen and (max-width: $breakPointLarge){

    .home section > h1{
        font-size: 5.5em;
    }

    .home section > .text{
        width: (100% * 3/4);
        font-size: 1em;
    }

    .home section#intro{
        background-position: -125% -500%;
    }

    .home #blog{
        font-size: .85em;
    }

    .home #blog h1 q{
        margin-top: .5em;
        display: block;
        line-height: 1.1em;

        font-size: .9em;
    }

}

@media screen and (max-width: $breakPointMedium){
    
    .home section{
        padding: 3em .75em;
    }

    .home section > h1{
        font-size: 4.5em;
    }

    .home section > .text{
        width: (100% * 3/4);
        font-size: .85em;
    }

    .home section > .text p{
        font-size: 1em;
        line-height: 1.25;
    }

    .home section > .move-link{
        font-size: 1.5em; 
        bottom: 5%;
    }

}

@media screen and (max-width: $breakPointSmall){

    .home section#intro{
        background-position: 50% -100%;
    }

    .home section > h1,
    .home section:nth-child(2n) > h1{
        text-align: center;
        font-size: 2.25em;
    }

    .home section > h2{
        text-align: center;
        font-size: 1.85em;
    }

    .home section > .text{
        width: 100%;
        float: none;
        font-size: .85em;
    }

    .home section > .text p{
        text-align: center;
    }

    .home section > .logo-sig{
        background-position: center;
    }

    .home section > .move-link{
        bottom: 5%; right: 5%; left: 5%;

        font-size: 1.25em; 
        text-align: center;
    }

}

{% endhighlight %}

* * *
