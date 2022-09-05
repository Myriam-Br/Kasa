import React from "react";
import etoileVide from "../components/styles/images/etoilevide.png"
import etoileOrange from "../components/styles/images/etoilefull.png"
import { useState } from "react";

function Rating({props}) {
    const[rating, setRating] = useState(JSON.parse(props))
    return <div className="rating">
        <div>
            {[...Array(rating)].map((star, index) => {
                return <img key={index} src={etoileOrange} alt='stars'/>
            })} 
        </div>
        <div>
            {[...Array(() => setRating(rating === 5-rating))].map((star, index) => {
                if(5-rating === 0) {
                    return null
                }
                return <img key={index} src={etoileVide} alt='stars'/>
                
            })} 
          
        </div>
        
          
        
    </div>
}

export default Rating