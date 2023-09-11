import React, { useRef, useEffect } from "react";

function WebSocketDataDiv(props) {
  const { matchId: eventId, websocketData } = props;

  const messages = websocketData && typeof websocketData === 'object'
    ? Object.entries(websocketData)
    : [];

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Scroll the container all the way to the right
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [messages]);

  return (
    <div 
      ref={containerRef}
      id="websocketDataDiv"
      className="text-xl font-bold border-yellow-200 border-2 overflow-x-auto whitespace-nowrap"
    >
      {messages.length > 0 ? (
        messages.map(([key, value], index) => (
          <div key={index} className="text-red-700 inline-block mr-4">
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
