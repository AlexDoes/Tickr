import React from "react";
import { useState } from "react";
export default function Splash() {
  const [selectedMatch, setSelectedMatch] = useState(2432453);
  let matchMap = {
    2432453: "Finals",
    2364966: "Semifinals",
    2432302: "Semifinals2",
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full bg-purple-300 flex flex-row">
      <div className="text-xl text-center w-1/5">
        <img src="../icon3.png" className="w-full h-full"></img>
      </div>
      <div className="text-xl text-center w-3/5 border-red-300 border">
        Tickr is a chrome extension that allows you to track the state of live
        DotA tournaments with ease. Showcasing the state of game, heat maps, and
        stats all across the board.
      </div>
      <div className="text-xl text-center w-1/5">
        <ul>
          <li>Finals</li>
          <li>Semifinals Upper Bracket</li>
          <li>Semifinals Lower Bracket</li>
        </ul>
      </div>
    </div>
  );
}
