/**
 * Created by thelaboratory on 2016-03-05.
 */

    //sticky nav bar

//var $stickyNav = $('nav');
//
//var mainNavTopPos = $stickyNav.offset().top;
//
//$(window).scroll(function(){
//
//    if($(window).scrollTop() > mainNavTopPos){
//        $stickyNav.addClass('sticky');
//    }else{
//        $stickyNav.removeClass('sticky');
//    }
//
//});


$('#downBtn').click(function () {
});




$('#downBtn').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});