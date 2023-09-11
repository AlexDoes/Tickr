import React, { useEffect, useState } from "react";
import WebSocketComponent from "../WebSocketDataDiv/websocketcomponent";
import WebSocketDataDiv from "../WebSocketDataDiv/websocketdatadiv";
import TrackrTeamBoard from "./TrackrTeamBoard";

export default function TrackrMain(props) {
  const [websocketData, setWebSocketData] = useState(null);
  const [showWebSocket, setShowWebSocket] = useState(true);

  const updateWebSocketData = (data) => {
     setWebSocketData(data);
  };

  const toggleWebSocketVisibility = () => {
     setShowWebSocket(prevState => !prevState);
  };

  useEffect(() => {
    function handleHide() {
       setShowWebSocket(false); 
    }
 
    window.addEventListener('hideWebSocketComponent', handleHide);
    return () => window.removeEventListener('hideWebSocketComponent', handleHide);
 }, []);

  const teams = [
    {
      kills: 52,
      deaths: 12,
      assists: 43,
      name: "team1",
      players: [
        {
          name: "Player 1",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 2",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 3",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 4",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 5",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      kills: 52,
      deaths: 12,
      assists: 43,
      name: "team2",
      players: [
        {
          name: "Player 6",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 7",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 8",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 9",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
        {
          name: "Player 10",
          money: "255",
          kills: "10",
          deaths: "5",
          assists: "2",
          items: [1, 2, 3, 4, 5],
        },
      ],
    },
  ];

  return (
    <div className="h-full w-full flex flex-col overflow-visible">
      {showWebSocket && <WebSocketComponent onDataReceived={updateWebSocketData} />}
      <TrackrTeamBoard exit={props.handleExit} teams={teams} websocketData={websocketData}/>
      <WebSocketDataDiv matchId={props.eventId} websocketData={websocketData} />
    </div>
  );
}