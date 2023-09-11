import React from "react";
import WebSocketDataDiv from "../WebSocketDataDiv/websocketdatadiv";
import TrackrTeamBoard from "./TrackrTeamBoard";

export default function TrackrMain(props) {
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
      <TrackrTeamBoard exit={props.handleExit} teams={teams} />
      <WebSocketDataDiv matchId={props.eventId} />
    </div>
  );
}
