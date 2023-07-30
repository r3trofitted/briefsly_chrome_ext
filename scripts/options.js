document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("configForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const tokenInput = document.getElementById("token");
    const token = tokenInput.value.trim();

    chrome.runtime.sendMessage({ action: "saveToken", token: token }, function (response) {
      if (response && response.message) {
        console.log(response.message);
      } else {
        console.log("Unexpected response:", response);
      }
    });
  });
});
