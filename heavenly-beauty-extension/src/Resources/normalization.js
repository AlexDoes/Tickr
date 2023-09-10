// const normalizeTime = (number) => {
//   return number < 10 ? "0" + number : number;
// };

// const messageTimestamp = new Date(message.data.occurredAt);
// const hours = normalizeTime(messageTimestamp.getHours());
// const minutes = normalizeTime(messageTimestamp.getMinutes());
// const seconds = normalizeTime(messageTimestamp.getSeconds());
// const formattedTimestamp = `${hours}:${minutes}:${seconds}`;
const gridNormalizer = (event) => {
  const actor = event.actor.state.game.name;
  const position = event.actor.state.game.position;
  return { type: event.type, actor: actor, position: position };
};

const eventHandlers = {
  "tournament-started-series": {
    message: (event, formattedTimestamp) => {
      const [team1, team2] = event.actor.state.teams;
      const format = event.actor.state.format;
      return {
        [formattedTimestamp]: `${team1} and ${team2} started a ${format} series`,
      };
    },
  },
  "team-picked-character": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} picked ${target}` };
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
        [formattedTimestamp]: `${team1.name} and ${team2.name} started a game in thier ${format} series`,
      };
    },
  },
  "player-acquired-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} acquired ${target}` };
    },
  },
  "player-equipped-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} equipped ${target}` };
    },
  },
  "player-unequipped-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} unequipped ${target}`,
      };
    },
  },
  "player-stashed-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} stashed ${target}` };
    },
  },
  "player-unstashed-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} unstashed ${target}` };
    },
  },
  "player-lost-item": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return { [formattedTimestamp]: `${actor} lost ${target}` };
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
      return { [formattedTimestamp]: `${actor} killed themself` };
    },
  },
  "game-respawned-player": {
    message: (event, formattedTimestamp) => {
      const target = event.target.state.game.name;
      return { [formattedTimestamp]: `${target} respawned` };
    },
  },
  "game-respawned-roshan": {
    message: (event, formattedTimestamp) => {
      return { [formattedTimestamp]: `Roshan respawned` };
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
  "team-destroyed-tower": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "team-destroyed-barracksMelee": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "team-destroyed-barracksRange": {
    message: (event, formattedTimestamp) => {
      const actor = event.actor.state.game.name;
      const target = event.target.id;
      return {
        [formattedTimestamp]: `${actor} destroyed ${target}`,
      };
    },
  },
  "team-destroyed-ancient": {
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

export { eventHandlers, gridNormalizer };
