$(document).ready(function () {
  const scrollBtn = $("#scroll-top");
  const headerHeight = 120;
  scrollBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
      scrollBtn.fadeIn();
      $(".nav__link").hide();
    } else {
      scrollBtn.fadeOut();
      $(".nav__link").show();
    }
  });

  scrollBtn.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);

    setTimeout(function () {
      $(".new-tweet").slideDown();
      $("textarea").focus();
    }, 500);
  });
});
