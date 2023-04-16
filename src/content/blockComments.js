/**
 * Hides the comments from the ui
 */
function hideComments() {
  const comments = document.getElementById("comments");

  if (comments) {
    comments.style.display = "none";
    comments.style.visibility = "hidden";
  }
}

/**
 * Shows the comments from in the ui
 */
function showComments() {
  const comments = document.getElementById("comments");
  if (comments) {
    comments.style.display = "block";
    comments.style.visibility = "";
  }
}

/**
 * Youtube comments are annoying and some times updating once doesn't work so this
 * runs the update multiple times to make sure the comments will update
 * @param {string} message The command to update the comments
 */
function updateCommentState(message) {
  var timesRun = 0;
  const interval = setInterval(function () {
    timesRun += 1;

    //
    // work this makes sure they will update
    if (timesRun === 10) {
      console.log("Finished updating comments");
      clearInterval(interval);
    }

    if (message === "show") {
      showComments();
    } else if (message === "hide") {
      hideComments();
    }
  }, 100);
}

// Handles update from the pop up
browser.runtime.onMessage.addListener((message) => {
  console.log(`Message received: ${message}`);

  updateCommentState(message);
});

// Waits for comments object to be loaded for the first time to remove it
// Important to note that runs infinitely on streams
const interval = setInterval(() => {
  const comments = document.getElementById("comments");

  if (comments) {
    updateCommentState("hide");
    clearInterval(interval);
  }
}, 100);
