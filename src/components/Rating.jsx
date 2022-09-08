import React from "react";
import etoileVide from "../components/images/etoilevide.png"
import etoileOrange from "../components/images/etoilefull.png"

function Rating({props}) {
    const rating = JSON.parse(props)
    return <div className="rating">  
            {[...Array(rating)].map((star, index) => {
                return <img key={index} src={etoileOrange} alt='stars'/>
            })} 
            {[...Array(5-rating)].map((star, index) => {
                if(5-rating === 0) {
                    return null
                }
                return <img key={index} src={etoileVide} alt='stars'/>           
            })} 
    </div>
}

export default Rating