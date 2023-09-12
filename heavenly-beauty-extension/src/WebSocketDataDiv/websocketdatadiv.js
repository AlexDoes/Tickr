// // import React, { useState, useEffect, useRef } from "react";
// // const PLACEHOLDER_COUNT = 5; // Number of placeholder messages

// // function WebSocketDataDiv(props) {
// //   const { websocketData } = props;

// //   // Initialize with placeholder messages only once
// //   const [messages, setMessages] = useState(() => {
// //     // const initialPlaceholders = Array(PLACEHOLDER_COUNT).fill('----------------');
// //     const initialPlaceholders = [
// //       "THANK YOU FOR CHECKING OUT OUR EXTENSION",
// //       "PLEASE WAIT WHILE WE LOAD THE DATA!",
// //       "- TICKR DEVELOPER TEAM",
// //     ];
// //     return initialPlaceholders;
// //   });
// //   const messagesContainerRef = useRef(null);

// //   useEffect(() => {
// //     if (
// //       websocketData &&
// //       websocketData.message !== "Default message for missing or invalid data" &&
// //       websocketData.message !== "Starting ticker"
// //     ) {
// //       setMessages((prevMessages) => [...prevMessages, websocketData]);

// //       if (messagesContainerRef.current) {
// //         const element = messagesContainerRef.current;
// //         const targetScroll = element.scrollWidth;
// //         const speed = 140; // pixels per second
// //         const totalDistance = targetScroll - element.scrollLeft;
// //         const duration = (totalDistance / speed) * 1000; // Calculate how long it should take given the speed
// //         const start = performance.now();
// //         const startScroll = element.scrollLeft;

// //         function animate(time) {
// //           const timeFraction = (time - start) / duration;
// //           if (timeFraction > 1) return;

// //           const progress = timeFraction;
// //           const scrollAmount = progress * totalDistance;

// //           element.scrollLeft = startScroll + scrollAmount;

// //           requestAnimationFrame(animate);
// //         }

// //         requestAnimationFrame(animate);
// //       }
// //     }
// //   }, [websocketData]);

// //   return (
// //     <div className="text-xl font-bold border-yellow-200 overflow-hidden h-[5vh] flex items-center">
// //       <div
// //         ref={messagesContainerRef}
// //         className="text-[#e6dfdf] whitespace-nowrap flex overflow-x-hidden animate-scroll-left font-semibold"
// //         style={{
// //           marginLeft: "0px", // Add margin to the left
// //           marginRight: "0px", // Add margin to the right
// //         }}
// //       >
// //         {messages.map((message, index) => (
// //           <div key={index} className="mr-4" style={{ margin: "0 20px" }}>
// //             {/* Check if the message is a placeholder or an actual message */}
// //             {typeof message === "string" ? (
// //               <div>{message}</div>
// //             ) : (
// //               Object.keys(message).map((key) => (
// //                 <div key={key}>
// //                   {key}: {message[key]}
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default WebSocketDataDiv;

// import React, { useState, useEffect, useRef } from "react";

// function WebSocketDataDiv(props) {
//   const { websocketData } = props;

//   const initialPlaceholders = [
//     "THANK YOU FOR CHECKING OUT OUR EXTENSION",
//     "PLEASE WAIT WHILE WE LOAD THE DATA!",
//     "- HEAVENLY BEAUTY DEVELOPERS",
//   ];

//   const [messages, setMessages] = useState(initialPlaceholders);
//   const messagesContainerRef = useRef(null);
//   const lastScrollWidthRef = useRef(0); // This ref keeps track of the previous scroll width

//   const bufferedMessagesRef = useRef([]); // To buffer incoming messages
//   const isMountedRef = useRef(false); // To ensure side-effects run only when component is mounted

//   useEffect(() => {
//     isMountedRef.current = true;

//     const updateInterval = setInterval(() => {
//       if (bufferedMessagesRef.current.length > 0) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           ...bufferedMessagesRef.current,
//         ]);
//         bufferedMessagesRef.current = [];
//       }
//     }, 200); // Adjust as needed. 200ms means we'll update 5 times a second.

//     return () => {
//       isMountedRef.current = false;
//       clearInterval(updateInterval);
//     };
//   }, []);

//   useEffect(() => {
//     if (
//       websocketData &&
//       websocketData.message !== "Default message for missing or invalid data" &&
//       websocketData.message !== "Starting ticker"
//     ) {
//       // Add to our buffer instead of updating state directly
//       bufferedMessagesRef.current.push(websocketData);
//     }
//   }, [websocketData]);

//   useEffect(() => {
//     if (messagesContainerRef.current && isMountedRef.current) {
//       const element = messagesContainerRef.current;
//       element.scrollLeft = element.scrollWidth; // Directly set to the end
//     }
//   }, [messages]);

//   return (
//     <div className="text-xl font-bold border-yellow-200 overflow-hidden h-[5vh] flex items-center">
//       <div
//         ref={messagesContainerRef}
//         className="text-[#34c1c3] whitespace-nowrap flex overflow-x-hidden animate-scroll-left font-semibold"
//         style={{
//           marginLeft: "0px",
//           marginRight: "0px",
//         }}
//       >
//         {messages.map((message, index) => (
//           <div key={index} className="mr-4" style={{ margin: "0 20px" }}>
//             {typeof message === "string" ? (
//               <div>{message}</div>
//             ) : (
//               Object.keys(message).map((key) => (
//                 <div key={key}>
//                   {key}: {message[key]}
//                 </div>
//               ))
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WebSocketDataDiv;

import React, { useState, useEffect, useRef } from "react";

function WebSocketDataDiv(props) {
  const { websocketData } = props;

  const MAX_MESSAGES = 10; // Maximum number of messages to display

  const initialPlaceholders = [
    "THANK YOU FOR CHECKING OUT OUR EXTENSION",
    "PLEASE WAIT WHILE WE LOAD THE DATA!",
    "- HEAVENLY BEAUTY DEVELOPERS",
  ];

  const [messages, setMessages] = useState(initialPlaceholders);
  const messagesContainerRef = useRef(null);
  const bufferedMessagesRef = useRef([]); // To buffer incoming messages

  useEffect(() => {
    const updateInterval = setInterval(() => {
      if (bufferedMessagesRef.current.length > 0) {
        setMessages((prevMessages) => {
          // Combine the old messages with the buffered ones
          const combined = [...prevMessages, ...bufferedMessagesRef.current];
          // Slice to only include the last MAX_MESSAGES
          return combined.slice(-MAX_MESSAGES);
        });
        bufferedMessagesRef.current = [];
      }
    }, 200); // Adjust as needed. 200ms means we'll update 5 times a second.

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  useEffect(() => {
    if (
      websocketData &&
      websocketData.message !== "Default message for missing or invalid data" &&
      websocketData.message !== "Starting ticker"
    ) {
      bufferedMessagesRef.current.push(websocketData);
    }
  }, [websocketData]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const element = messagesContainerRef.current;
      element.scrollLeft = element.scrollWidth; // Directly set to the end
    }
  }, [messages]);

  return (
    <div className="text-xl font-bold border-yellow-200 overflow-hidden h-[5vh] flex items-center">
      <div
        ref={messagesContainerRef}
        className="text-[#34c1c3] whitespace-nowrap flex overflow-x-hidden animate-scroll-left font-semibold"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className="mr-4" style={{ margin: "0 20px" }}>
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
