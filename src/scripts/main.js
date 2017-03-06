$(function () {
    var scaleW=window.innerWidth / 1920;
    var scaleH=window.innerHeight / 1080;

    // var scaleW=window.innerWidth / 750;
    // var scaleH=window.innerHeight / 1016;

    $(".container").css("webkitTransform","scale("+scaleW+","+scaleH+")")
    // $('#owl-carousel').owlCarousel({
    //     autoplay:false,
    //     dots: true,
    //     dotsSpeed:400,
    //     items:1
    // });
    $(".page").fullpage({
        freeDrag:true,
        verticalCentered: false,
        onLeave:function(index,nextIndex){
            switch (index){
                case 1:
                    $('.navbar').stop().animate({"top":"-80px"},function(){
                        $(".logo").attr("src","images/logo1.png")
                        $('.navbar').stop().animate({"top":"0px"})
                        $(".navbar-default").addClass("navaddcolor")
                    })
                    break;
            }
            if(nextIndex==1){
                $('.navbar').stop().animate({"top":"-80px"},function(){
                    $(".logo").attr("src","images/logo.png")
                    $('.navbar').stop().animate({"top":"0px"})
                    $(".navbar-default").removeClass("navaddcolor")
                })
            }
        }
    })
    var mySwiper = new Swiper ('.swiper-container', {
        pagination : '.swiper-pagination',
    })

    $('.mode-about-list').hover(function() {
        $(this).find('.hover').stop().animate({'height': '90px'});
        $(this).find(".inner-img").stop().animate({"width":"0px","height":"0px","margin-top":"0px"})
    },function(){
        $(this).find('.hover').stop().animate({'height': '100%'});
        $(this).find(".inner-img").stop().animate({"width":"118px","height":"118px","margin":"70px auto 0"})
    });

    $(".homeduty .hover").hover(function(){
        $(this).stop().animate({"height":"60px"})
    },function(){
        $(this).stop().animate({"height":"100%"})
    })

    $(".homerefer .mode").hover(function(){
        $(this).find(".infobg").stop().animate({"width":"100%"})
    },function(){
        $(this).find(".infobg").stop().animate({"width":"0"})
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