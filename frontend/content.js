let isAppDisplayed = false;

function displayApp() {
    console.log("displayApp function called");
    let existingAppRoot = document.getElementById("reactAppRoot");
    if (existingAppRoot) {
        hideApp();
        isAppDisplayed = false;
    } else {
        let appRoot = document.createElement("div");
        appRoot.id = "reactAppRoot";
        document.body.appendChild(appRoot);
        isAppDisplayed = true;

        // Render the React app after creating the div
        if (window.renderReactApp) {
            window.renderReactApp();
        }
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