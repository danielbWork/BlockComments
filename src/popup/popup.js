const hideButton = document.getElementById("hide_button");

hideButton.addEventListener("click", () => {
  console.log("hide");
  browser.runtime.sendMessage("hide");
});

const showButton = document.getElementById("show_button");

showButton.addEventListener("click", () => {
  console.log("show");
  browser.runtime.sendMessage("show");
});
