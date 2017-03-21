console.log(document.querySelector("html").clientHeight)
$(".owl-carousel .slider").height(document.querySelector("html").clientHeight)
$(function () {
    $("#fullpage").fullpage({
        verticalCentered: true,
        responsiveWidth: 0,
        afterLoad: function (anchorLink, index) {
            if (index != 1) {
                $(".navbar").removeClass("opacity");
            } else {
                $(".navbar").addClass("opacity");
            }
        }
    });
    $.fn.fullpage.moveTo(1);
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true
    })
});