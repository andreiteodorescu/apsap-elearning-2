$(document).ready(function () {
  $(".js-toggle-course-list-panel").click(function () {
    // Toggle the collapsed class on the sidebar
    $(".course-sidebar").toggleClass("collapsed");

    // Hide or show everything inside course-sidebar except js-toggle-course-list-panel
    $(".course-sidebar").children().toggle();

    // Hide everything in course-page-video-toolbar except js-toggle-course-list-panel
    $(".course-page-video-toolbar")
      .children()
      .not(".js-toggle-course-list-panel")
      .toggle();

    $(".course-page-video-toolbar").toggleClass("collapsed");
    $(".course-detail-wrap").toggleClass("collapsed");
  });
});
