
//tutorial 1

//scroll button
//$('#downBtn').click(function(){
//});

//make the click event slide up to top
$('#downBtn').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});



//tutorial 2

//add to js page - this is taken from jquery

//(function ($) { $.fn.accordion = function (options) { var opts = $.extend({ theBar: 'h2', thePane: 'div', speed: 300 }, options)
//    var $this = $(this); var $theBars = $this.children(opts.theBar); $this.children(opts.thePane).hide(); $theBars.click(function()
//    { $(this).next().slideToggle(opts.speed); }); return $this;	}	}(jQuery));






