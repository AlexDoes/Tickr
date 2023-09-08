import React, { useState, useEffect } from 'react';

function WebSocketDataDiv() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if chrome and chrome.runtime are defined
    if (typeof chrome !== "undefined" && chrome.runtime) {
        // Listen for messages from the background script
        chrome.runtime.onMessage.addListener((message) => {
            if (message.action === "updateWebSocketData") {
                setData(message.data);
            }
        });
    }
}, []);


  return (
    <div id="websocketDataDiv" style={{ /* your styles here */ }}>
      {data ? JSON.stringify(data) : "WebSocket Data Will Appear Here"}
    </div>
  );
}

export default WebSocketDataDiv;
