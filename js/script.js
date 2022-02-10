$(window).on("load", function() {
    "use strict";
        var windowLoaded = false;
        $(this).on("load", function() {
            windowLoaded = true;
        });




    $(".banner-counts a").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });


    /* ============ Loveria Banner ================*/
    var owl = $('.loveria-banner').owlCarousel({
        autoplay:true,
        loop:true,
        smartSpeed:1000,
        dots:false,
        nav:false,
        margin:0,
        mouseDrag:true,
        autoHeight:true,
        URLhashListener:true,
        items:1,
        singleItem:true,
        animateIn:"fadeIn",
        animateOut:"fadeOut"
    }); 

    owl.on('changed.owl.carousel', function(event) {
        $(".banner-wrapper .banner-counts a").removeClass('active');
        setTimeout(function(){
            var active_slide = $('.loveria-banner').find('.owl-item.active .banner-slide').attr('data-hash');       
            $(".banner-wrapper .banner-counts a").each(function(){
                var hash = $(this).attr('href').replace('#','');;
                if(hash == active_slide) {
                    $(this).addClass('active');
                }
            });
        },1000);
    }); 

    /* ============ Story Carousel ================*/
    var owl2 = $('.story-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        smartSpeed:1000,
        dots:false,
        nav:false,
        margin:20,
        mouseDrag:true,
        autoHeight:true,
        URLhashListener:true,
        items:1,
        singleItem:true,
        animateIn:"fadeIn",
        animateOut:"fadeOut"
    }); 
    owl2.on('changed.owl.carousel', function(event) {
        $(".loveria-story .banner-counts a").removeClass('active');
        setTimeout(function(){
            var active_slide = $('.loveria-story').find('.owl-item.active .story-slide').attr('data-hash');       
            $(".loveria-story .banner-counts a").each(function(){
                var hash = $(this).attr('href').replace('#','');;
                if(hash == active_slide) {
                    $(this).addClass('active');
                }
            });
        },1000);
    }); 


    /* ============ Memories Carousel ================*/
    $('.memories-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        smartSpeed:1000,
        dots:false,
        nav:true,
        margin:0,
        mouseDrag:true,
        autoHeight:true,
        URLhashListener:true,
        items:1,
        singleItem:true,
        animateIn:"fadeIn",
        animateOut:"fadeOut"
    }); 

    
    /* ============ Gifts Carousel ================*/
    $('.gifts-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        smartSpeed:1000,
        dots:true,
        nav:false,
        margin:20,
        mouseDrag:true,
        autoHeight:true,
        items:5,
        responsive:{
            1200:{items:5},
            980:{items:4},
            767:{items:3},
            480:{items:2},
            0:{items:1}
        }    
    }); 


    /* ============ Events Carousel ================*/
    $('.dg-container').gallery({
        autoplay    :   true
    });


    /* ============ Curved Text ================*/
    $('.curved').circleType({radius:700});


    /* ============ Gallery Load More ================*/
    $(".loadmore a").on("click",function(){
        $(this).fadeOut();
        $('.hidden-items').slideDown().addClass("loaded-items");
        setTimeout(function(){
            $(".masonary").isotope('reloadItems').isotope({ sortBy: 'original-order' });
        },300)
        return false;
    });


    /*================== Responsive Function Under Width 980 =====================*/
    function checkWidth() {
    var windowSize = $(this).width();
    if (windowSize <= 980) {
        /*================== Event Carousel Height =====================*/
        var event_img_height = $(".event-slide > img").innerHeight();
        var event_info_height = $(".event-slide .event-info").innerHeight();
        $(".loveria-events").css({
            "height":event_img_height + event_info_height
        });
 
        /*================== Responsive Menu Dropdown =====================*/
        $("nav ul ul").parent().addClass("menu-item-has-children");
        $("nav ul li.menu-item-has-children > a").on("click", function() {
            $(this).next("ul").slideDown();
            $(this).parent().siblings().find("ul").slideUp();
            return false;
        });


    }
    }
    checkWidth();
    $(this).resize(checkWidth);


    /* ============ Open Menu ================*/
    var navigation_list  = $('nav > ul');
    $(".open-menu").on("click",function(){
        navigation_list.addClass('slideIn');        
        return false;
    });

    $('html').on("click",function(){
        navigation_list.removeClass('slideIn');        
    });
    $(".open-menu").on("click",function(e){
        e.stopPropagation();
    });

    /* ============ Count Down Timer ================*/
    $('#countdown5').ClassyCountdown({
    end:$.now() + 6645600,
    now: $.now(),
    labels: true,
    labelsOptions: {
        lang: {
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minute',
            seconds: 'Second'
        },
        style: 'font-family: roboto; font-size:14px; text-transform:uppercase; font-weight:300;letter-spacing:1px'
    },
    style: {
        element: "",
        textResponsive: .5,
        days: {
            gauge: {
                thickness: .1,
                bgColor: "rgba(255,255,255,0.2)",
                fgColor: "#FFF"
            },
            textCSS: 'font-family:\'Abril Fatface\'; font-size:48px; font-weight:800; color:#FFF;'
        },
        hours: {
            gauge: {
                thickness: .1,
                bgColor: "rgba(255,255,255,0.2)",
                fgColor: "#FFF"
            },
            textCSS: 'font-family:\'Abril Fatface\'; font-size:48px; font-weight:800; color:#FFF;'
        },
        minutes: {
            gauge: {
                thickness: .1,
                bgColor: "rgba(255,255,255,0.2)",
                fgColor: "#FFF"
            },
            textCSS: 'font-family:\'Abril Fatface\'; font-size:48px; font-weight:800; color:#FFF;'
        },
        seconds: {
            gauge: {
                thickness: .1,
                bgColor: "rgba(255,255,255,0.2)",
                fgColor: "#FFF"
            },
            textCSS: 'font-family:\'Abril Fatface\'; font-size:48px; font-weight:800; color:#FFF;'
        }

    }
    });


}); /*=== Window.Load Ends Here ===*/