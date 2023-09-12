import React, { useEffect, useState } from "react";
import WebSocketComponent from "../WebSocketDataDiv/websocketcomponent";
import WebSocketDataDiv from "../WebSocketDataDiv/websocketdatadiv";
import TrackrTeamBoard from "./TrackrTeamBoard";
import { messageHandlers, stateNormalizer } from "../Resources/normalization";

function parseWebSocketData(data) {
  try {
    // console.log("Received WebSocket data:", data);

    if (
      !data ||
      !data.events ||
      !Array.isArray(data.events) ||
      data.events.length === 0 ||
      !data.occurredAt
    ) {
      return { message: "Default message for missing or invalid data" };
    }

    const formattedTimestamp = formatTimestamp(data.occurredAt);
    const firstEvent = data.events[0];

    // console.log("First event:", firstEvent);

    if (!firstEvent || !firstEvent.type) {
      return { message: "Default message for unhandled event type" };
    }

    // if (firstEvent && !firstEvent.type) {
    //   console.log("first event", firstEvent);
    // }

    const eventType = firstEvent.type;

    // console.log("Event type:", eventType);

    if (messageHandlers[eventType] !== undefined) {
      // const formattedData = messageHandlers[eventType].message(
      //   firstEvent,
      //   formattedTimestamp
      // );
      // console.log("firstEvent-------------------------", firstEvent);

      const formattedData = stateNormalizer(firstEvent);

      console.log(
        formattedData,
        "formattedData-----------------------------------------------------"
      );
      return formattedData;
    }

    return { message: "Default message for unhandled event type" };
  } catch (error) {
    console.error("An error occurred while parsing WebSocket data:", error);
    return { message: "Error Message" };
  }
}

function formatTimestamp(timestamp) {
  if (!timestamp) return ""; // Handle cases where timestamp is not available
  const date = new Date(timestamp);
  const hours = normalizeTime(date.getHours());
  const minutes = normalizeTime(date.getMinutes());
  const seconds = normalizeTime(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function normalizeTime(number) {
  return number < 10 ? "0" + number : number;
}

export default function TrackrMain(props) {
  const [websocketData, setWebSocketData] = useState(null);
  const [showWebSocket, setShowWebSocket] = useState(true);

  const updateWebSocketData = (data) => {
    setWebSocketData(data);
  };

  const toggleWebSocketVisibility = () => {
    setShowWebSocket((prevState) => !prevState);
  };

  useEffect(() => {
    function handleHide() {
      setShowWebSocket(false);
    }

    window.addEventListener("hideWebSocketComponent", handleHide);
    return () =>
      window.removeEventListener("hideWebSocketComponent", handleHide);
  }, []);

  return (
    <div className="h-full w-full flex flex-col overflow-visible">
      {showWebSocket && (
        <WebSocketComponent onDataReceived={updateWebSocketData} />
      )}
      <TrackrTeamBoard
        exit={props.handleExit}
        teams={teams}
        websocketData={websocketData}
      />
      {/* <WebSocketDataDiv
        matchId={props.eventId}
        websocketData={parseWebSocketData(websocketData)}
      /> */}
    </div>
  );
}
