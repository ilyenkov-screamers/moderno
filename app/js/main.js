$(function() {
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
    });

    $(".product-slider__inner").slick({
        arrows: false,
        dots: true,
        slidesToScroll: 4,
        slidesToShow: 4,
    });

    var mixer = mixitup(".products__inner-box");
});