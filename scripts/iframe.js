console.log("iframe.js");

// import { Application, Controller } from "./stimulus.js"

// window.Stimulus = Application.start()

// Stimulus.register("briefsly", class extends Controller {
//   static values = { url: String }
//
//   display() {
//     this.load();
//   }
//
//   connect() {
//     console.log("connected!")
//   }
//
//   load() {
//     fetch(this.urlValue, {
//       headers: {
//         "Content-Type": "text/vnd.turbo-stream.html",
//         "Accept": "text/vnd.turbo-stream.html",
//         "X-Embed-In": "github.com"
//       }
//     })
//     .then(response => response.text())
//     .then(function (html) {
//       console.log(html)
//       Turbo.renderStreamMessage(html);
//     })
//   }
// });

document.addEventListener("turbo:load", () => {
  console.debug("turbo:load", event.detail);
});

document.addEventListener("turbo:before-fetch-request", async (event) => {
  console.debug("turbo:before-fetch-request", event.detail);
  
  event.preventDefault();
  
  // const token = await getSessionToken(window.app)
  // event.detail.fetchOptions.headers["Authorization"] = `Bearer ${token}`
  event.detail.fetchOptions.headers["X-Briefsly-Auth"] = "brieflsy_auth_token"; // TODO: fetch from config

  event.detail.resume()
});

document.addEventListener("turbo:before-frame-render", (event) => {
  console.debug("turbo:before-frame-render", event);
});
