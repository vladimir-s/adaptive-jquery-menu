(function($) {
    $.fn.adaptiveMenu = function(settings) {
        //default values
        var config = {
        	'width': 481,
        	'text': 'Show menu'
        };
        //using user defined values
        if (settings) $.extend(config, settings);

		// iterate over matched elements
        return this.each(function() {
            if (isSmallScreen(config)) {
            	$(this).addClass('hidden');
            	var trigger = $(this).parent().find('a#adaptiveMenuTrigger');
            	if (trigger.length === 0) {
            		trigger = $('<a>').attr('id', 'adaptiveMenuTrigger').attr('href', '#').html(config.text);
            		trigger.insertAfter($(this));
            	}
            	trigger.click({'menu': $(this)}, showMenu);
            	console.log('small');
            }
        });
    };

    // public functions definition
    $.fn.adaptiveMenu.functionName = function(foo) {
        return this;
    };

    // private functions definition
    function isSmallScreen(config) {
    	var viewport = $(window).width();
    	if (viewport < config.width) {
    		return true;
    	}
    	return false;
    }

    function showMenu(event) {
    	event.preventDefault();
    	event.data.menu.removeClass('hidden');
    	$(event.currentTarget).addClass('hidden');
    }
})(jQuery);