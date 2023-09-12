import React, { useState, useEffect, useRef } from "react";
const PLACEHOLDER_COUNT = 5; // Number of placeholder messages

function WebSocketDataDiv(props) {
  const { websocketData } = props;

  // Initialize with placeholder messages only once
  const [messages, setMessages] = useState(() => {
    // const initialPlaceholders = Array(PLACEHOLDER_COUNT).fill('----------------');
    const initialPlaceholders = [
      "THANK YOU FOR CHECKING OUT OUR EXTENSION",
      "PLEASE WAIT WHILE WE LOAD THE DATA!",
      "- HEAVENLY BEAUTY DEVELOPERS",
    ];
    return initialPlaceholders;
  });
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (
      websocketData &&
      websocketData.message !== "Default message for missing or invalid data" &&
      websocketData.message !== "Starting ticker"
    ) {
      setMessages((prevMessages) => [...prevMessages, websocketData]);

      if (messagesContainerRef.current) {
        const element = messagesContainerRef.current;
        const targetScroll = element.scrollWidth;
        const speed = 140; // pixels per second
        const totalDistance = targetScroll - element.scrollLeft;
        const duration = (totalDistance / speed) * 1000; // Calculate how long it should take given the speed
        const start = performance.now();
        const startScroll = element.scrollLeft;

        function animate(time) {
          const timeFraction = (time - start) / duration;
          if (timeFraction > 1) return;

          const progress = timeFraction;
          const scrollAmount = progress * totalDistance;

          element.scrollLeft = startScroll + scrollAmount;

          requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
      }
    }
  }, [websocketData]);

  return (
    <div className="text-xl font-bold border-yellow-200 overflow-hidden h-[5vh] flex items-center">
      <div
        ref={messagesContainerRef}
        className="text-red-600 whitespace-nowrap flex overflow-x-hidden animate-scroll-left"
        style={{
          marginLeft: "-10px", // Add margin to the left
          marginRight: "-10px", // Add margin to the right
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className="mr-4" style={{ margin: "0 20px" }}>
            {/* Check if the message is a placeholder or an actual message */}
            {typeof message === "string" ? (
              <div>{message}</div>
            ) : (
              Object.keys(message).map((key) => (
                <div key={key}>
                  {key}: {message[key]}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebSocketDataDiv;
