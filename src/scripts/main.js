$(function () {
    $('#owl-carousel').owlCarousel({
        autoplay:false,
        dots: true,
        dotsSpeed:400,
        items:1
    });
    $(".page").fullpage({
        verticalCentered: false
    })
});