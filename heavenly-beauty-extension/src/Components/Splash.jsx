import React from "react";
import { useState } from "react";
import Dropdown from "react-dropdown";
export default function Splash(props) {
  const selectGame = props.function;
  const [selectedMatch, setSelectedMatch] = useState(2432453);
  let matchMap = {
    2432453: "Finals",
    2364966: "Semifinals",
    2432302: "Semifinals2",
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full bg-purple-300 flex flex-row mx-4">
      <div className="flex justify-center items-center">
        <img
          src="/icon3.png"
          alt="extensionIcon"
          className="h-[95%] px-2 rounded-3xl"
        />
      </div>
      <div className="w-3/5 border-red-300 border text-center h-full flex flex-col items-center justify-center gap-2 mx-auto">
        <p className="text-2xl">
          Tickr is a chrome extension that allows you to track the state of live
          DotA tournaments with ease. Showcasing the state of game, heat maps,
          and stats all across the board.
        </p>
        <div className="flex justify-between w-3/4">
          <div className="text-blue-600 hover:underline-offset-2 hover:underline cursor-pointer">
            Peter Joh
          </div>
          <div className="text-blue-600 hover:underline-offset-2 hover:underline cursor-pointer">
            Justin Rife
          </div>
          <div className="text-blue-600 hover:underline-offset-2 hover:underline cursor-pointer">
            Steven Sookhai
          </div>
          <div className="text-blue-600 hover:underline-offset-2 hover:underline cursor-pointer">
            Edmund Ju
          </div>
          <div className="text-blue-600 hover:underline-offset-2 hover:underline cursor-pointer">
            Alex Wong
          </div>
        </div>
      </div>
      <div className="text-center w-1/5 flex justify-center items-center">
        {/* <ul>
          <li>Finals</li>
          <li>Semifinals Upper Bracket</li>
          <li>Semifinals Lower Bracket</li>
        </ul> */}
        {/* will fix later */}
        <div className="w-1/2 border-2 bg-white">
          <Dropdown
            options={Object.values(matchMap)}
            onChange={(e) => {
              let key = Object.keys(matchMap).find(
                (key) => matchMap[key] === e.value
              );
              setSelectedMatch(key);
            }}
            placeholder="Select a match"
          />
        </div>
        <div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md "
            onClick={() => selectGame(selectedMatch)}
          >
            Let's trackr
          </button>
        </div>
      </div>
    </div>
  );
}
