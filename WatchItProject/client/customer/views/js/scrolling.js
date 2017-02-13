$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);

    });
    $('body').scrollspy({
        target: '.navbar',
        offfset:160
    });
    //smooth scrolling:'
    $('.down-button ').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 150
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });





});
