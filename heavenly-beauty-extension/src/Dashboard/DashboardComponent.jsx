import React from "react";
import "./Dashboard.css";
import { useState } from "react";
import WebSocketDataDiv from "../WebSocketDataDiv/websocketdatadiv";
import Splash from "../Components/Splash";
import TrackrMain from "../Components/TrackrMain";

function Dashboard() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [trackrActive, setTrackrActive] = useState(false);

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
    <div className="bg-purple-300 h-full">
      {!trackrActive && <Splash function={handleButtonClick} />}
      {trackrActive && <TrackrMain eventId={selectedMatch} />}
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
