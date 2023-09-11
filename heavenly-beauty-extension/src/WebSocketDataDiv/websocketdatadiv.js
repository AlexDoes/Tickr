import React, { useState, useEffect } from "react";

function WebSocketDataDiv(props) {
  const { websocketData } = props;
  const [lastValidData, setLastValidData] = useState(null);

  // Check if the data has an eventType
  const hasEventType = websocketData['message'] !== "Default message for unhandled event type";

  useEffect(() => {
    // If the data has an eventType, update the lastValidData state
    if (hasEventType) {
      setLastValidData(websocketData);
    }
  }, [hasEventType, websocketData]);

  console.log(websocketData, 'websockdata withint websocket div')

  return (
    <div className="text-xl font-bold border-yellow-200 border-2 overflow-x-auto whitespace-nowrap">
      {hasEventType ? (
        <div className="text-red-700 inline-block mr-4">
          {Object.keys(websocketData).map((key) => (
            <div key={key}>
              {key}: {websocketData[key]}
            </div>
          ))}
        </div>
      ) : lastValidData ? (
        <div className="text-red-700 inline-block mr-4">
          {Object.keys(lastValidData).map((key) => (
            <div key={key}>
              {key}: {lastValidData[key]}
            </div>
          ))}
        </div>
      ) : (
        <div>WebSocket Data Will Appear Here</div>
      )}
    </div>
  );
}

export default WebSocketDataDiv;
