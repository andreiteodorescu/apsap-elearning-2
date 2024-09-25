$(".js-see-more").on("click", function () {
  $(this)
    .closest(".course-details-columns")
    .find(".d-none")
    .removeClass("d-none");
  return false;
});
