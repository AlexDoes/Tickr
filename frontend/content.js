let isAppDisplayed = false;
let fixedElements = []; // To store the fixed elements and their original 'top' values

function adjustFixedElements(height, pushDown = true) {
  if (pushDown) {
    // Find all elements with position: fixed
    fixedElements = [];
    let allElements = document.body.getElementsByTagName("*");
    for (let el of allElements) {
      if (
        window.getComputedStyle(el).position === "fixed" &&
        el.id !== "reactAppRoot"
      ) {
        let originalTop = el.style.top;
        fixedElements.push({ el, originalTop });

        // Add transition effect
        el.style.transition = "top 0.5s";

        // Adjust the top value
        let currentTop = parseInt(originalTop, 10) || 0;
        el.style.top = currentTop + height + "px"; // Use the actual height in pixels
      }
    }
  } else {
    // Reset the top values of the fixed elements
    for (let item of fixedElements) {
      item.el.style.top = item.originalTop;
    }
  }
}

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

    // Style the div
    appRoot.style.position = "fixed";
    appRoot.style.top = "-20%"; // Start from above the viewport
    appRoot.style.left = "0";
    appRoot.style.width = "100%";
    // appRoot.style.height = '20%'; // Set a fixed height
    appRoot.style.zIndex = "1000000"; // Ensure it's above other elements
    // appRoot.style.backgroundColor = "red"; // Or any color you prefer
    appRoot.style.transition = "top 0.5s"; // Transition effect for sliding

    // Get the actual height of the div in pixels
    let divHeight = appRoot.offsetHeight;

    // Adjust the body's margin-top with transition
    document.body.style.transition = "margin-top 0.5s";
    document.body.style.marginTop = divHeight + "px"; // Use the actual height in pixels

    // After a short delay, slide the div in and adjust fixed elements
    setTimeout(() => {
      appRoot.style.top = "0";
      adjustFixedElements(divHeight);
    }, 50);

    // Render the React app after creating the div
    if (window.renderReactApp) {
      window.renderReactApp();
    }

    isAppDisplayed = true;
  }
}

function hideApp() {
  let existingAppRoot = document.getElementById("reactAppRoot");
  if (existingAppRoot) {
    // Slide-out effect
    existingAppRoot.style.top = "-20%";
    document.body.style.marginTop = "0"; // Reset the body's margin-top
    adjustFixedElements(0, false); // Reset fixed elements

    // Send a message to background.js to request closing the WebSocket connection
    chrome.runtime.sendMessage({ action: "closeWebSocket" });

    // After the slide-out transition completes, remove the div
    setTimeout(() => {
      existingAppRoot.remove();
    }, 500); // This delay should match the transition duration
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "checkDivState") {
    let existingAppRoot = document.getElementById("reactAppRoot");
    if (existingAppRoot) {
      sendResponse({ divState: "displayed" });
    } else {
      sendResponse({ divState: "hidden" });
    }
  } else if (message.action === "toggleWebSocketDiv") {
    displayApp(); // Toggle the React app

    // Check the div's state and send it back as a response
    let existingAppRoot = document.getElementById("reactAppRoot");
    if (existingAppRoot) {
      sendResponse({
        status: "App toggled successfully",
        divState: "displayed",
      });
    } else {
      sendResponse({ status: "App toggled successfully", divState: "hidden" });
    }
  }
  // Note: The data update will now be handled by the React app itself.
});
