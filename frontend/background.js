let socket = null; // Global state for the WebSocket connection

chrome.action.onClicked.addListener((tab) => {
  if (!socket) {
    // If socket is not connected, establish the WebSocket connection
    socket = new WebSocket("ws://localhost:8080/2364966");

    socket.onopen = function (e) {
      console.log("[open] Connection established to localhost:8080");
      // Send a message to the content script to display the WebSocket data div
      chrome.tabs.sendMessage(tab.id, { action: "toggleWebSocketDiv" });
    };

    socket.onmessage = function (event) {
      const cleanData = JSON.parse(event.data);
      console.log(cleanData);

      // Send the received data to the content script
      chrome.tabs.sendMessage(tab.id, {
        action: "updateWebSocketData",
        data: cleanData,
      });
    };

    socket.onerror = function (error) {
      console.log(`[error] ${error.message}`);
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
    };
  } else {
    // If socket is already connected, close the WebSocket connection
    socket.close();
    // Send a message to the content script to hide the WebSocket data div
    chrome.tabs.sendMessage(tab.id, { action: "toggleWebSocketDiv" });
  }
});
