/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
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
            <p>${tweetData.content.text}</p>
        </div>
        <footer>
            <span>${tweetData.created_at} days ago</span>
            <ul>
                <li><i class="fa-sharp fa-solid fa-flag"></i></li>
                <li><i class="fa-sharp fa-solid fa-retweet"></i></li>
                <li><i class="fa-sharp fa-solid fa-heart"></i></li>
            </ul>
        </footer>
    </article>
  `;
};

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $("#tweets-container").append(createTweetElement(tweet));
  }
};

$(document).ready(function () {
  renderTweets(data);

  // Send POST request using form
  $("form").on("submit", (event) => {
    event.preventDefault();
    const data = $("form").serialize();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data,
    }).then(() => {
      console.log("data", data);
    });
  });
});
