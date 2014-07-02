---
layout: post
title:  'Dynamic Logos with CSS - Blog · ROSE Digital ✏'
post_title: 'Dynamic Logos with CSS'
date:   2014-06-10 14:12:09
author: zac
categories: blog
---

When creating logos often the end product will be a static identity. [After seeing some great usage of logos with moving parts](http://www.hexanine.com/zeroside/the-future-is-fluid-inside-dynamic-logos/) I thought I'd play with the idea of making ours dynamic.

Animating part of a logo or allowing for interaction is quite an interesting idea and can be used to convey information. I wanted something that moves the abstract rose more towards an 'O' and back again.

I've seen this done with animated SVGs before but I thought doing this with CSS would be interesting. It should be noted any example CSS in this post is without browser prefixes. (I recommend using [autoprefixer](https://github.com/ai/autoprefixer).)

## Ground work

With anything in this nature you sometimes sacrifice accessibility. We'll get into how we combat that later but first we need the basic markup.

I chose to use a list of petals as so:

{% highlight html %}
R
<ul class="petals">
	<li></li>
	<li></li>
	<li></li>
</ul>
OSE
{% endhighlight %}

Each `li` is a ring (or petal) and then can be selected with CSS using `nth-child`.

## Building blocks

There's a few parts to creating the logo in CSS.

The typeface in our logo is called Quicksand, this happens to be available through [Google Fonts as a web-font](http://www.google.com/fonts#UsePlace:use/Collection:Quicksand). This is simple, we just set the size and weight of the text. We do use `user-select: none;` to stop the user from being able to select the text.

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-logo">ROSE</div>		</div>
_Here is just the logo as standard text_

### One petal

The petal itself is a square element with a border and border radius to create a perfect circle. I've animated some of the styles to make it more obvious, hover over to pause the animation.

{% highlight css %}
.petals li{
	height: 1.7rem;
	width: 1.7rem;
	line-height: .5rem;

	border: 2px solid red;
	border-radius: 50%;
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petal--1"></div>		</div>
_One section of the abstract rose_

### Positioning the petals

We're using `nth-child` here to select each petal. Then each petal is moved into position using the `translate()`. The first parameter is the X position and then second is the Y. The petals must be positioned absolutely so they overlap.

{% highlight css %}
.petals li{
	position: absolute; /* absolute position those suckers */
	height: 1.7rem;
	width: 1.7rem;
	line-height: .5rem;

	border: 2px solid red;
	border-radius: 50%;
}

.petals li:nth-child(1){
	transform: translate(.5rem, .00001rem); /* .00001 because of a IE10/11 bug */
}

.petals li:nth-child(2){
	transform: translate(0%, .25rem);
}

.petals li:nth-child(3){
	transform: translate(.5rem, .5rem);
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petals">	<div class="example-petal--2-1"></div>	<div class="example-petal--2-2"></div>	<div class="example-petal--2-3"></div>	</div>		</div>
_Now there's three, wow_

You may notice the .00001rem, rather than 0. This is because of a bug in IE10/IE11, which causes the element to jump about when animating from 0. _If you know why, please tell me..._

### Animating the petals

Now we have the initial placement we can animate them to create the logo effect, each petal is moving to the position of the petal anticlockwise before it.

{% highlight css %}
.petals li{
	position: absolute;
	height: 1.7rem;
	width: 1.7rem;
	line-height: .5rem;

	border: 2px solid red;
	border-radius: 50%;

	animation: .5s .5s 2 alternate ease-in-out;
}

.petals li:nth-child(1){
	animation-name: petal-one;
	transform: translate(.5rem, .00001rem);
}

.petals li:nth-child(2){
	animation-name: petal-two;
	transform: translate(0%, .25rem);
}

.petals li:nth-child(3){
	animation-name: petal-three;
	transform: translate(.5rem, .5rem);
}

/* each petal has a respective animation */

@keyframes petal-one{
	100%{ transform: translate(0%, .25rem); }
}

@keyframes petal-two{
	100%{ transform: translate(.5rem, .5rem); }
}

@keyframes petal-three{
	100%{ transform: translate(.5rem, 0%); }
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petals">	<div class="example-petal--3-1"></div>	<div class="example-petal--3-2"></div>	<div class="example-petal--3-3"></div>	</div>		</div>
_Animating wooo_

## Fallbacks

We use [Modernizr](http://modernizr.com/) for feature detection as this logo relies on the `border-radius`, `transform` and `@font-face` properties. If the browser supports these we remove the image classes and inject the markup and CSS as described above.

Also we can fallback from SVG to PNG with this nice hack. [Internet Explorer 8 and older don't support multiple backgrounds](http://caniuse.com/#feat=multibackgrounds) so we can force it to use the PNG version.

{% highlight css %}
.logo-img{
	background-image: url('../../img/logo/default.png');
	background-image: url('../../img/logo/default.svg'), none;
}
{% endhighlight %}
_The default logo with PNG fallback_

Changing the logo to the dynamic logo based on features is an example of progressive enhancement and ensure we can allow accessibility for users with screen readers.

## Using SASS for more control

All this is using numbers by hand, or [magic numbers](http://csswizardry.com/2012/11/code-smells-in-css/), if we want to make this even more flexible and give us control of the size of the logo and it's behaviour we can use [SASS](http://sass-lang.com/), a pre-processor for CSS.

The above code examples are standard CSS [but in the actual code](http://github.com/{{ site.data.social.github }}) you'll find we're using SASS.

I would do this but it ended with blurry sub-pixel shit.

## Does this replace static logos?

Depending on usage I think a dynamic logo can be useful to convey some information about a brand's identity but in most cases it will not. Nice extra but not revolutionary. :smirk_cat: