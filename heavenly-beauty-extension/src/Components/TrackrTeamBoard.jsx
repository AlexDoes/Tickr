import Heatmap from "../DataVisualization/Heatmap";
import { stateNormalizer } from "../Resources/normalization";
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
  // const [team1, team2] = props.teams;
  // const [player1, player2, player3, player4, player5] = team1.players;
  // const [player6, player7, player8, player9, player10] = team2.players;
  const [incomingEvent, setIncomingEvent] = useState(null);

  const [team1, setTeam1] = useState({});
  const [team2, setTeam2] = useState({});

  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [player3, setPlayer3] = useState({});
  const [player4, setPlayer4] = useState({});
  const [player5, setPlayer5] = useState({});
  const [player6, setPlayer6] = useState({});
  const [player7, setPlayer7] = useState({});
  const [player8, setPlayer8] = useState({});
  const [player9, setPlayer9] = useState({});
  const [player10, setPlayer10] = useState({});

  const websocketData = props.websocketData;
  // console.log(websocketData, "WEBSOCKET DATA IN TEAMBOARD");

  useEffect(() => {
    if (websocketData) {
      for (const event of websocketData.events) {
        console.log("event-----------------", event);
        if (
          event.type !== "grid-started-feed" &&
          event.type !== "grid-ended-feed"
        ) {
          const newState = stateNormalizer(event);
          console.log(newState);
          const teams = newState.teams;
          const [newTeam1, newTeam2] = teams;
          const [newPlayer1, newPlayer2, newPlayer3, newPlayer4, newPlayer5] =
            newTeam1.players;
          const [newPlayer6, newPlayer7, newPlayer8, newPlayer9, newPlayer10] =
            newTeam2.players;
          setTeam1(newTeam1);
          setTeam2(newTeam2);
          setPlayer1(newPlayer1);
          setPlayer2(newPlayer2);
          setPlayer3(newPlayer3);
          setPlayer4(newPlayer4);
          setPlayer5(newPlayer5);
          setPlayer6(newPlayer6);
          setPlayer7(newPlayer7);
          setPlayer8(newPlayer8);
          setPlayer9(newPlayer9);
          setPlayer10(newPlayer10);
        }

        if (actionList.has(event.type)) {
          // console.log(event, "EVENT");
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
          cardPosition={"top"}
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
          cardPosition={"bottom"}
        />
      </div>
      <div className="h-full border-yellow-200 w-[25%] flex justify-evenly items-center gap-1">
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <div className="teamname1 text-[#6aff74] py-2 text-[2rem] mt-3 ">
            {" "}
            {team1?.name}{" "}
          </div>
          <div className="text-[3rem] items-center h-full py-2 flex justify-center text-[#98ff88]">
            {team1?.kills}
          </div>
          <div className="text-[1.5rem] mb-2 text-[#e6ffc9] py-2">{`${team1?.kills}/${team1?.deaths}/${team1?.assists}`}</div>
        </div>
        <div className="w-[200px]">
          <Heatmap incomingEvent={incomingEvent} />
        </div>
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <div className="teamname2 text-[#ff6666] py-2 text-[2rem] mt-3">
            {" "}
            {team2?.name}{" "}
          </div>
          <div className="text-[3rem] items-center h-full py-2 flex justify-center text-[#ba3232]">
            {team2?.kills}
          </div>
          <div className="text-[1.5rem] mb-2 text-[#f4d8d8] py-2">{`${team2?.kills}/${team2?.deaths}/${team2?.assists}`}</div>
        </div>
      </div>
      <div className="flex flex-col  xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-[35%] h-full justify-evenly pb-2">
        <div className="text-center font-bold text-[#ff6666]  ">Dire</div>
        <TrackrTeamBoardCard
          player={player6}
          background={true}
          radiant={false}
          cardPosition={"top"}
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
          cardPosition={"bottom"}
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
