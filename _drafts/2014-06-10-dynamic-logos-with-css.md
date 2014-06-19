---
layout: post
title:  'Dynamic Logos with CSS - Blog · ROSE Digital ✏'
post_title: 'Dynamic Logos with CSS'
date:   2014-06-10 14:12:09
author: zac
categories: blog
---

When creating logos often the end product will be a static identity. [After seeing some great usage of logos with moving parts](http://www.hexanine.com/zeroside/the-future-is-fluid-inside-dynamic-logos/) I thought I'd play with the idea of dynamic logos.

Animating part of a logo or allowing for interaction is quite an interesting idea and can be used to convey information. I wanted something that moves the abstract rose towards an 'O' and back again.

I've seen this done with animated SVGs before but I thought doing this with CSS would be interesting. It should be noted any example CSS in this post is without browser prefixes. I'm currently using [autoprefixer](https://github.com/ai/autoprefixer) for this.

## The Ground Work

With anything in this nature you sometimes sarifice accessibility. We'll get into how we combat that later but first we need the basic markup.

I chose to use a list of petals as so:

{% highlight html %}
<ul class="petals">
	<li></li>
	<li></li>
	<li></li>
</ul>
{% endhighlight %}

Each `li` is a ring and then can be selected with CSS using `nth-child`.

## The Petals

There's a few parts to creating the logo in CSS.

The typeface in our logo is called Quicksand, this happens to be available through [Google Fonts as a webfont](http://www.google.com/fonts#UsePlace:use/Collection:Quicksand). This is simple, we just set the size and weight of the text. We do use `user-select: none;` to stop the user from being able to select the text.

<div class="code-result">		<div class="example-logo">ROSE</div>		</div>
_Here is just the logo as standard text_

### One petal

The petal itself is a bordered square with a border radius to create a perfect circle.

{% highlight scss %}
height: 1.7rem;
width: 1.7rem;
line-height: .5rem;

border: 2px solid red;
border-radius: 50%;
{% endhighlight %}

<div class="code-result">		<div class="example-petal"></div>		</div>
_One section of the abstract rose_

### Positioning the Petals

{% highlight scss %}
// then there each petal is handled by nth-child and move to it's position

.logo .petals li:nth-child(1){
	animation-name: petal-one;
	transform: translate(.5rem, .00001rem); // .00001 because of a IE10/11 bug
}

.logo .petals li:nth-child(2){
	animation-name: petal-two;
	transform: translate(0%, .25rem);
}

.logo .petals li:nth-child(3){
	animation-name: petal-three;
	transform: translate(.5rem, .5rem);
}
{% endhighlight %}

<div class="code-result">		<div class="example-petals">	<div class="example-petal"></div>	<div class="example-petal"></div>	<div class="example-petal"></div>	</div>		</div>
_Now there's three wow_

You may notice the .00001rem, rather than 0. This is because of a bug in IE10/IE11, which causes the element to jump about when animating from 0.

{% highlight scss %}
// each petal has a respective animation

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

<div class="code-result">		<div class="example-petals--spin">	<div class="example-petal"></div>	<div class="example-petal"></div>	<div class="example-petal"></div>	</div>		</div>
_Animating wooo_

## Fallbacks

We use [Modernizr](http://modernizr.com/) for feature detection as this logo relies on `border-radius`, `transform` and `@font-face`. If the browser supports these we remove the class and inject the markup described above.

{% highlight scss %}
.logo-img-default{
	background-image: url('../../img/logo/default.png');
	background-image: url('../../img/logo/default.svg'), none;
}
{% endhighlight %}
_The default logo with PNG fallback_

This is a nice SVG to PNG fallback hack as IE? which doesn't support SVG also doesn't support multiple backgrounds.

Changing the logo to the dynamic logo based on features is a good example of progressive enhancement and ensure we can allow accessibility for users with screen readers.

## Using SASS For More Control

SASS, or [Syntatically Awesome StyleSheets](http://sass-lang.com/), is a pre-processor for CSS.

The above code examples are standard CSS [but in the actual code]({{ http://github.com/{{ site.data.social.github }} }}) you'll find we're using SASS. This allows us to calculate some of the sizing without using [magic numbers](http://csswizardry.com/2012/11/code-smells-in-css/).

## Are Static Logos Dead?

Depending on usage I think a dynamic logo can be useful to convey some information about a brand's identity but in most cases it will not. I see it as an extra detail that can [delight your clients](#) 