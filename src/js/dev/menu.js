$(".menu-btn").on("click", function () {
  $(".menu-btn").removeClass("menu-btn-active");
  $(this).addClass("menu-btn-active");

  if (!$(this).hasClass("show")) {
    $("body").removeClass("nav-active");
  } else {
    $("body").addClass("nav-active");
  }
});

// Sticky menu when scrolling
const mainHeader = $(".header");
const headerScrollThreshold = 110;
$(window).on("scroll", function () {
  const scroll = $(window).scrollTop();

  if (scroll >= headerScrollThreshold) {
    mainHeader.addClass("header-sticky");
    $("body").addClass("header-sticky-body");
  } else {
    mainHeader.removeClass("header-sticky");
    $("body").removeClass("header-sticky-body");
  }
});

$(document).on("hide.bs.dropdown", ".header", function () {
  $("body").removeClass("nav-active");
});
