import React from "react";
import WebSocketDataDiv from "../WebSocketDataDiv/websocketdatadiv";
import TrackrTeamBoard from "./TrackrTeamBoard";

export default function TrackrMain(props) {
  return (
    <div className="h-full w-full flex flex-col overflow-visible">
      <TrackrTeamBoard exit={props.closeFunction} />
      <WebSocketDataDiv matchId={props.eventId} />
    </div>
  );
}
