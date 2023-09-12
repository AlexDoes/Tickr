import Heatmap from "../DataVisualization/Heatmap";
import TrackrTeamBoardCard from "./TrackrTeamBoardCard";
// import { useWebSocketData } from "../WebSocketDataDiv/websockethook.js"; // Import the custom hook
import { useEffect, useState } from "react";

const actionList = new Set([
  "destroyed",
  "killed",
  "multikilled",
  "selfrevived",
  "captured",
  "player-killed-player",
  "player-multikilled-player",
  "player-teamkilled-player",
  "player-selfkilled-player",
  "player-selfrevived-player",
  "player-killed-roshan",
  "player-captured-outpost",
  "player-destroyed-tower",
  "player-destroyed-barracksMelee",
  "player-destroyed-barracksRange",
  "player-destroyed-ancient",
]);

export default function TrackrTeamBoard(props) {
  const [team1, team2] = props.teams;
  const [player1, player2, player3, player4, player5] = team1.players;
  const [player6, player7, player8, player9, player10] = team2.players;
  const [incomingEvent, setIncomingEvent] = useState(null);

  const websocketData = props.websocketData;
  console.log(websocketData, "WEBSOCKET DATA IN TEAMBOARD");

  useEffect(() => {
    if (websocketData) {
      for (const event of websocketData.events) {
        if (actionList.has(event.type)) {
          console.log(event, "EVENT");
          let pos;
          if (
            event.type === "player-killed-player" ||
            event.type === "player-multikilled-player" ||
            event.type === "player-teamkilled-player" ||
            event.type === "player-selfkilled-player" ||
            event.type === "player-selfrevived-player"
          ) {
            pos = event.target.state.game.position;
          } else {
            pos = event.target.state.position;
          }
          const newEvent = {
            x: pos.x,
            y: pos.y,
            eventType: event.action,
          };
          setIncomingEvent(newEvent);
          console.log(newEvent, "NEW EVENT NEW EVENT NEW EVENT");
        }
      }
    }
  }, [websocketData]);

  return (
    <div className="h-full w-full flex flex-row border-red-700 justify-evenly xs:text-sm lg:text-lg xl:text-xl relative">
      <div className="flex flex-col xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-[35%] h-full justify-evenly pb-2">
        <div className="text-center font-bold text-[#37ff44]">Radiant</div>
        <TrackrTeamBoardCard
          player={player1}
          background={true}
          radiant={true}
        />
        <TrackrTeamBoardCard
          player={player2}
          background={false}
          radiant={true}
        />
        <TrackrTeamBoardCard
          player={player3}
          background={true}
          radiant={true}
        />
        <TrackrTeamBoardCard
          player={player4}
          background={false}
          radiant={true}
        />
        <TrackrTeamBoardCard
          player={player5}
          background={true}
          radiant={true}
        />
      </div>
      <div className="h-full border-yellow-200 w-[25%] flex justify-evenly items-center gap-1">
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <p className="teamname1 text-[#6aff74] py-2 text-[2rem] mt-3 ">
            {" "}
            {team1.name}{" "}
          </p>
          <p className="text-[3rem] items-center h-full py-2 flex justify-center text-[#98ff88]">
            {team1.kills}
          </p>
          <p className="text-[1.5rem] mb-2 text-[#e6ffc9] py-2">{`${team1.kills}/${team1.deaths}/${team1.assists}`}</p>
        </div>
        <div className="w-[200px] h-full">
          <Heatmap incomingEvent={incomingEvent} />
        </div>
        {/* <img
          className="h-full w-[h-full]"
          src="https://private-user-images.githubusercontent.com/91306408/266902749-81d2faa9-f0cb-4a5d-b095-fd3b6fda51ae.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0NTkxODQsIm5iZiI6MTY5NDQ1ODg4NCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI3NDktODFkMmZhYTktZjBjYi00YTVkLWIwOTUtZmQzYjZmZGE1MWFlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTExVDE5MDEyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdiZWFhMzY3NWU2OWQ0ZjI5ZjZkNTkxZDQ2MmVkYTQzYTRlODdlNDAxY2VjNDQzNDhiZGNlNDAxYzNkMmNkNDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.XksyyDYhCZZDSJGCTD0pf7XVpWDWUSg7kQjdDiJHRRE"
        ></img> */}
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <p className="teamname2 text-[#ff6666] py-2 text-[2rem] mt-3">
            {" "}
            {team2.name}{" "}
          </p>
          <p className="text-[3rem] items-center h-full py-2 flex justify-center text-[#ba3232]">
            {team2.kills}
          </p>
          <p className="text-[1.5rem] mb-2 text-[#f4d8d8] py-2">{`${team2.kills}/${team2.deaths}/${team2.assists}`}</p>
        </div>
      </div>
      <div className="flex flex-col  xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-[35%] h-full justify-evenly pb-2">
        <div className="text-center font-bold text-[#ff6666]  ">Dire</div>
        <TrackrTeamBoardCard
          player={player6}
          background={true}
          radiant={false}
        />
        <TrackrTeamBoardCard
          player={player7}
          background={false}
          radiant={false}
        />
        <TrackrTeamBoardCard
          player={player8}
          background={true}
          radiant={false}
        />
        <TrackrTeamBoardCard
          player={player9}
          background={false}
          radiant={false}
        />
        <TrackrTeamBoardCard
          player={player10}
          background={true}
          radiant={false}
        />
      </div>
      {/* <button
        className="absolute top-1 right-2 border p-1 rounded-lg px-1.5 text-xs text-cyan-400 border-cyan-300 hover:text-red-300 hover:border-red-300"
        onClick={props.exit}
      >
        x
      </button> */}
    </div>
  );
}
