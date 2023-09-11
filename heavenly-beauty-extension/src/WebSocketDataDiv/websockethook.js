import { useEffect, useState } from "react";
import { eventHandlers, stateNormalizer } from "../Resources/normalization";

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
  "grid-started-feed",
  "grid-sampled-feed",
  "grid-sampled-tournament",
  "grid-sampled-series",
  "grid-invalidated-series",
  "grid-validated-series",
  "grid-ended-feed",
  "player-acquired-item",
  "player-equipped-item",
  "player-unequipped-item",
  "player-stashed-item",
  "player-unstashed-item",
  "player-lost-item",
  "game-set-clock",
  "game-started-clock",
  "game-stopped-clock",
  "game-set-respawnClock",
  "game-started-respawnClock",
  "game-stopped-respawnClock",
  "series-paused-game",
  "series-resumed-game",
];

const MESSAGEEVENTS = [
  "tournament-started-series",
  "team-picked-character",
  "team-banned-character",
  "series-started-game",
  "player-killed-player",
  "player-multikilled-player",
  "player-teamkilled-player",
  "player-selfkilled-player",
  "game-respawned-player",
  "player-selfrevived-player",
  "player-killed-roshan",
  "player-captured-outpost",
  "player-destroyed-tower",
  "player-destroyed-barracksMelee",
  "player-destroyed-barracksRange",
  "player-destroyed-ancient",
  "player-completed-increaseLevel",
  "team-won-game",
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

export function useWebSocketData() {
  const [data, setData] = useState(null);
  const messageQueue = new Queue();
  const [timestamp, setTimestamp] = useState([]);

  useEffect(() => {
    // Check if chrome and chrome.runtime are defined
    if (typeof chrome !== "undefined" && chrome.runtime) {
      // Listen for messages from the background script
      const messageListener = (message) => {
        if (message.action === "updateWebSocketData") {
          const messageTimestamp = new Date(message.data.occurredAt);
          const formattedTimestamp = formatTimestamp(messageTimestamp);

          const messageEvents = message.data.events.map((event) => {
            // const messageHandler =
            //   eventHandlers[event.type] || eventHandlers["default"];
            // const stateHandler = stateNormalizer(event);

            // return [
            //   messageHandler.message(event, formattedTimestamp),
            //   stateHandler,
            // ];
            return stateNormalizer(event, formattedTimestamp);
          });

          // if (MESSAGEEVENTS.includes(message.data.events[0].type)) {
          messageQueue.enqueue(messageEvents);
          setTimestamp((prevTimestamp) => [...prevTimestamp, messageTimestamp]);
          // }
        }
      };

      chrome.runtime.onMessage.addListener(messageListener);

      return () => {
        chrome.runtime.onMessage.removeListener(messageListener);
      };
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!messageQueue.isEmpty()) {
        setData(messageQueue.dequeue());
      }
    }, getAverageTimeGap(timestamp) / 3);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  const formatTimestamp = (timestamp) => {
    const hours = normalizeTime(timestamp.getHours());
    const minutes = normalizeTime(timestamp.getMinutes());
    const seconds = normalizeTime(timestamp.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  };

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

  return data;
}
