// * We have a lot of asynchronous code, but we cant to make the calls synchronous
function fetchUser(callback) {
  setTimeout(() => {
    console.log("Fetched user data");
    callback({ userId: 1, name: "Alice" });
  }, 2000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts for user: " + userId);
    callback(["Post 1", "Post 2"]);
  }, 2000);
}

function sendEmail(posts, callback) {
  setTimeout(() => {
    console.log("Sent email for posts: " + posts);
    callback("Email sent");
  }, 2000);
}

// * This is where the callback hell begins
fetchUser((user) => {
  fetchPosts(user.userId, (posts) => {
    sendEmail(posts, (result) => {
      console.log(result);
    });
  });
});

// * Output
// Fetched user data
// * (After 2 seconds)
// Fetched post for user: 1
// * (After 2 seconds)
// Sent email for posts: Post 1,Post 2
// Email sent
