$(document).ready(function () {
  $("#create-new-tweet").on("click", function () {
    const newTweetSection = $(".new-tweet");

    newTweetSection.slideDown();
    $("textarea").focus();
  });
});
