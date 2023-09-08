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

const divStyle = {
    overflowY: 'auto',
    overflowX: 'hidden', // Hide horizontal overflow
    maxHeight: '100%',
    maxWidth: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    wordBreak: 'break-all'
};


  return (
    <div id="websocketDataDiv" style={divStyle}>
      {data ? JSON.stringify(data) : "WebSocket Data Will Appear Here"}
    </div>
  );
}

export default WebSocketDataDiv;
