$(document).ready(function(){
    $('.s-3__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        variableWidth: true,
        touchThreshold: 20,
    });
    $('.s-3__slider').on('click', '.slick-slide', function () {
        var slideno = $(this).data('slick-index');
        console.log(slideno);
        $('.s-3__slider').slick('slickGoTo', slideno);
    });
});  
