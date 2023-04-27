/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Escape tags in tweet input
const escapeHTML = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (tweetData) {
  return `
    <article class="tweet">
        <header>
            <div class="author">
                <img src=${tweetData.user.avatars} alt=${tweetData.user.name} />
                <span>${tweetData.user.name}</span>
            </div>
            <span class="additional-name">${tweetData.user.handle}</span>
        </header>
        <div class="tweet-body">
            <p>${escapeHTML(tweetData.content.text)}</p>
        </div>
        <footer>
            <span>${timeago.format(tweetData.created_at)}</span>
            <ul>
                <li><i class="fa-sharp fa-solid fa-flag"></i></li>
                <li><i class="fa-sharp fa-solid fa-retweet"></i></li>
                <li><i class="fa-sharp fa-solid fa-heart"></i></li>
            </ul>
        </footer>
    </article>
  `;
};

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $("#tweets-container").prepend(createTweetElement(tweet));
  }
};

// Fetch Tweets
const loadTweets = () => {
  $.ajax({
    method: "GET",
    url: "/tweets",
    success: (data) => {
      renderTweets(data);
    },
  });
};

$(document).ready(function () {
  loadTweets();

  $("#tweet-text").on("click", () => {
    $('label[for="tweet-text"]').hide();
  });
  $("#tweet-text").on("blur", () => {
    const input = $("#tweet-text").val().length;
    if (input === 0) {
      $('label[for="tweet-text"]').toggle();
    }
  });

  // Send POST request using form
  $("form").on("submit", (event) => {
    event.preventDefault();
    const tweetLength = $.trim($("#tweet-text").val()).length;
    const errorMessage = $("#error-message");

    $(errorMessage).hide();

    if (tweetLength === 0) {
      $(errorMessage).text("Please write something.").slideDown("slow");
      return;
    }

    if (tweetLength > 140) {
      $(errorMessage).text("Your tweet is too long.").slideDown("slow");
      return;
    }

    const data = $("form").serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data,
    }).then(() => {
      loadTweets();
    });

    $("#tweet-text").val("");
    $("#tweet-counter").text("140");
    $('label[for="tweet-text"]').show();
  });
});
