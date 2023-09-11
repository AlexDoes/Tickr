import React from "react";
import { useState } from "react";
import Dropdown from "react-dropdown";
export default function Splash(props) {
  const selectGame = props.function;
  const [selectedMatch, setSelectedMatch] = useState(null);
  let matchMap = {
    2432453: "Dota2 2022 Finals",
    2364966: "Dota2 2022 Semifinals Upper Bracket",
    2432302: "Dota2 2022 Semifinals Lower Bracket",
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full flex flex-row mx-4 ">
      <div className="flex justify-center items-center">
        <img
          src="https://private-user-images.githubusercontent.com/91306408/266902753-76431dd8-497f-4756-a1bc-b1e26d384ee5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI3NTMtNzY0MzFkZDgtNDk3Zi00NzU2LWExYmMtYjFlMjZkMzg0ZWU1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTExVDAzNTAwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ4MDU0M2Q3MDc4ODUwZWEyZDJlYTU0MjcwZWQwMjYyM2NmNzgyNWE5ZmM2ZGFlMmY1OTI2ODNjOWRiYmU0OWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JV9nMO54FPZFqu3Gt43kssTHqfKk9ipM922_g1K0ZeI"
          alt="extensionIcon"
          className="h-[80%] px-2 rounded-3xl"
        />
      </div>
      <div className="w-3/5 border-red-300  text-center h-full flex flex-col items-center justify-center mx-auto gap-2">
        <div className="border border-slate-300 p-6 rounded-xl">
          <p className="md:text-lg xs:text-xs">
            Tickr is a chrome extension that allows you to track the state of
            live DotA tournaments with ease.
          </p>
          <p className="md:text-lg xs:text-xs">
            Showcasing the state of game, heat maps, and stats all across the
            board.
          </p>
        </div>
        <div className="flex justify-between w-3/4 m-2">
          <div className="text-[#8FFFC3] hover:underline-offset-2 hover:underline cursor-pointer">
            Peter Joh
          </div>
          <div className="text-[#8FFFC3] hover:underline-offset-2 hover:underline cursor-pointer">
            Justin Rife
          </div>
          <div className="text-[#8FFFC3] hover:underline-offset-2 hover:underline cursor-pointer">
            Steven Sookhai
          </div>
          <div className="text-[#8FFFC3] hover:underline-offset-2 hover:underline cursor-pointer">
            Edmund Ju
          </div>
          <div className="text-[#8FFFC3] hover:underline-offset-2 hover:underline cursor-pointer">
            Alex Wong
          </div>
        </div>
      </div>
      <div className="text-center w-1/4 flex justify-center gap-4 items-center border-yellow-100 h-full">
        {/* <ul>
          <li>Finals</li>
          <li>Semifinals Upper Bracket</li>
          <li>Semifinals Lower Bracket</li>
        </ul> */}
        {/* will fix later */}
        <div className="w-full border-2 relative bg-slate-800 text-md text-emerald-400 rounded-md cursor-pointer min-h-1/4 h-1/4 text-sm break-normal">
          <button onClick={() => setIsOpen(!isOpen)} className="w-full h-full">
            {selectedMatch ? matchMap[selectedMatch] : "Select a game"}
          </button>

          {isOpen && (
            <ul className="dropdown-menu absolute flex flex-col items-start border-2 bg-slate-700 text-sm">
              {Object.values(matchMap)
                .sort((a, b) => a[0] - b[0])
                .map((match) => (
                  <li
                    className="cursor-pointer hover:bg-slate-800 w-full items-start text-start"
                    key={match}
                    onClick={() => {
                      let key = Object.keys(matchMap).find(
                        (key) => matchMap[key] === match
                      );
                      setSelectedMatch(key);
                      setIsOpen(false);
                    }}
                  >
                    {match}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="h-1/4 w-full">
          <button
            className="bg-gradient-to-l hover:from-[#8FFFC3] hover:to-[#015f2d] text-[#22276b] px-4 py-2 rounded-md group h-full from-[#ef6969] to-[#800e0e] ease-in-out duration-1000 accent-lime-500"
            onClick={() => selectGame(selectedMatch)}
          >
            <div className="bg-gradient-to-r from-[#f5f5f5] via-slate-600 to-[#003016] inline-block text-gray-300 bg-clip-text group-hover:text-gray-800">
              let's tickr
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
