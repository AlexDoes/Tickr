import React from "react";
import "./Dashboard.css";
import { useState } from "react";
import WebSocketDataDiv from "../WebSocketDataDiv/websocketdatadiv";
import Splash from "../Components/Splash";
import TrackrMain from "../Components/TrackrMain";

function Dashboard() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [trackrActive, setTrackrActive] = useState(false);
  // const [webSocketData, setWebSocketData] = useState(null); // WebSocket data state

  // useEffect(() => {
  //   // Check if chrome and chrome.runtime are defined
  //   if (typeof chrome !== "undefined" && chrome.runtime) {
  //     // Create a WebSocket connection here and set up event listeners
  //     const socket = new WebSocket("YOUR_WEBSOCKET_URL");

  //     socket.addEventListener("open", () => {
  //       console.log("WebSocket connection opened.");
  //     });

  //     socket.addEventListener("message", (event) => {
  //       const message = JSON.parse(event.data);

  //       // Process the message and update the webSocketData state
  //       // You can follow a similar approach as in your WebSocketDataDiv component

  //       const newWebSocketData = processWebSocketMessage(message);
  //       setWebSocketData(newWebSocketData);
  //     });

  //     socket.addEventListener("close", () => {
  //       console.log("WebSocket connection closed.");
  //     });

  //     // Make sure to close the WebSocket when the component unmounts
  //     return () => {
  //       socket.close();
  //     };
  //   }
  // }, []); // Run this effect only once when the component mounts


  let matchMap = {
    2432453: "Finals",
    2364966: "Semifinals",
    2432302: "Semifinals2",
  };

  const handleButtonClick = (key) => {
    setSelectedMatch(key);
    setTrackrActive(true);
  };

  const handleExit = () => {
    setSelectedMatch(null);
    setTrackrActive(false);
  };

  return (
    <div className="h-full text-md bg-gradient-to-r from-slate-600 via-slate-900 to-slate-700 text-[#D1D1D1]">
      {!trackrActive && <Splash function={handleButtonClick} />}
      {trackrActive && (
        <TrackrMain eventId={selectedMatch} closeFunction={handleExit} />
      )}
      {/* {selectedMatch && <p>Event Id Selected from Splash - {selectedMatch}</p>} */}
    </div>
  );
}

export default Dashboard;
//Final
// ID: 2432453
// Semifinals
// ID: 2364966
// ID: 2432302
