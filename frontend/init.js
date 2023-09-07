// Establish the WebSocket connection
const supportedEventTypes = [
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
const socket = new WebSocket("ws://localhost:8080/2364966");
const array = [];
socket.onopen = function (e) {
  console.log("[open] Connection established to localhost:8080");
};

socket.onmessage = function (event) {
  // console.log(`[message] Data received from server: ${event.data}`);
  const cleanData = JSON.parse(event.data);
  console.log(cleanData);
  //   const eventObject = cleanData.events;
  //   for (let singleEvent of eventObject.events) {
  //     if (singleEvent.type === "player-killed-player") {
  //       array.push(singleEvent);
  //     }
  //   }
  //   console.log(array);
};

socket.onerror = function (error) {
  console.log(`[error] ${error.message}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code}, reason=${event.reason}`
    );
  } else {
    console.log("[close] Connection died");
  }
};

// Add any other functionality you might want, e.g., sending data, processing incoming data, etc.
