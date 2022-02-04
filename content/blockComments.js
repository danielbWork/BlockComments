let blockComments = true;

// Handles removing the comment
function updateCommentState() {
  var timesRun = 0;
  var interval = setInterval(function () {
    timesRun += 1;

    // Youtube comments are annoying and some times removing once doesn't 
    // work this makes that they will be removed
    if (timesRun === 60) {
      console.log("Finished updating comments");
      clearInterval(interval);
    }
    var elem = document.getElementById("comments");

    if (elem != null) {
      if (blockComments) {
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      } else {
        elem.style.display = "block";
        elem.style.visibility = "";
      }
    }
  }, 500);
}

function restartScript(message) {
  console.log(message);
  blockComments = message.block;
  updateCommentState();
}

// Handles update from the pop up
browser.runtime.onMessage.addListener((message) => {
  console.log(message);

  // Resets comment state
  if (message.command === "update-comment-state") {
    restartScript(message);
  }
  return Promise.resolve({ response: "Received" });
});

// Requests starting state of comments
browser.runtime
  .sendMessage({ command: "get-comment-state" })
  .then((result) => {
    restartScript(result);
  })
  .catch((err) => {
    console.log("Error in start");
    console.log(err);
  });
