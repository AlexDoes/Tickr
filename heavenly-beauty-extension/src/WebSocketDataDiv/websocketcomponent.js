import React, { useEffect } from "react";

export default function WebSocketComponent({ onDataReceived }) {
  useEffect(() => {
    let socket = null;
    let retryCount = 0;
    const MAX_RETRIES = 3;
    const RETRY_DELAY = 5000;

    const establishWebSocketConnection = () => {
      socket = new WebSocket("ws://localhost:8080/2364966");

      socket.onopen = function (e) {
        console.log("[open] Connection established to localhost:8080");
        retryCount = 0;
      };

      socket.onmessage = function (event) {
        const cleanData = JSON.parse(event.data);
        // console.log(cleanData);

        // Pass the received data to the parent component
        onDataReceived(cleanData);
      };

      socket.onerror = function (error) {
        console.log(`[error] ${error.message}`);
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`Retrying connection (${retryCount}/${MAX_RETRIES})...`);
          setTimeout(establishWebSocketConnection, RETRY_DELAY);
        } else {
          console.log("Max retries reached. Connection failed.");
          // Handle the error as needed
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
        socket = null;
      };
    };

    establishWebSocketConnection();

    // Cleanup function
    return () => {
      if (socket) {
        socket.close();
        socket = null;
      }
    };
  }, []);

  // No return statement, as this component is only for WebSocket setup

  return null;
}
