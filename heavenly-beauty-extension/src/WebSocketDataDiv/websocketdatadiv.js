import React, { useState, useEffect } from "react";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function WebSocketDataDiv() {
  const [data, setData] = useState(null);
  const messageQueue = new Queue();
  const [timestamp, setTimestamp] = useState([]);

  useEffect(() => {
    // Check if chrome and chrome.runtime are defined
    if (typeof chrome !== "undefined" && chrome.runtime) {
      // Listen for messages from the background script
      chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "updateWebSocketData") {
          // setData(message.data);
          console.log(typeof message.data);
          messageQueue.enqueue(message.data.occurredAt);
          setTimestamp([...timestamp, message.data.occurredAt]);
        }
      });
    }

    const intervalId = setInterval(() => {
      if (!messageQueue.isEmpty()) {
        setData(messageQueue.dequeue());
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const divStyle = {
    overflowY: "auto",
    overflowX: "hidden", // Hide horizontal overflow
    maxHeight: "100%",
    maxWidth: "100%",
    padding: "10px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    wordBreak: "break-all",
  };

  return (
    <div id="websocketDataDiv" style={divStyle}>
      {data ? JSON.stringify(data) : "WebSocket Data Will Appear Here"}
      <div>
        {timestamp.map((time) => (
          <p>{time}</p>
        ))}
      </div>
    </div>
  );
}

export default WebSocketDataDiv;
