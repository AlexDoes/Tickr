let isAppDisplayed = false;

function displayApp() {
    console.log("displayApp function called");
    let existingAppRoot = document.getElementById("reactAppRoot");
    if (existingAppRoot) {
      // If the app root already exists, hide it and restore the site
      hideApp();
      isAppDisplayed = false;
    } else {
      // Otherwise, create the app root
      let appRoot = document.createElement("div");
      appRoot.id = "reactAppRoot";
      document.body.appendChild(appRoot);
      isAppDisplayed = true;
    }
}

function hideApp() {
  let existingAppRoot = document.getElementById("reactAppRoot");
  if (existingAppRoot) {
    existingAppRoot.remove();
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "toggleWebSocketDiv") {
        displayApp(); // Toggle the React app
        sendResponse({ status: "App toggled successfully" });
    } 
    // Note: The data update will now be handled by the React app itself.
});