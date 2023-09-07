// Establish the WebSocket connection
const socket = new WebSocket("ws://localhost:8080/2364966");

socket.onopen = function (e) {
  console.log("[open] Connection established to localhost:8080");
};

socket.onmessage = function (event) {
  console.log(`[message] Data received from server: ${event.data}`);
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
};

// Add any other functionality you might want, e.g., sending data, processing incoming data, etc.
