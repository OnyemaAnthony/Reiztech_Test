import '../App';

export const NavBar = ({setsortBy}: any) => {
    return (
        <div className="nav-container">
          <div className="nav-flex">
            <button onClick={() => setsortBy("assending")}>alphabetically assending</button>
            <button onClick={() => setsortBy("descending")}>alphabetically decending</button>
            <button onClick={() => setsortBy("oceania")}>Oceania region</button>
            <button onClick={() => setsortBy("lithunia")}>{"<"} Lithuania Area</button>
          </div>

          <div className="nav-flex">
          </div>
        </div>
    )
}