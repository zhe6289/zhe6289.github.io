$(document).ready(function () {

    $(window).on("scroll", function(e) {
        if($(window).scrollTop() >= 1 ) {
              $('.navbar').removeClass('bg-light').addClass('bg-dark');
              $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
            }
            
            else {
                $('.navbar').removeClass('bg-dark').addClass('bg-light');
                $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
        }
        
        var w = window.innerWidth;
        
    });
});
