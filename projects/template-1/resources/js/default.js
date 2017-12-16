$(document).ready(function() {
    /**Navigation**/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.navigation').addClass('scrolled');
        } else {
            $('.navigation').removeClass('scrolled');
        }
    });
    /*Parallax*/
    $('.parallax').parallax();

    /*Welcome slide*/
    $(".display_slider").owlCarousel({
        autoPlay:false,
        navigation : false,
        singleItem:true,
        pagination:false
    });

    /*About Slide*/
    $(".group_img").owlCarousel({
        autoPlay:3000,
        navigation : false,
        singleItem:true,
        pagination:false
    });

    /*services slide*/
    $(".service_slide").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2]
    });

    /*testimonial*/
    $('.testimonials_slide').owlCarousel({
        autoPlay:true,
        singleItem:true,
        theme : "myTheme-theme"

    });


    /**reviews**/
    $('.product_reviews').owlCarousel({
        autoPlay:3000,
        singleItem:true,
        pagination:false

    });

    $('.partners_part_up').owlCarousel({
        items:2,
        autoPlay:2000,
        pagination:false
    });
    $('.partners_part_down').owlCarousel({
        items:2,
        autoPlay:3000,
        pagination:false
    });

    /**Work (mixitup)**/
    $(function(){
        $('#works').mixItUp();
    });

    /*about_tabs*/
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);

    /**Modal Section**/
    $('.modal-trigger').leanModal();

});

function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 25.00, lng: 91.00},
        zoom: 7
    });
}




