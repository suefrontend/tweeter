$(document).ready(function () {
  $("textarea").on("keyup", function () {
    const tweetCounter = $(this).closest("form").find("output");

    let count = 140 - $(this).val().length;

    tweetCounter.val(count);

    if (count < 0) {
      $(tweetCounter).addClass("error");
    } else {
      $(tweetCounter).removeClass("error");
    }
  });
});
