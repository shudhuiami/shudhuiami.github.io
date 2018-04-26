$('.slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 600,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        230: {
            items: 1
        },
        600: {
            items: 2
        },
        700: {
            items: 3
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        },
        1200: {
            items: 5
        }

    }
});
$('.testimonial_slide').owlCarousel({
    loop: true,
    singleItem: true,
    autoplay: true,
    slideSpeed: 300,
    autoplaySpeed: 600,
    dots: false,
    items: 1
});
$('.blog_slide').owlCarousel({
    loop: true,
    margin:5,
    autoplay: true,
    slideSpeed: 300,
    autoplaySpeed: 600,
    dots: false,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        230: {
            items: 1
        },
        600: {
            items: 1
        },
        760: {
            items: 1
        },
        800: {
            items: 1
        },
        900: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('.slide_box').owlCarousel({
    loop: true,
    singleItem: true,
    autoplay: true,
    slideSpeed: 300,
    autoplaySpeed: 600,
    dots: false,
    items: 1
});

$('#drop_nav_trigger').on('click', function () {
    var clickCount = 0;
    var dropdown = $('#drop_nav_trigger').closest('.drop_nav').find('.drop_inner');
    /*$(window).on('click', function (event) {
        clickCount++;
        var trigger = event.target;
        if (clickCount === 2){
            if (dropdown.hasClass("_active")){
                console.log(dropdown[0]);
                console.log(trigger);
                if (trigger !== dropdown[0]) {
                    console.log('asdasdasd');
                    dropdown.removeClass('_active');
                    $(window).off('click');
                }
            }
        }
    });*/
    if (dropdown.hasClass("_active")) {
        dropdown.removeClass('_active');
    } else {
        dropdown.addClass('_active');
    }
});

$('#all_car_trigger').on('click', function () {
    var prebar = $('#all_car_trigger').closest('.cat_list');
    var fullbar = $('#all_car_trigger').closest('.container-flat-cat').find('.cat_list_all');
    prebar.removeClass('_active');
    fullbar.addClass('_active');
});
$('#less_car_trigger').on('click', function () {
    var fullbar = $('#less_car_trigger').closest('.cat_list_all');
    var prebar = fullbar.closest('.container-flat-cat').find('.cat_list');
    fullbar.removeClass('_active');
    prebar.addClass('_active');
});

