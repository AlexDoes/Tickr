import Heatmap from "../DataVisualization/Heatmap";
export default function TrackrTeamBoard(props) {
  return (
    <div className="h-full w-full flex flex-row border-red-700 justify-evenly xs:text-sm lg:text-lg xl:text-xl">
      <div className="flex flex-col  xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-2/8 border-2">
        <div className="text-center font-bold">Radiant</div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 1
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 2
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 3
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 4
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 5
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />
        </div>
      </div>
      <div className="h-full border-yellow-200 w-[25%] flex justify-evenly items-center gap-1">
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <p className="teamname1 text-[#37ff44] py-2 text-[2rem]"> CLG </p>
          <p className="text-[3rem] items-center h-full py-2 flex justify-center text-[#98ff88]">
            42
          </p>
          <p className="text-[1.5rem] mb-2 text-slate-400 py-2">42/49/72</p>
        </div>
        <img className="h-full w-[h-full]" src="/dotaMap.jpg"></img>
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <p className="teamname2 text-[#ff6666] py-2 text-[2rem]"> TSM </p>
          <p className="text-[3rem] items-center h-full py-2 flex justify-center text-[#ba3232]">
            49
          </p>
          <p className="text-[1.5rem] mb-2 text-slate-400 py-2">49/42/78</p>
        </div>
      </div>
      <div className="flex flex-col  xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-2/8">
        <div className="text-center font-bold">Dire</div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />{" "}
          Player 6 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />{" "}
          Player 7 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />{" "}
          Player 8 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />{" "}
          Player 9 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px] mx-auto" />{" "}
          <div className="w-full">
            Player 10 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
          </div>
        </div>
      </div>
      {/* <div className="w-1/8 h-full">slider</div> */}
    </div>
  );
}
