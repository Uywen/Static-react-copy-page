import React from "react";
import search from "./search.png"

// my searchbar
function Searcbar(){
    return(
        <>
        {/* used an input field with "search anime inside" */}
        <input className="search" type="text" name="keyword" placeholder="Search anime..."></input>
        {/* added an image as the search button */}
        <img className="Icon" src={search} alt="magnifying-glass"></img>
        </>
    )
}

export default Searcbar