$('.hiring-items > div').on('click', function (){
    $(this).children('.hiring-icon').toggleClass('active');
    $(this).parent('.hiring-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor')
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
})

$('.features-item > div').on('click', function(){
    $(this).toggleClass('toggleColorFeature')
    $(this).next('p').slideToggle(300)
    $(this).parent('.features-item').children('.features-line').toggleClass('toggleLine')
})

$('.carusel-slider').slick({
    dots: true,
    adaptiveHeight: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 5000,
})