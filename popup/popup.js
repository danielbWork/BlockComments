
const checkbox = document.getElementById("comment-blocker");

// Turns on/off the comments
function updateCommentsState() {
    
  browser.runtime
  .sendMessage({ command: "update-comment-state", block: checkbox.checked })
  .catch((err) => {
    console.log("Error in popup update");
    console.log(err);
  });

}



checkbox.addEventListener("click",updateCommentsState);

// Gets original comment state
browser.runtime
  .sendMessage({ command: "get-comment-state" })
  .then((result) => {
    checkbox.checked = result.block
  })
  .catch((err) => {
    console.log("Error in popup");
    console.log(err);
  });
