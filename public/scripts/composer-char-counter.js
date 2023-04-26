$(document).ready(function () {
  $("textarea").on("keyup", function () {
    const tweetCounter = $(this).parent().find("#tweet-counter");
    let count = 140 - $(this).val().length;

    tweetCounter.val(count);

    if (count < 0) {
      $(tweetCounter).addClass("red");
    } else {
      $(tweetCounter).removeClass("red");
    }
  });
});
