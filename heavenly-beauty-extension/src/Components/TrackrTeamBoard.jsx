export default function TrackrTeamBoard(props) {
  return (
    <div className="h-full w-full flex flex-row border-red-700 border-2 justify-evenly">
      <div className="flex flex-col text-sm">
        <div className="text-center">Team 1</div>
        <div className="flex gap-1 mx-auto">
          Items - 1 - 2 - 3 -4 - 5 - 6 Kill - Death - Assist - CS Player 1
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex gap-1 mx-auto">
          Items - 1 - 2 - 3 -4 - 5 - 6 Kill - Death - Assist - CS Player 2
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex gap-1 mx-auto">
          Items - 1 - 2 - 3 -4 - 5 - 6 Kill - Death - Assist - CS Player 3
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex gap-1 mx-auto">
          Items - 1 - 2 - 3 -4 - 5 - 6 Kill - Death - Assist - CS Player 4
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex gap-1 mx-auto">
          Items - 1 - 2 - 3 -4 - 5 - 6 Kill - Death - Assist - CS Player 5
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="w-[200px] h-full border-2 border-yellow-200">HeatMap</div>
      <div className="flex flex-col text-sm">
        <div className="text-center">Team 2</div>
        <div className="flex gap-1 mx-auto">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" /> Player 6
          CS Kill - Death - Assist - Items - 1 - 2 - 3 -4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" /> Player 7
          CS Kill - Death - Assist - Items - 1 - 2 - 3 -4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" /> Player 8
          CS Kill - Death - Assist - Items - 1 - 2 - 3 -4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" /> Player 9
          CS Kill - Death - Assist - Items - 1 - 2 - 3 -4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto">
          <img src="/TeemoSquare.webp" className="w-[20px] h-[20px]" /> Player
          10 CS Kill - Death - Assist - Items - 1 - 2 - 3 -4 - 5 - 6
        </div>
      </div>
    </div>
  );
}
