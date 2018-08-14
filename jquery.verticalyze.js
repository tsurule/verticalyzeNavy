(function ( $ ) {

	var setting = {
		animationSpeed: 500,
		customClass: 'verticalyze-navy',
		navContent: true,
		navContentIndex: true
	}


    $.fn.verticalyzeNavy = function(options) {

    	$.extend(setting, options);

    	var mainWrap = '<div class="'+setting.customClass+'__wrapper">',
			navWrap,
			navWrapList = setting.customClass+'__nav',
			navDots,
			navDotsList = setting.customClass+'__nav_dot',
            assignModify,
    		navSection = '<ul class="'+navWrapList+'">',
    		sectionsCout = [],
			navDotsScroll = false;

        this.each(function(index) {
            var container = $(this),
				containerOffset = container.offset().top,
				containerData = container.data('sectionName') || '',
				navDotIndex = ++index;
				navContentIndex = setting.navContentIndex ? navDotIndex : '',
				navContent = setting.navContent ? containerData : '';

			sectionsCout.push({
            	name: "nav-" + navDotIndex,
            	offset: containerOffset,
                ref: container
            });

            navSection += '<li class="'+navDotsList+'" data-target="nav-'+navDotIndex+'" data-nav-name="'+containerData+'">'+navContentIndex+' '+navContent+'</li>';
        });

        navSection += "</ul>";

		this.wrapAll(mainWrap).last().after(navSection);

    	navWrap = $(navWrapList),
		navDots = $('.'+navDotsList);

        assignModify = function(target) {
            target.addClass(navDotsList+'_active').siblings().removeClass(navDotsList+'_active');
		}

        navDots.each(function(index){

        	 $(this).on("click", function(){

        	 	var targetSection = sectionsCout[index].offset;
                var target = $(this);

				navDotsScroll = true;
				 assignModify(target);

        	 	$('html,body').animate({
			        scrollTop: targetSection + 1
			    }, setting.animationSpeed);

        	 	setTimeout(function() {
					navDotsScroll = false;
        	 	}, setting.animationSpeed);
        	 })
        })

        var checkScrollPos = function() {

			var scrollPos = $(window).scrollTop();

              if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    targetNavDot = $("[data-target='"+sectionsCout[sectionsCout.length - 1].name+"']");
                    assignModify(targetNavDot);

                } else {
                    for(var i = sectionsCout.length - 1; i > -1; i--){
                        if(sectionsCout[i].offset <= scrollPos) {

                            targetNavDot = $("[data-target='"+sectionsCout[i].name+"']");
                            assignModify(targetNavDot);

                            return;
                        }
                    }
                }
		}

        $(window).scroll(function(){
        	if(navDotsScroll) {
        		return;
        	} else {
        		checkScrollPos();
        	}
        })

        checkScrollPos();
        return this;
    };

}(jQuery));
