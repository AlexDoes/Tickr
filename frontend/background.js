let socket = null; // Global state for the WebSocket connection
let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 5000; // 5 seconds

function establishWebSocketConnection(tabId) {
    socket = new WebSocket("ws://localhost:8080/2364966");

    socket.onopen = function (e) {
        console.log("[open] Connection established to localhost:8080");
        retryCount = 0; // Reset retry count on successful connection
    };

    socket.onmessage = function (event) {
        const cleanData = JSON.parse(event.data);
        console.log(cleanData);

        // Send the received data to the content script
        chrome.tabs.sendMessage(tabId, {
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
                data: { error: "Failed to connect to server." }
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
    };
}

chrome.action.onClicked.addListener((tab) => {
    if (!socket) {
        // If socket is not connected, display the div first
        chrome.tabs.sendMessage(tab.id, { action: "toggleWebSocketDiv" }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                return;
            }
            // After the div is displayed, establish the WebSocket connection
            establishWebSocketConnection(tab.id);
        });
    } else {
        // If socket is already connected, close the WebSocket connection
        socket.close();
        // Send a message to the content script to hide the WebSocket data div
        chrome.tabs.sendMessage(tab.id, { action: "toggleWebSocketDiv" });
    }
});
