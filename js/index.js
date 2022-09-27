$(document).ready(function () {
  $(".dep1>li").mouseover(function () {
    $(this).children(".dep2").stop().slideDown();
  });
  $(".dep1>li").mouseleave(function () {
    $(this).children(".dep2").stop().slideUp();
  });

  //토글메뉴로변경
  $(".dep1 .dep1_a").click(function () {
    $(".dep2").hide();
    $(this).next(".dep2").slideToggle();
  });
  $(".open_btn").click(function () {
    if ($(".mobile-gnb").hasClass("hide")) {
      $(".mobile-gnb_wrap").fadeIn();
      $(".mobile-gnb").removeClass("hide");
      $(".mobile-bg").removeClass("hide");
      $(".mo-logo").attr("src", "../images/logo.png");
      $(".mo-menu").attr("src", "../images/btn_close.png");
    } else {
      $(".mobile-gnb_wrap").fadeOut();
      $(".mobile-gnb").addClass("hide");
      $(".mobile-bg").addClass("hide");
      $(".mo-logo").attr("src", "../images/logo.png");
      $(".mo-menu").attr("src", "../images/btn-menu-m.png");
    }
  });

  $(".main-visual-scroll img").click(function () {
    $("html, body").animate({ scrollTop: $(".main-business").offset().top }, 500);
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
