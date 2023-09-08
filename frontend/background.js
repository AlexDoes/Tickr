let socket = null;
let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 5000;
// let isOperationLocked = false; // <-- Add this at the top


function establishWebSocketConnection(tabId) {
  // if (isOperationLocked) return; // <-- Prevent further operations if one is in progress

  // isOperationLocked = true; // <-- Lock the operation
  socket = new WebSocket("ws://localhost:8080/2364966");

  socket.onopen = function (e) {
    console.log("[open] Connection established to localhost:8080");
    retryCount = 0;
    // isOperationLocked = false; // <-- Unlock the operation
  };


  socket.onmessage = function (event) {
    const cleanData = JSON.parse(event.data);
    console.log(cleanData);

    // Send the received data to the content script (React component)
    chrome.tabs.sendMessage(tabId, {  // <-- Use tabId here
      action: "updateWebSocketData",
      data: cleanData,
    });
};

  socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
    if (retryCount < MAX_RETRIES) {
      retryCount++;
      console.log(`Retrying connection (${retryCount}/${MAX_RETRIES})...`);
      setTimeout(() => establishWebSocketConnection(tabId), RETRY_DELAY);
    } else {
      console.log("Max retries reached. Connection failed.");
      chrome.tabs.sendMessage(tabId, {
        action: "updateWebSocketData",
        data: { error: "Failed to connect to server." },
      });
    }
  };

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(
        `[close] Connection closed cleanly, code=${event.code}, reason=${event.reason}`
      );
    } else {
      console.log("[close] Connection died");
    }
    socket = null; // Reset the socket state
    // isOperationLocked = false; // <-- Unlock the operation
  };
}

chrome.action.onClicked.addListener((tab) => {
  // Check the div's state
  chrome.tabs.sendMessage(tab.id, { action: "checkDivState" }, (response) => {
      if (response && response.divState === "displayed" && !socket) {
          // If the div is displayed but the WebSocket is disconnected, establish a WebSocket connection
          establishWebSocketConnection(tab.id);
      } else if (response && response.divState === "hidden" && socket) {
          // If the div is hidden but the WebSocket is connected, close the WebSocket connection
          socket.close();
          socket = null;
      } else {
          // If both are in sync, proceed with the toggle action
          chrome.tabs.sendMessage(tab.id, { action: "toggleWebSocketDiv" }, (toggleResponse) => {
              if (toggleResponse && toggleResponse.divState === "displayed" && !socket) {
                  establishWebSocketConnection(tab.id);
              } else if (toggleResponse && toggleResponse.divState === "hidden" && socket) {
                  socket.close();
                  socket = null;
              }
          });
      }
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "closeWebSocket") {
      // Close the WebSocket connection
      if (socket) {
          socket.close();
          socket = null;
      }
  }
});
