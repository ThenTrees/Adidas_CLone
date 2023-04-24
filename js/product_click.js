$(document).ready(function () {
    $(".list_product_1").slick({
        // autoplay: true,
        // autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
});


