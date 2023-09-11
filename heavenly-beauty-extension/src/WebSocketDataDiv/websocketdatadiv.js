import React from "react";

function WebSocketDataDiv(props) {
  const eventId = props.matchId;
  const websocketData = props.websocketData; 

  console.log(websocketData, '---------------------------------------');

  return (
    <div id="websocketDataDiv" className="text-xl font-bold border-yellow-200 border-2">
      {websocketData && typeof websocketData === 'object' && Object.keys(websocketData).length ? (
        Object.entries(websocketData).map(([key, value], index) => (
          <div key={index} className="text-red-700">
            {key}: {JSON.stringify(value)}
          </div>
        ))
      ) : (
        `WebSocket Data Will Appear Here ${eventId}`
      )}
    </div>
  );  
}

export default WebSocketDataDiv;
