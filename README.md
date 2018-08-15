***jquery.verticalyzeNavy***

What is this?
============
`.verticalyzeNavy()` it's a small and very simple jQuery plugin create sticky vertical navigation for your long one page scrolling website or some peace of page. The users can navigate smoothly between your page sections through the dot navigation, [view a demo][1] on [codepen.io][1], inspired by [this article][2]. From your side you need only markup, with the rest will take care of the plugin.

[1]: https://codepen.io/tsurule/pen/aGdBzb
[2]: https://codyhouse.co/gem/vertical-fixed-navigation


How do I use it?
===============

Add the following HTML structure:
--------------------------------
```html
<section class="verticalyze-navy" data-section-name="hero"></section>
<section class="verticalyze-navy" data-section-name="main"></section>
<section class="verticalyze-navy" data-section-name="info"></section>
<section class="verticalyze-navy" data-section-name="foot"></section>
<!-- where your classes should be the same for each block in scroll area, for plugin init -->
<!-- data-section-name - is up to you, if you want to prop some custom label -->
```
And then initialise the plugin:
------------------------------

	$('.verticalyze-navy').verticalyzeNavy(); 	// init plugin on sections by your class

It will wrap all of the blocks in one section and add nav list, see the [Vertical Page Scroll Navigation jQuery plugin demo][1]		

You can customise it with the following options:
-----------------------------------------------

	$('.verticalyze-navy').verticalyzeNavy({
		animationSpeed: 1000,			// you can set your custom speed, by default it's 500
		customClass: 'verticalyze-navy',	// you can specify custom class for wrappers and dots classes, it will create 'verticalyze-navy__wrapper' for whole stage, 'verticalyze-navy__nav' for list, 'verticalyze-navy__nav_dot' for each item in list and 'verticalyze-navy__nav_dot_active' for active item in list. All classes follow BEM methodology. 
		navContent: false,  			// you can display on your list current section name what equal 'data-section-name' value, by default it's true
		navContentIndex: false  		// if you need to display item number in list, by default it's true
	});

***pay attention, that this is just an experiment, that plugin for now is not ideal and ise infinity loop, which is not fine as for me but I'll continue to fix it***
