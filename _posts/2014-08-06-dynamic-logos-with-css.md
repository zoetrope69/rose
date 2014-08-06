---
layout: post
title:  'Dynamic Logos with CSS - Blog · ROSE Digital ✏'
post_title: 'Dynamic Logos with CSS'
date:   2014-08-06 16:32:05
author: zac
categories: blog
---

When creating logos often the end product will be a static identity. [After seeing some great usage of logos with moving parts](http://www.hexanine.com/zeroside/the-future-is-fluid-inside-dynamic-logos/) I thought I'd play with the idea of making ours dynamic.

Animating part of a logo is taking this dynamic logo idea pretty literally but it could be used to convey information (or just look **cool**). I wanted something that moves the abstract rose more towards an _'O'_ and back again.

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
	transform: translate(33.33%, 0);
}

.petals li:nth-child(2){
	transform: translate(0, 16.66%);
}

.petals li:nth-child(3){
	transform: translate(33.33%, 33.33%);
}
{% endhighlight %}

The first petal is translated to the right &frac13; _(33.33%)_ of a petal, the second is translated down &frac16; _(16.66%)_ of a petal and the final petal is both translated to the right and down by a &frac13; of a petal. :heavy_check_mark:

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petals">	<div class="example-petal--2-1"></div>	<div class="example-petal--2-2"></div>	<div class="example-petal--2-3"></div>	</div>		</div>
<em class="caption">Now there's three, wow. :tada:</em>

## Animating the Petals

Now we have the initial placement we can animate them to create the spin effect, each petal is moving to the position of the petal anti-clockwise before it.

{% highlight css %}
.petals li{
	height: 100px;
	width: 100px;

	border: 7px solid red;
	border-radius: 50%;
	
	animation: .5s infinite alternate ease-in-out;
}

.petals li:nth-child(1){
	transform: translate(33.33%, 0);
	animation-name: petal-1;
}

.petals li:nth-child(2){
	transform: translate(0, 16.66%);
	animation-name: petal-2;
}

.petals li:nth-child(3){
	transform: translate(33.33%, 33.33%);
	animation-name: petal-3;
}
	
/* each petal has a respective animation */

@keyframes petal-1{
	to{ transform: translate(0, 16.66%); }
}

@keyframes petal-2{
	to{ transform: translate(33.33%, 33.33%); }
}

@keyframes petal-3{
	to{ transform: translate(33.33%, 0); }
}
{% endhighlight %}

<!-- We're using Jekyll and HTML doesn't render very well amongst Markdown hence the unusual classes -->
<div class="code-result">		<div class="example-petals">	<div class="example-petal--3-1"></div>	<div class="example-petal--3-2"></div>	<div class="example-petal--3-3"></div>	</div>		</div>
<em class="caption">Animating wooo! :clap:</em>

## Using SASS for More Control

All this is coded by hand ([magic numbers](http://csswizardry.com/2012/11/code-smells-in-css/)), which is not ideal. If we want to make this even more flexible and give us control of the size of the logo and it's behaviour we could use [SASS](http://sass-lang.com/), a pre-processor for CSS.

This would look something like this:

{% highlight scss %}
$petalSize: 100px;
$petalThickness: ($petalSize * 0.07);
$petalColour: #C43200;
$spinSpeed: .5s;

.petals li{
    position: absolute;
  
    height: $petalSize;
    width: $petalSize;

    border: $petalThickness solid $petalColour;
    border-radius: 50%;
  
    animation: $spinSpeed; infinite alternate ease-in-out;
}

// collection of positions
$position:(
    translate($petalSize / 3, 0),
    translate(0, $petalSize / 6),
    translate($petalSize / 3, $petalSize / 3)
  );

// loop through petals
@for $i from 1 to length($position) + 1{
  
  .petals li:nth-child(#{$i}){
    transform: nth($position, $i);
    animation-name: petal-#{$i};
  }

  // animate petal to previous position
  $j: $i - 1;
  @if $j == 0 { $j: 3; } // loop round array

  // create animation for petal
  @keyframes petal-#{$i}{ to{ transform: nth($position, $j) } }

}
{% endhighlight %}

I realise this implementation isn't perfect, you can find the above code [in a CodePen](http://codepen.io/zaccolley/pen/ApEiF), feel free to fork and improve.

_[Tweet @ us](http://twitter.com/rosedgtl) if you have any hot tips._ :smirk_cat: