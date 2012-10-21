(function($) {
    //default values
    var config = {
        'width': 481, //property defines maximum screen width at which menu will be replaced with a link
        'text': 'Show menu', //link anchor
        'openMenuLinkClass': 'adaptiveMenuTrigger' //link CSS class
    };

    var methods = {
        'init': function(settings) {
            //using user defined values
            if (settings) $.extend(config, settings);
            
            return this.each($.proxy(function(index, menu) {
                if (isSmallScreen(config)) {
                    hideMenu(menu, config);
                }
            }, this));
        },

        'show': function() {
            var link = this.parent().find('a.' + config.openMenuLinkClass);
            link.trigger('click.adaptiveMenu');
        },

        'hide': function() {
            hideMenu(this[0]);
        }
    };

    $.fn.adaptiveMenu = function(method) {
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.adaptiveMenu');
        }

    };

    // private functions definition
    function isSmallScreen() {
        var viewport = $(window).width();
        if (viewport < config.width) {
            return true;
        }
        return false;
    }

    function showMenu(event) {
        event.preventDefault();
        $(event.data.menu).removeClass('hidden');
        $(event.currentTarget).addClass('hidden');
    }

    function hideMenu(menu) {
        $(menu).addClass('hidden');
        var link = $(menu).parent().find('a.' + config.openMenuLinkClass);
        if (link.length === 0) {
            link = $('<a>').attr('class', config.openMenuLinkClass).attr('href', '#').html(config.text);
            link.insertAfter($(menu));
            link.bind('click.adaptiveMenu', {'menu': menu}, showMenu);
        }
        else {
            link.removeClass('hidden');
        }
    }
})(jQuery);