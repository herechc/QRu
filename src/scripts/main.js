$(function () {
    // $('#owl-carousel').owlCarousel({
    //     autoplay:false,
    //     dots: true,
    //     dotsSpeed:400,
    //     items:1
    // });
    $(".page").fullpage({
        freeDrag:true,
        verticalCentered: false,
        afterLoad:function(anchorLink, index){
            switch (index){
                case 1:
                    $('.navbar').addClass("active");
                    $(".navbar-default").removeClass("navaddcolor")
                    break;
                default:
                    $('.navbar').addClass("active ");
                    $(".navbar-default").addClass("navaddcolor")
            }
        },
        onLeave:function(index){
            $('.navbar').removeClass("active");
        }
    })
    var mySwiper = new Swiper ('.swiper-container', {
        pagination : '.swiper-pagination',
    })
    $('.col-pd a').hover(function() {
        $(this).children('.hover').stop().animate({'height': '78px'});
        $(this).find('.tit').stop().animate({'paddingTop': '8px', 'backgroundPositionY': '-120px'});

    },function(){
        $(this).children('.hover').stop().animate({'height': '100%'});
        $(this).find('.tit').stop().animate({'paddingTop': '49%', 'backgroundPositionY': '10px'});

    });
    $(".homeduty .hover").hover(function(){
        $(this).stop().animate({"height":"40px"})
    },function(){
        $(this).stop().animate({"height":"100%"})
    })

    $(".homerefer .mode").hover(function(){
        $(this).find(".infobg").stop().animate({"opacity":"0.4"})
    },function(){
        $(this).find(".infobg").stop().animate({"opacity":"0"})
    })

    $('.homecontact .map-btn').click(function() {
        $('<div class="screen"></div>').appendTo('.homecontact');
        $('<div class="screenin"></div>').appendTo('.screen');
        $('<div class="screenBox"></div>').appendTo('.screen .screenin');
        $('<iframe id="map" src="http://apis.map.qq.com/uri/v1/marker?marker=coord:26.5686029026,106.6921664432;title:贵州青如信息科技有限公司;addr:贵州省贵阳市花果园财富广场2号楼2103室&referer=myapp" width="99%" height="92%" frameborder="0" scrolling="no" ></iframe>').appendTo('.screen .screenBox');
        $('<div class="boxclose"></div>').appendTo('.screen .screenBox');

        $('.screen').animate({'opacity': 1}, function() {
            $('.screen .screenin').stop().animate({'height': '420px'});
        });
    });
    $('body').on('click', '.screen .boxclose', function() {
        $('.screen .screenin').animate({'height': '0px'}, function() {
            $('.screen').remove();
        });
    });
    $(".homecontact .join").hover(function(){
        $(".homecontact .footer").stop().animate({"height":"330px"})
    })
    $('.homecontact .footer').mouseleave(function() {
        $(".homecontact .footer").stop().animate({"height":"0px"})
    });
});