import React, { useState, useEffect, useRef } from "react";

function WebSocketDataDiv(props) {
  const { websocketData } = props;
  const [messages, setMessages] = useState([]); // initialize with an empty array
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (websocketData &&
        websocketData.message !== 'Default message for missing or invalid data' &&
        websocketData.message !== 'Starting ticker') {

        setMessages(prevMessages => [...prevMessages, websocketData]);

        if (messagesContainerRef.current) {
            const element = messagesContainerRef.current;
            const targetScroll = element.scrollWidth;
            const speed = 140; // pixels per second
            const totalDistance = targetScroll - element.scrollLeft;
            const duration = totalDistance / speed * 1000; // Calculate how long it should take given the speed
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
