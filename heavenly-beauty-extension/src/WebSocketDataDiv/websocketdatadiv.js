import React, { useState, useEffect } from "react";

function WebSocketDataDiv(props) {
  const { websocketData } = props;
  const [dataQueue, setDataQueue] = useState([]);

  useEffect(() => {
    if (websocketData.message !== "Default message for unhandled event type") {
      // Add new data to the front of the queue
      setDataQueue((prevQueue) => [websocketData, ...prevQueue]);
    }
  }, [websocketData]);

  const containerStyle = {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    animation: "scroll 20s linear infinite", // Adjust the animation duration as needed
  };

  const contentStyle = {
    display: "inline-block",
  };

  const itemStyle = {
    marginRight: "10px", // Adjust spacing between items
  };

  return (
    <div className="text-xl font-bold border-yellow-200 border-2 overflow-hidden">
      <div className="text-red-700 inline-block" style={containerStyle}>
        {dataQueue.length > 0 ? (
          <div style={contentStyle}>
            {dataQueue.map((data, index) => (
              <div
                key={index}
                style={itemStyle}
                className="scroll-item"
              >
                {Object.keys(data).map((key) => (
                  <div key={key}>
                    {key}: {data[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div>WebSocket Data Will Appear Here</div>
        )}
      </div>
    </div>
  );
}

export default WebSocketDataDiv;
