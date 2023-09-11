import Heatmap from "../DataVisualization/Heatmap";
import { useWebSocketData } from "../WebSocketDataDiv/websockethook.js"; // Import the custom hook


export default function TrackrTeamBoard(props) {

  const data = useWebSocketData(); // Use the custom hook to fetch WebSocket data


  return (
    <div className="h-full w-full flex flex-row border-red-700 justify-evenly xs:text-sm lg:text-lg xl:text-xl relative">
      <div className="flex flex-col xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-2/8 h-full justify-evenly">
        <div className="text-center font-bold text-[#37ff44]">Radiant</div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full bg-[#665c5c]">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 1
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 2
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full bg-[#665c5c]">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 3
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 4
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />
        </div>
        <div className="flex gap-1 mx-auto items-center justify-start w-full bg-[#665c5c]">
          Items - 1 - 2 - 3 - 4 - 5 - 6 Kill - Death - Assist - CS Player 5
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />
        </div>
      </div>
      <div className="h-full border-yellow-200 w-[25%] flex justify-evenly items-center gap-1">
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <p className="teamname1 text-[#37ff44] py-2 text-[2rem] "> CLG </p>
          <p className="text-[3rem] items-center h-full py-2 flex justify-center text-[#98ff88]">
            42
          </p>
          <p className="text-[1.5rem] mb-2 text-slate-400 py-2">42/49/72</p>
        </div>
        <img
          className="h-full w-[h-full]"
          src="https://private-user-images.githubusercontent.com/91306408/266902749-81d2faa9-f0cb-4a5d-b095-fd3b6fda51ae.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI3NDktODFkMmZhYTktZjBjYi00YTVkLWIwOTUtZmQzYjZmZGE1MWFlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTExVDAzNTAwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIxZDY1Nzk3MjZkMTNkYmFlZWQxNGVhMzRjNmFlNzgyNDFlNzE0Yzk2YTc0NDk0ZDdjNmE2NmE1Nzc4YTk4NzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.MINojlMtKkxdFBPzRlI3qp0WcBbpYER1f00LtaYRpDY"
        ></img>
        <div className="flex flex-col gap-1 text-center h-full outline-red-900 w-full justify-between">
          <p className="teamname2 text-[#ff6666] py-2 text-[2rem]"> TSM </p>
          <p className="text-[3rem] items-center h-full py-2 flex justify-center text-[#ba3232]">
            49
          </p>
          <p className="text-[1.5rem] mb-2 text-slate-400 py-2">49/42/78</p>
        </div>
      </div>
      <div className="flex flex-col  xs:text-[.5rem] lg:text-[1rem] xl:text-[1rem] w-2/8 h-full justify-evenly">
        <div className="text-center font-bold text-[#ff6666]  ">Dire</div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full bg-[#665c5c]">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />{" "}
          Player 6 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />{" "}
          Player 7 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full bg-[#665c5c]">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />{" "}
          Player 8 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />{" "}
          Player 9 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
        </div>
        <div className="flex gap-1 mx-auto items-center justify-evenly w-full bg-[#665c5c]">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />{" "}
          <div className="w-full">
            Player 10 CS Kill - Death - Assist - Items - 1 - 2 - 3 - 4 - 5 - 6
          </div>
        </div>
      </div>
      <button
        className="absolute top-1 right-2 border p-1 rounded-lg px-1.5 text-xs text-cyan-400 border-cyan-300 hover:text-red-300 hover:border-red-300"
        onClick={props.exit}
      >
        x
      </button>
    </div>
  );
}
