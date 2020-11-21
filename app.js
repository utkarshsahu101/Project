
$(document).ready(function(){
    // $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
});