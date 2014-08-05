---
layout: post
title:  'Dynamic Logos with CSS - Blog · ROSE Digital ✏'
post_title: 'Dynamic Logos with CSS'
date:   2014-08-05 16:32:05
author: zac
categories: blog
---

When creating logos often the end product will be a static identity. [After seeing some great usage of logos with moving parts](http://www.hexanine.com/zeroside/the-future-is-fluid-inside-dynamic-logos/) I thought I'd play with the idea of making ours dynamic.

Animating part of a logo is taking this dynamic logo idea pretty literally but it could be used to convey information. (And it just looks **cool**) I wanted something that moves the abstract rose more towards an _'O'_ and back again.

I've seen this done with animated SVGs before but I thought doing this with CSS would be interesting. _It should be noted any example CSS in this post is without browser prefixes. (I recommend using [autoprefixer](https://github.com/ai/autoprefixer) for this.)_

## Planting the Seeds

First we need the basic markup. I chose a unordered list of petals:

{% highlight html %}
<ul class="petals">
	<li></li>
	<li></li>
	<li></li>
</ul>
{% endhighlight %}

Each `li` petal can be selected with CSS using `nth-child`.

## A Single Petal

The petal itself is a square element with a border and border radius to create a perfect circle. I've animated some of the styles to make it more obvious.

{% highlight css %}
.petals li{
	height: 100px;
	width: 100px;

	border: 7px solid red;
	border-radius: 50%;
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petal--1"></div>		</div>
<em class="caption">One section of the abstract rose. :thumbsup:</em>

## Arranging the Rose

Each petal is moved into position using `transform: translate(x, y);`. They say how far they are moving on the _x and y axis_ respectively. The petals must be positioned absolutely so they overlap.

{% highlight css %}
.petals li:nth-child(1){
	transform: translate(33.33px, .00001px);
}

.petals li:nth-child(2){
	transform: translate(0px, 16.66px);
}

.petals li:nth-child(3){
	transform: translate(33.33px, 33.33px);
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petals">	<div class="example-petal--2-1"></div>	<div class="example-petal--2-2"></div>	<div class="example-petal--2-3"></div>	</div>		</div>
<em class="caption">Now there's three, wow. :tada:</em>

You may notice the .00001, rather than 0. This is because of a bug in IE10/IE11, which causes the element to jump about when animating from 0. _If you know why, please tell me..._ :warning:

## Animating the Petals

Now we have the initial placement we can animate them to create the spin effect, each petal is moving to the position of the petal anti-clockwise before it.


{% highlight css %}
/* each petal has a respective animation */

@keyframes petal-one{
	100%{ transform: translate(0px, 16.66px); }
}

@keyframes petal-two{
	100%{ transform: translate(33.33px, 33.33px); }
}

@keyframes petal-three{
	100%{ transform: translate(33.33px, 0px); }
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petals">	<div class="example-petal--3-1"></div>	<div class="example-petal--3-2"></div>	<div class="example-petal--3-3"></div>	</div>		</div>
<em class="caption">Animating wooo! :clap:</em>

## Using SASS for More Control

All this is coded by hand ([magic numbers](http://csswizardry.com/2012/11/code-smells-in-css/)), which is not ideal. If we want to make this even more flexible and give us control of the size of the logo and it's behaviour we could use [SASS](http://sass-lang.com/), a pre-processor for CSS.

I'm looking to move towards generating the animation algorithmically, my current efforts ended up with sub-pixel placement which created a lot of blurring.

_I realise this implementation isn't perfect, I'll update here with the SASS if/when this appears. [Tweet @ us](http://twitter.com/rosedgtl) if you have any hot tips._ :smirk_cat: