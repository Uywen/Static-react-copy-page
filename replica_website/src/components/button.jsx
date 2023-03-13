import React from "react";

// used function component to display list of anime
function Buttons(props){
    const displayAnime = () =>{
        // an alert will pop up
        alert(props.list)
    }
    return(
        // when the user clicks on the button an alert will pop up
<button className="Site" onClick={displayAnime}>View full Site</button>
    )
}

export default Buttons