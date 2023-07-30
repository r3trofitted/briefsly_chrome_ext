chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  chrome.storage.sync.set({ token: message.token });
  console.log("token.js")
});