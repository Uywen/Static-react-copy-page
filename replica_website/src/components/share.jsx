import React from "react";
// all the images used located in the components file
import facebook from "./facebook.png"
import twitter from "./twitter.png"
import reddit from "./red-reddit.png"
import telegram from "./Telegram.jpeg"
import add from "./add.png"

function Share(){
    return(
        <div className="share">
            {/* placed in a span because i wanted the paragraph to be written below */}
            <span><b>Share Zoro</b></span>
            <p>to your friends</p>
            {/* all the images that i added the names are listed at "alt" */}
            <img className="Facebook" src={facebook} alt="facebook"></img>
            <img className="Twitter" src={twitter} alt="twitter"></img>
            <img className="Reddit" src={reddit} alt="reddit"></img>
            <img className="Telegram" src={telegram} alt="telegram"></img>
            <img className="Add" src={add} alt="add"></img>
        </div>
    )
}

export default Share