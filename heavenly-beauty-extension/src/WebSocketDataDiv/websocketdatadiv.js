import React, { useState, useEffect, useRef } from "react";

function WebSocketDataDiv(props) {
  const { websocketData } = props;
  const [messages, setMessages] = useState([]); // initialize with an empty array
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    // Check if websocketData has content before updating messages
    if (websocketData && websocketData.message !== 'Default message for missing or invalid data') { // Ensure there's a valid message
      // Add the new websocketData to the messages array
      setMessages(prevMessages => [...prevMessages, websocketData]);

      // Scroll to the end of the container
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollLeft = messagesContainerRef.current.scrollWidth;
      }
    }
  }, [websocketData]);

  return (
    <div className="text-xl font-bold border-yellow-200 border-2 overflow-hidden">
      <div
        ref={messagesContainerRef}
        className="text-red-700 whitespace-nowrap flex overflow-x-hidden animate-scroll-left"
        style={{
          marginLeft: "-10px", // Add margin to the left
          marginRight: "-10px", // Add margin to the right
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className="mr-4" style={{ margin: "0 20px" }}>
            {/* Add margin to each message */}
            {Object.keys(message).map((key) => (
              <div key={key}>
                {key}: {message[key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


export default WebSocketDataDiv;
