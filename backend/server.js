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

  // Read and send messages from the file with a delay between events
  const sendMessagesWithDelay = async () => {
    eventsFile.read(async (line) => {
      // Send the message
      ws.send(JSON.stringify(line));

      // Introduce a delay between processing events (adjust the delay as needed)
      await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust the delay in milliseconds as needed
    });
  };

  // Call the function to start sending messages with a delay
  sendMessagesWithDelay();
});
