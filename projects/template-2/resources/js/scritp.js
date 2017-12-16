$(document).ready(function() {
    $('body').scrollspy({target: "#bs-example-navbar-collapse-1", offset: 200});


    $("#bs-example-navbar-collapse-1 a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.navigation').css({"background-color":"#fff","box-shadow":"0px -2px 4px 0px"});
        } else {
            $('.navigation').css({"background-color":"transparent","box-shadow":"none"});
        }
    });


$(function () {
   $('.portfolioItem').hover(dropdown1, dropup1)
});
function dropdown1(event){
    $('.portfolioCover',this).css({"margin-top":"0"});
}
function dropup1(event) {
    $('.portfolioCover',this).css({"margin-top":"-100%"});
}

// $('.teamBox').click( function () {
//    $('.quickBioCover', this).css('margin-left','0');
//     $('.infoCover', this).css('margin-top', '-80px');
//
// });

// $(function () {
//    $('.portfolioCover').hover(popUp, popOut)
// });
// function popUp(event){
//     $('.caption',this).fadeIn(100);
// }
// function popOut(event) {
//     $('.caption',this).fadeOut(100);
// }

$(function () {
   $('.teamBox').hover(dropdown2, dropup2)
});
function dropdown2(event){
    $('.quickBioCover',this).css({"margin-left":"0","width":"100%"});
    $('.infoCover', this).css({"margin-top": '-80px'});
}
function dropup2(event) {
    $('.quickBioCover',this).css("margin-left","-100%");
    $('.infoCover', this).css("margin-top", "0");
}


});



