$(document).ready(function(){
    $('html, body').animate({scrollTop:0}, 1);
    $(".header__burgerMenu li").click(function() {
        var destinationClass = $(this).attr('class');
        $('html, body').animate({
            scrollTop: $(".section-" + destinationClass).offset().top
        }, 2000);
    });
    
});
