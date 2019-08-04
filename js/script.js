$("#proposition").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scrollfour").offset().top
    }, 1000);
});

$("#catalog").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scroll").offset().top
    }, 1000);
});

$("#shop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scroll").offset().top
    }, 1000);
});

$("#about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scrolltwo").offset().top
    }, 1000);
});

$("#blog").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".scrollthree").offset().top
    }, 1000);
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".fixed-top").addClass("change-fixed-top");
    } else {
        $(".fixed-top").removeClass("change-fixed-top");
    }
});