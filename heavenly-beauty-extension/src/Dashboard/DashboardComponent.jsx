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
    // <div className="h-full w-full">
    //   <div className={`flex flex-col gap-1 bg-purple-400 h-full`}>
    //     <div className={`h-full w-full`}>
    //       <h1 className="text-sm w-full text-center">
    //         DotA The International 2022
    //       </h1>
    //       <div className="flex text-green-400 font-semibold rounded-md w-full h-full items-center m-auto justify-evenly z-50">
    //         {matchMap &&
    //           Object.keys(matchMap).map((key) => {
    //             let len = Object.keys(matchMap).length + 1;
    //             return (
    //               <button
    //                 className={`border rounded-md w-1/${len} h-2/3`}
    //                 key={key}
    //                 onClick={() => handleButtonClick(key)}
    //               >
    //                 {matchMap[key]}
    //               </button>
    //             );
    //           })}
    //       </div>
    //     </div>
    //     <div className="w-full h-full bottom-0">
    //       {selectedMatch && <WebSocketDataDiv matchId={selectedMatch} />}
    //     </div>
    //   </div>
    // </div>
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
