// const normalizeTime = (number) => {
//   return number < 10 ? "0" + number : number;
// };

// const messageTimestamp = new Date(message.data.occurredAt);
// const hours = normalizeTime(messageTimestamp.getHours());
// const minutes = normalizeTime(messageTimestamp.getMinutes());
// const seconds = normalizeTime(messageTimestamp.getSeconds());
// const formattedTimestamp = `${hours}:${minutes}:${seconds}`;
// const gridNormalizer = (event) => {
//   const actor = event.actor.state.game.name;
//   const position = event.actor.state.game.position;
//   return { type: event.type, actor: actor, position: position };
// };

const messageHandlers = {
  "tournament-started-series": {
    message: (event, formattedTimestamp) => {
      // console.log(event, "event inside messageHandler---------------------------------------")
      const { teams, format } = event.target.state; // Access properties within target.state

      if (teams && teams.length >= 2) {
        const [team1, team2] = teams; // Destructure the first two teams

        // Access the 'name' property within each team object
        const team1Name = team1.name;
        const team2Name = team2.name;

        return {
          [formattedTimestamp]: `${team1Name} and ${team2Name} started a ${format} series`,
        };
      } else {
        return {}; // Handle the case where there are not enough teams
      }
    },
  },

  "team-picked-character": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} picked ${target}` };
    },
  },
  "player-acquired-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.name; // This will be "Puppey"
      const target = event.target.id; // This will be "item_enchanted_mango"
      return { [formattedTimestamp]: `${actor} picked ${target}` };
    },
  },

  "player-equipped-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.name; // This will be "Puppey"
      const target = event.target.id; // This will be "item_enchanted_mango"
      return { [formattedTimestamp]: `${actor} equipped ${target}` };
    },
  },
  "team-banned-character": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} banned ${target}` };
    },
  },
  "series-started-game": {
    message: (event, formattedTimestamp) => {
      const [team1, team2] = event.actor.state.teams;
      const format = event.actor.state.format;
      return {
        [formattedTimestamp]: `${team1.name} and ${team2.name} started a game in their ${format} series`,
      };
    },
  },
  "player-killed-player": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.state.game.name;
      return { [formattedTimestamp]: `${actor} killed ${target}` };
    },
  },
  "player-multikilled-player": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      return { [formattedTimestamp]: `${actor} got a multikill!` };
    },
  },
  "player-teamkilled-player": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      return { [formattedTimestamp]: `${actor} got a team kill!` };
    },
  },
  "player-selfkilled-player": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      return { [formattedTimestamp]: `${actor} denied` };
    },
  },
  "game-respawned-player": {
    message: (event, formattedTimestamp) => {
      const target = event.target.state.game.name;
      return { [formattedTimestamp]: `${target} respawned` };
    },
  },
  "player-selfrevived-player": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      return { [formattedTimestamp]: `${actor} self-revived` };
    },
  },
  "player-killed-roshan": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      return { [formattedTimestamp]: `${actor} killed Roshan` };
    },
  },
  "player-captured-outpost": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      const side = event.target.state.side;
      return {
        [formattedTimestamp]: `${actor} captured ${side} ${target}`,
      };
    },
  },
  "player-destroyed-tower": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "player-destroyed-barracksMelee": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "player-destroyed-barracksRange": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "player-destroyed-ancient": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "player-completed-increaseLevel": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const level = event.actor.state.game.objectives[0].completionCount + 1;
      return {
        [formattedTimestamp]: `${actor} leveled up to ${level}`,
      };
    },
  },
  "team-won-game": {
    message: (event, formattedTimestamp) => {
      const teams = event.target.state.teams;
      let winningTeam;
      let losingTeam;
      if (teams[0].won) {
        winningTeam = teams[0];
        losingTeam = teams[1];
      } else {
        winningTeam = teams[1];
        losingTeam = teams[0];
      }
      return {
        [formattedTimestamp]: `${winningTeam.name} won in thier game against ${losingTeam.name}`,
      };
    },
  },
  // Add other event types and their handlers here...
  default: {
    message: (event, formattedTimestamp) => {
      // console.log({ [formattedTimestamp]: event.type });
      return { [formattedTimestamp]: event.type };
    },
  },
};

const stateNormalizer = (event) => {
  const games = event.seriesState.games;
  let teams;
  if (event.type === "tournament-started-series") {
    teams = event.target.state.teams;
  } else {
    teams = games[games.length - 1].teams;
  }
  // const game = games[games.length - 1];
  // const teams = game.teams;
  const normalizedTeams = [];
  for (const team of teams) {
    const players = [];
    for (const player of team.players) {
      const playerObj = {
        // alive: player.alive,
        // character: player.character.name,
        deaths: player.deaths,
        // items: [...player.items],
        assists: player.killAssistsGiven,
        kills: player.kills,
        money: player.money,
        netWorth: player.netWorth,
        name: player.name,
        position: player.position,
      };
      if (player.character?.name) {
        playerObj.character = player.character.name;
      }
      players.push(playerObj);
    }

    const obj = {
      name: team.name,
      side: team.side,
      kills: team.kills,
      deaths: team.deaths,
      assists: team.killAssistsReceived,
      money: team.money,
      players: players,
    };
    normalizedTeams.push(obj);
  }

  return {
    // clock: {
    //   ticking: game.clock.ticking,
    //   currentSeconds: game.clock.currentSeconds,
    // },
    teams: normalizedTeams,
  };
};

// teams: [
//   {
//     name,
//     kills,
//     deaths,
//     assists,
//     money,
//     players: [
//       {
//         alive,
//         character,
//         deaths,
//         items: [{
//           equipped,
//           id,
//           stashed
//         }],
//         assists,
//         kills,
//         money,
//         netWorth,
//         name,
//         position,
//       }
//     ]
//   }
// ]

export { stateNormalizer, messageHandlers };
