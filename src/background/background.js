/**
 * Sends the message from the popup to the content script of the active tab
 * @param {string} message The message to either show or hide the comments
 */
function onMessageReceive(message) {
  browser.tabs.query({ active: true }, function (tabs) {
    for (let index = 0; index < tabs.length; index++) {
      chrome.tabs.sendMessage(tabs[index].id, message);
    }
  });
}

browser.runtime.onMessage.addListener(onMessageReceive);
