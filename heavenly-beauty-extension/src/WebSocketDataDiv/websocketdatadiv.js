import React from "react";

function WebSocketDataDiv(props) {
  const { websocketData } = props;

  return (
    <div className="text-xl font-bold border-yellow-200 border-2 overflow-x-auto whitespace-nowrap">
      {Object.entries(websocketData).map(([key, value], index) => (
        <div key={index} className="text-red-700 inline-block mr-4">
          {key}: {JSON.stringify(value)}
        </div>
      ))}
      {Object.keys(websocketData).length === 0 && (
        <div>WebSocket Data Will Appear Here</div>
      )}
    </div>
  );
}

export default WebSocketDataDiv;
