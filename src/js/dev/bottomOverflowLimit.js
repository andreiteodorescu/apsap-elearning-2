$(".js-cancel-overflow").on("click", function () {
  $(this).parent().parent().addClass("cancel-overflow-limit");
});

$(".js-cancel-overflow-modules").on("click", function () {
  $(".course-modules").addClass("cancel-overflow-limit");
});
