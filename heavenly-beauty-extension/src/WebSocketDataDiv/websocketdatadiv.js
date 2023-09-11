import React from "react";
import { useWebSocketData } from "./websockethook.js"; // Import the custom hook

function WebSocketDataDiv(props) {
  const eventId = props.matchId;
  const data = useWebSocketData(); // Use the custom hook to fetch WebSocket data

  return (
    <>
      <div
        id="websocketDataDiv"
        className="text-xl font-bold border-yellow-200 border-2"
      >
        {data
          ? data.map((event) => {
              return (
                <div className="text-red-700">
                  {Object.entries(event).map(([timestamp, eventType]) => {
                    return (
                      <div>
                        {timestamp}: {eventType}
                      </div>
                    );
                  })}
                </div>
              );
            })
          : `WebSocket Data Will Appear Here ${eventId}`}
      </div>
    </>
  );
}

export default WebSocketDataDiv;
