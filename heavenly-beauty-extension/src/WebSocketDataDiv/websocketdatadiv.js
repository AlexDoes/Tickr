import React, { useState, useEffect } from "react";
import "../App.css";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const FILTEREDEVENTTYPES = [
  "player-acquired-item",
  "player-equipped-item",
  "player-unequipped-item",
  "player-stashed-item",
  "player-unstashed-item",
  "player-lost-item",
];

const SUPPORTEDEVENTTYPES = [
  "grid-started-feed",
  "grid-sampled-feed",
  "grid-sampled-tournament",
  "grid-sampled-series",
  "grid-invalidated-series",
  "grid-validated-series",
  "grid-ended-feed",
  "player-left-series",
  "player-rejoined-series",
  "tournament-started-series",
  "team-picked-character",
  "team-banned-character",
  "series-started-game",
  "player-acquired-item",
  "player-equipped-item",
  "player-unequipped-item",
  "player-stashed-item",
  "player-unstashed-item",
  "player-lost-item",
  "player-killed-player",
  "player-multikilled-player",
  "player-teamkilled-player",
  "player-selfkilled-player",
  "team-killed-player",
  "game-killed-player",
  "game-respawned-player",
  "game-respawned-roshan",
  "player-selfrevived-player",
  "player-killed-roshan",
  "team-killed-roshan",
  "player-completed-increaseLevel",
  "player-completed-slayRoshan",
  "team-completed-slayRoshan",
  "player-completed-destroyTower",
  "team-completed-destroyTower",
  "player-completed-destroyBarracksMelee",
  "team-completed-destroyBarracksMelee",
  "player-completed-destroyBarracksRange",
  "player-completed-destroyAncient",
  "team-completed-destroyBarracksRange",
  "team-completed-destroyAncient",
  "player-captured-outpost",
  "team-captured-outpost",
  "player-destroyed-tower",
  "player-destroyed-barracksMelee",
  "player-destroyed-barracksRange",
  "player-destroyed-ancient",
  "team-destroyed-tower",
  "team-destroyed-barracksMelee",
  "team-destroyed-barracksRange",
  "team-destroyed-ancient",
  "team-won-game",
  "series-ended-game",
  "team-won-series",
  "tournament-ended-series",
  "game-set-clock",
  "game-started-clock",
  "game-stopped-clock",
  "game-set-respawnClock",
  "game-started-respawnClock",
  "game-stopped-respawnClock",
  "series-paused-game",
  "series-resumed-game",
];

function WebSocketDataDiv(props) {
  const eventId = props.matchId;
  const [data, setData] = useState(null);
  const messageQueue = new Queue();
  const [timestamp, setTimestamp] = useState([]);
  const [events, setEvents] = useState({});

  useEffect(() => {
    // Check if chrome and chrome.runtime are defined
    if (typeof chrome !== "undefined" && chrome.runtime) {
      // Listen for messages from the background script
      chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "updateWebSocketData") {
          const messageTimestamp = new Date(message.data.occurredAt);
          const hours = normalizeTime(messageTimestamp.getHours());
          const minutes = normalizeTime(messageTimestamp.getMinutes());
          const seconds = normalizeTime(messageTimestamp.getSeconds());
          const formattedTimestamp = `${hours}:${minutes}:${seconds}`;

          const messageEvents = message.data.events.map((event) => {
            const singleEvent = { [formattedTimestamp]: event.type }; // TIMESTAMP: EVENTTYPE
            // if (!FILTEREDEVENTTYPES.includes(event.type)) {
            // messageQueue.enqueue(singleEvent);
            // }
            return singleEvent;
          });
          console.log(messageEvents);
          // messageEvents.forEach((singleEvent) => {
          if (!FILTEREDEVENTTYPES.includes(message.data.events[0].type)) {
            messageQueue.enqueue(messageEvents);
          }
          // });
        }
      });
    }

    const intervalId = setInterval(() => {
      if (!messageQueue.isEmpty()) {
        setData(messageQueue.dequeue());
      }
    }, getAverageTimeGap(timestamp) / 3);

    return () => clearInterval(intervalId);
  }, []);

  const normalizeTime = (number) => {
    return number < 10 ? "0" + number : number;
  };

  const getAverageTimeGap = (timestamps) => {
    if (timestamps.length <= 1) return 1000;

    let totalGap = 0;
    for (let i = 1; i < timestamps.length; i++) {
      totalGap +=
        new Date(timestamps[i]).getTime() -
        new Date(timestamps[i - 1]).getTime();
    }
    return totalGap / (timestamps.length - 1);
  };

  const divStyle = {
    overflowY: "auto",
    overflowX: "hidden", // Hide horizontal overflow
    maxHeight: "100%",
    maxWidth: "100%",
    padding: "10px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    wordBreak: "break-all",
    backgroundColor: "#388087",
    color: "#F6F6F2",
    transition: "transform .3s ease-in-out",
    transform: "translateX(0%)",
  };

  const secondDivStyle = {
    zIndex: "1000",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "50%",
    height: "50%",
    backgroundColor: "cyan",
    overflowY: "auto",
  };

  return (
    <>
      <div
        id="websocketDataDiv"
        style={divStyle}
        className="text-xl font-bold border-yellow-200 border-2"
      >
        {data
          ? data.map((event) => {
              return (
                <div className="text-red-700">
                  {Object.entries(event).map(([timestamp, eventType]) => {
                    return (
                      <div>
                        {timestamp}: {eventType}
                      </div>
                    );
                  })}
                </div>
              );
            })
          : `WebSocket Data Will Appear Here ${eventId}`}
      </div>
    </>
  );
}

export default WebSocketDataDiv;
