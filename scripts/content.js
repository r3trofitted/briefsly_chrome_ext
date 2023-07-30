console.debug("content.js");

const participantsSidebarItem = document.querySelector("#partial-users-participants");

if (participantsSidebarItem) {
  console.debug("sidebar item added from content.js");
  
  let iframe = document.createElement("iframe");
  iframe.id = "briefsly-iframe";
  iframe.src = chrome.runtime.getURL('iframe.html');
  iframe.style.width = "100%";
  iframe.style.height = "200px";
  
  participantsSidebarItem.insertAdjacentElement("beforeend", iframe);
}
