export default function TrackrTeamBoardCard(props) {
  const {name, money, kills, deaths, assists, items} = props.player

  if (props.background) {
    return (
      <div className="flex gap-1 mx-auto items-center justify-evenly w-full bg-[#665c5c]">
          <img
            src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
            className="w-[20px] h-[20px] mx-auto"
          />{" "}
          <div className="w-full">
            {`${name} ${money} ${kills} - ${deaths} - ${assists} - Items - ${items}`}
          </div>
      </div>
    )
  } else {
    return (
      <div className="flex gap-1 mx-auto items-center justify-evenly w-full ">
            <img
              src="https://private-user-images.githubusercontent.com/91306408/266902651-58d3991a-c03e-495e-b6c4-687a0d11babc.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ0MDQ1MDgsIm5iZiI6MTY5NDQwNDIwOCwicGF0aCI6Ii85MTMwNjQwOC8yNjY5MDI2NTEtNThkMzk5MWEtYzAzZS00OTVlLWI2YzQtNjg3YTBkMTFiYWJjLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxMVQwMzUwMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YTA2NTRkMWExZjAyZGU5Nzg1YjVlNzQwY2MzN2RlOGU1ZTMzOTBlM2RjYjljMWYxZWIyYzRlNWVmOGIwMTU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QbA3GK-kxcFYrInlE7IheTnMDGa4--M35Vd3-rJCXDI"
              className="w-[20px] h-[20px] mx-auto"
            />{" "}
            {`${name} ${money} ${kills} - ${deaths} - ${assists} - Items - ${items}`}
      </div>
    )
  }
}
