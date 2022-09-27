$(document).ready(function () {
  $(".dep1>li").mouseover(function () {
    $(this).children(".dep2").stop().slideDown();
  });
  $(".dep1>li").mouseleave(function () {
    $(this).children(".dep2").stop().slideUp();
  });

  $(".main-certification-right").slick({
    slidesToShow: 3,
    initialSlide: 1,
    infinite: true,
    swipeToSlide: true,
    speed: 1300,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });
});
