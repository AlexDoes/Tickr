import { WebSocketServer } from "ws";
import jsonlFile from "jsonl-db";
import { glob } from "glob";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", async function connection(ws, req) {
  ws.on("ping", () => {
    ws.pong();
  });

  console.log(req.url);

  const jsfiles = await glob(`**/${req.url}_events.jsonl`, {
    ignore: "node_modules/**",
  });

  console.log("Emitting", jsfiles[0]);
  const eventsFile = jsonlFile(jsfiles[0]);

  // Control the message rate with a delay
  const messageDelay = 10; // Adjust the delay in milliseconds as needed
  let lastMessageTime = 0;

  // Function to send a message with throttling
  const sendMessageWithThrottle = (message) => {
    const currentTime = Date.now();
    if (currentTime - lastMessageTime >= messageDelay) {
      ws.send(JSON.stringify(message));
      lastMessageTime = currentTime;
    }
  };

  // Read and send messages from the file with throttling
  eventsFile.read((line) => {
    sendMessageWithThrottle(line);
  });
});
