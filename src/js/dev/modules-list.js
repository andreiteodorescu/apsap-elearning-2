$(".course-modules-list-item").click(function () {
  // Check if the clicked item has the 'active' class
  if ($(this).hasClass("active")) {
    // Animate the scroll to the target element
    $("html, body").animate(
      {
        scrollTop: $("#courseVideo").offset().top - 110,
      },
      1000
    );
  }
});
