export default function TrackrTeamBoardCard(props) {
  const { name, money, kills, deaths, assists, items } = props.player;

  if (props.background) {
    return (
      //bg-[#665c5c]
      <div
        className={`flex h-1/6 items-center w-full bg-gradient-to-r ${
          props.radiant
            ? "justify-end bg-gradient-to-r from-[#f5f5f5] via-slate-600 to-[#068d45]"
            : "justify-start bg-gradient-to-l to-[#f5f5f5] via-slate-800 from-[#d12721]"
        }`}
      >
        <div className="grid grid-cols-7 grid-rows-1 gap-4 justify-items-center items-center h-full ">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className={`w-[h] h-full ${props.radiant ? "order-last" : ""}`}
          />{" "}
          <div
            class={`text-black name col-span-2 ${
              !props.radiant ? "order-last" : ""
            }`}
          >
            {name}
          </div>
          <div class={`money ${!props.radiant ? "order-6" : ""}`}>{money}g</div>
          <div class={`kills`}>{kills}(k)</div>
          <div class={`deaths`}>{deaths}(d)</div>
          <div class={`assists`}>{assists}(a)</div>
          {/* <div class={`items`}>{items}</div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`flex h-1/6 gap-1 items-center w-full ${
          props.radiant
            ? "justify-end text-[#98ff88]"
            : "justify-start text-[#ff6666]"
        }`}
      >
        <div className="grid h-full grid-cols-7 grid-rows-1 gap-4 justify-items-center items-center">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className={`w-[h] h-full ${props.radiant ? "order-last" : ""}`}
          />{" "}
          <div class={`name col-span-2 ${!props.radiant ? "order-last" : ""}`}>
            {name}
          </div>
          <div class={`money ${!props.radiant ? "order-6" : ""}`}>{money}g</div>
          <div class={`kills`}>{kills}(k)</div>
          <div class={`deaths`}>{deaths}(d)</div>
          <div class={`assists`}>{assists}(a)</div>
          {/* <div class={`items`}>{items}</div> */}
        </div>
      </div>
    );
  }
}
