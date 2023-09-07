let isDivDisplayed = false; // Declare this variable at the top

function adjustFixedElements() {
  // Get all elements with position 'fixed' or 'sticky'
  let fixedElements = [...document.querySelectorAll("*")].filter((el) => {
    let position = window.getComputedStyle(el).position;
    return (
      (position === "fixed" || position === "sticky") &&
      el.id !== "websocketDataDiv"
    ); // Exclude the WebSocket data div
  });

  // Adjust the 'top' property of these elements
  fixedElements.forEach((el) => {
    let currentTop = window.getComputedStyle(el).top;
    if (currentTop && currentTop !== "auto") {
      let newTop = parseInt(currentTop, 10) + 50 + "px"; // Add 50px (or the height of your div)
      el.style.top = newTop;
    } else if (currentTop === "0px" || currentTop === "auto") {
      el.style.top = "50px"; // Set to the height of your div if it's at the top
    }
  });
}

function displayDiv() {
  console.log("displayDiv function called");
  let existingDiv = document.getElementById("websocketDataDiv");
  if (existingDiv) {
    // If the div already exists, hide it and restore the site
    hideDiv();
    isDivDisplayed = false;
  } else {
    // Otherwise, display the div and adjust the site
    let displayDiv = document.createElement("div"); // Only declare once
    displayDiv.id = "websocketDataDiv"; // Assign an ID for easy reference
    displayDiv.style.position = "fixed";
    displayDiv.style.top = "0";
    displayDiv.style.left = "0";
    displayDiv.style.width = "100%";
    displayDiv.style.height = "50px"; // You can adjust this
    displayDiv.style.backgroundColor = "rgba(0,0,0,0.7)";
    displayDiv.style.color = "white";
    displayDiv.style.zIndex = "10000"; // High z-index to ensure it's above other elements
    displayDiv.innerHTML = "WebSocket Data Will Appear Here"; // Placeholder text

    // Append the div to the body of the current tab
    document.body.appendChild(displayDiv);

    // Adjust the rest of the content
    let originalMarginTop = window.getComputedStyle(document.body).marginTop;
    document.body.style.marginTop = parseInt(originalMarginTop, 10) + 50 + "px"; // Add 50px (or the height of your div) to the original margin-top

    adjustFixedElements();
    isDivDisplayed = true;
  }
}

function hideDiv() {
  let existingDiv = document.getElementById("websocketDataDiv");
  if (existingDiv) {
    existingDiv.remove();
  }

  // Restore the site's content to its original position
  document.body.style.marginTop = "";
  let fixedElements = [...document.querySelectorAll("*")].filter((el) => {
    let position = window.getComputedStyle(el).position;
    return (
      (position === "fixed" || position === "sticky") &&
      el.id !== "websocketDataDiv"
    );
  });
  fixedElements.forEach((el) => {
    el.style.top = ""; // Reset the top property
  });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleWebSocketDiv") {
    displayDiv(); // Toggle the WebSocket data div
    sendResponse({ status: "Div toggled successfully" });
  } else if (message.action === "updateWebSocketData") {
    // Update the WebSocket data div with the received data
    let displayDiv = document.getElementById("websocketDataDiv");
    if (displayDiv) {
      displayDiv.innerHTML = JSON.stringify(message.data); // Convert the data to a string for display
    }
  }
});
