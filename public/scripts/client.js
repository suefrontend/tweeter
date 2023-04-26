/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1461116232227,
};
const createTweetElement = function (data) {
  return `
    <article class="tweet">
        <header>
            <div class="author">
                <img src=${data.user.avatars} alt=${data.user.name} />
                <span>${data.user.name}</span>
            </div>
            <span class="additional-name">${data.user.handle}</span>
        </header>
        <div class="tweet-body">
            <p>${data.content.text}</p>
        </div>
        <footer>
            <span>${data.created_at} days ago</span>
            <ul>
                <li><i class="fa-sharp fa-solid fa-flag"></i></li>
                <li><i class="fa-sharp fa-solid fa-retweet"></i></li>
                <li><i class="fa-sharp fa-solid fa-heart"></i></li>
            </ul>
        </footer>
    </article>
  `;
};

$(document).ready(function () {
  const $tweet = createTweetElement(tweetData);

  $("#tweets-container").append($tweet);
});
